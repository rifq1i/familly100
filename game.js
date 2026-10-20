const $ = id => document.getElementById(id);
let G = {}, muted = false, ac;

// ---- Efek suara (WebAudio, tanpa file) ----
function beep(f, d, type = "sine", delay = 0) {
  if (muted) return;
  ac = ac || new (window.AudioContext || window.webkitAudioContext)();
  const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + delay;
  o.type = type; o.frequency.value = f; o.connect(g); g.connect(ac.destination);
  g.gain.setValueAtTime(.2, t); g.gain.exponentialRampToValueAtTime(.001, t + d);
  o.start(t); o.stop(t + d);
}
const sfx = {
  benar: () => { beep(660, .15); beep(880, .25, "sine", .12); },
  salah: () => { beep(150, .5, "sawtooth"); },
  tik: () => beep(1000, .05, "square"),
  menang: () => [523, 659, 784, 1047].forEach((f, i) => beep(f, .3, "triangle", i * .15))
};

function show(id) { document.querySelectorAll(".screen").forEach(s => s.classList.remove("active")); $(id).classList.add("active"); }
const norm = s => s.toLowerCase().replace(/[.,'"()]/g, "").replace(/\s+/g, " ").trim();
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

function poolFor(bab) { return bab === "all" ? [...BANK.bab1.soal, ...BANK.bab2.soal] : BANK[bab].soal; }
function fillCount() {
  const max = poolFor($("bab").value).length;
  $("jml").innerHTML = Array.from({ length: max }, (_, i) => `<option ${i + 1 === Math.min(5, max) ? "selected" : ""}>${i + 1}</option>`).join("");
}
$("bab").onchange = fillCount; fillCount();

$("mulai").onclick = () => {
  const bab = $("bab").value;
  G = {
    names: [$("t1").value || "Tim 1", $("t2").value || "Tim 2"], score: [0, 0],
    qs: shuffle(poolFor(bab)).slice(0, +$("jml").value), i: 0, limit: +$("waktu").value,
    babText: bab === "all" ? "Babak Gabungan 1945–1959" : BANK[bab].judul
  };
  show("game"); loadQ();
};

function loadQ() {
  const q = G.qs[G.i];
  Object.assign(G, { open: q.a.map(() => false), strikes: 0, pot: 0, steal: false, over: false, turn: G.i % 2 });
  $("soal").textContent = q.q;
  $("babInfo").textContent = `${G.babText} • Soal ${G.i + 1}/${G.qs.length}`;
  $("lanjut").classList.add("hidden");
  [$("jawab"), $("kirim"), $("lewat")].forEach(e => e.disabled = false);
  $("jawab").value = ""; $("jawab").focus();
  render(); startTimer();
}

function render() {
  const q = G.qs[G.i];
  $("board").innerHTML = q.a.map((a, i) => `<div class="slot ${G.open[i] === true ? "open" : G.open[i] === "miss" ? "miss" : ""}">
    <div class="cover">${G.open[i] ? `<span>${i + 1}. ${a[0]}</span><span class="pt">${a[1]}</span>` : i + 1}</div></div>`).join("");
  $("strikes").innerHTML = [0, 1, 2].map(i => `<span class="${i < G.strikes ? "x" : "o"}">✖</span>`).join("");
  $("pot").textContent = G.pot;
  [0, 1].forEach(t => { $("n" + t).textContent = G.names[t]; $("s" + t).textContent = G.score[t]; $("tm" + t).classList.toggle("on", !G.over && G.turn === t); });
  $("banner").textContent = G.over ? "" : G.steal ? `🎯 KESEMPATAN MEREBUT! ${G.names[G.turn]} hanya punya satu jawaban.` : `Giliran: ${G.names[G.turn]}`;
}

function startTimer() {
  clearInterval(G.tm); G.left = G.limit; tick(false);
  G.tm = setInterval(() => { G.left--; tick(true); if (G.left <= 0) { clearInterval(G.tm); wrong(); } }, 1000);
}
function tick(sound) {
  $("timer").textContent = G.left; $("timer").classList.toggle("low", G.left <= 5);
  if (sound && G.left <= 5 && G.left > 0) sfx.tik();
}

function submit() {
  if (G.over) return;
  const v = norm($("jawab").value); $("jawab").value = ""; $("jawab").focus();
  if (!v) return;
  const q = G.qs[G.i];
  const idx = q.a.findIndex((a, i) => !G.open[i] && a[2].some(k => v.includes(norm(k)) || (v.length >= 4 && norm(k).includes(v))));
  if (idx < 0) return wrong();
  G.open[idx] = true; G.pot += q.a[idx][1]; sfx.benar();
  if (G.steal) return endRound(G.turn);          // perebut berhasil
  if (G.open.every(Boolean)) return endRound(G.turn);
  render(); startTimer();
}

function wrong() {
  sfx.salah(); document.body.classList.add("shake"); setTimeout(() => document.body.classList.remove("shake"), 500);
  if (G.steal) return endRound(1 - G.turn);       // perebut gagal: poin ke tim awal
  G.strikes++;
  if (G.strikes >= 3) { G.steal = true; G.turn = 1 - G.turn; render(); startTimer(); }
  else { render(); startTimer(); }
}

function endRound(winner) {
  clearInterval(G.tm); G.over = true; G.score[winner] += G.pot;
  G.open = G.open.map(o => o || "miss");
  [$("jawab"), $("kirim"), $("lewat")].forEach(e => e.disabled = true);
  render();
  $("banner").textContent = `🏆 ${G.names[winner]} mendapat ${G.pot} poin!`;
  $("timer").classList.remove("low");
  $("lanjut").textContent = G.i + 1 < G.qs.length ? "Soal Berikutnya" : "Lihat Hasil Akhir";
  $("lanjut").classList.remove("hidden");
}

$("kirim").onclick = submit;
$("jawab").onkeydown = e => { if (e.key === "Enter") submit(); };
$("lewat").onclick = () => { if (!G.over) wrong(); };
$("lanjut").onclick = () => {
  if (++G.i < G.qs.length) return loadQ();
  const [a, b] = G.score;
  $("juara").textContent = a === b ? "Hasil seri!" : `Pemenang: ${G.names[a > b ? 0 : 1]} 🎉`;
  $("akhir").innerHTML = G.names.map((n, i) => `<div><span>${n}</span><b>${G.score[i]}</b></div>`).join("");
  show("end"); sfx.menang();
};
$("ulang").onclick = () => show("setup");
$("muteBtn").onclick = () => { muted = !muted; $("muteBtn").textContent = muted ? "🔇" : "🔊"; };
