// ===== Navigasi menu =====
let R = {};
document.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
function go(id) {
  clearInterval(G.tm); clearInterval(R.tm);
  if (id === "skor") renderSkor();
  show(id); $("homeBtn").classList.toggle("hidden", id === "menu");
}
$("homeBtn").onclick = () => go("menu");

// ===== Rebutan Soal =====
const rbPool = b => b === "all" ? [...RB.bab1, ...RB.bab2] : RB[b];
function rbFill() {
  const n = rbPool($("rbab").value).length;
  $("rjml").innerHTML = Array.from({ length: n }, (_, i) => `<option ${i + 1 === Math.min(8, n) ? "selected" : ""}>${i + 1}</option>`).join("");
}
$("rbab").onchange = rbFill; rbFill();

$("rmulai").onclick = () => {
  R = { names: [$("rt1").value || "Tim 1", $("rt2").value || "Tim 2"], score: [0, 0], i: 0,
    qs: shuffle(rbPool($("rbab").value)).slice(0, +$("rjml").value) };
  show("rbGame"); loadR();
};

function loadR() {
  const q = R.qs[R.i];
  R.opts = shuffle(q.o.map((t, i) => ({ t, ok: i === 0 })));
  Object.assign(R, { st: "wait", locked: [false, false], who: -1, mark: {} });
  $("rSoal").textContent = q.q;
  $("rInfo").textContent = `Soal ${R.i + 1}/${R.qs.length} • Benar +10 poin • salah tidak mengurangi poin`;
  $("rNext").classList.add("hidden");
  rbTimer(15, () => reveal("Waktu habis, tidak ada yang menekan tombol."));
  rbRender("Siapa cepat, dia dapat! Tekan tombol tim kalian.");
}

function rbRender(msg) {
  $("rBanner").textContent = msg;
  $("rOpts").innerHTML = R.opts.map((o, i) => {
    const c = R.mark[i] || (R.st === "done" && o.ok ? "good" : "");
    return `<button class="opt ${c}" data-i="${i}" ${R.st === "answer" ? "" : "disabled"}><b>${i + 1}</b> ${o.t}</button>`;
  }).join("");
  document.querySelectorAll(".opt").forEach(b => b.onclick = () => pick(+b.dataset.i));
  [0, 1].forEach(t => {
    $("rn" + t).textContent = R.names[t]; $("rs" + t).textContent = R.score[t];
    $("rtm" + t).classList.toggle("on", R.who === t && R.st === "answer");
    $("bz" + t).disabled = R.st !== "wait" || R.locked[t];
  });
}

function rbTimer(sec, onEnd) {
  clearInterval(R.tm); R.left = sec; rbTick(false);
  R.tm = setInterval(() => { R.left--; rbTick(true); if (R.left <= 0) { clearInterval(R.tm); onEnd(); } }, 1000);
}
function rbTick(s) {
  $("rTimer").textContent = R.left; $("rTimer").classList.toggle("low", R.left <= 5);
  if (s && R.left <= 5 && R.left > 0) sfx.tik();
}

function buzz(t) {
  if (R.st !== "wait" || R.locked[t]) return;
  R.st = "answer"; R.who = t; beep(440, .25, "square");
  rbTimer(10, () => wrongPick(-1));
  rbRender(`🔔 ${R.names[t]} menekan tombol! Pilih jawaban (klik atau tombol 1–5).`);
}

function pick(i) {
  if (R.st !== "answer") return;
  if (R.opts[i].ok) {
    R.score[R.who] += 10; sfx.benar();
    reveal(`✅ Benar! ${R.names[R.who]} mendapat +10 poin.`);
  } else wrongPick(i);
}

function wrongPick(i) {
  const w = R.who; if (i >= 0) R.mark[i] = "bad";
  R.locked[w] = true; sfx.salah();
  if (R.locked[1 - w]) return reveal(`❌ ${R.names[w]} salah. Kedua tim sudah mencoba.`);
  R.st = "wait"; R.who = -1;
  rbTimer(10, () => reveal("Waktu habis, soal ditutup."));
  rbRender(`❌ ${R.names[w]} salah (tanpa pengurangan poin). Kesempatan ${R.names[1 - w]}: tekan tombol tim!`);
}

function reveal(msg) {
  clearInterval(R.tm); R.st = "done"; $("rTimer").classList.remove("low");
  rbRender(msg);
  $("rNext").textContent = R.i + 1 < R.qs.length ? "Soal Berikutnya" : "Lihat Hasil Akhir";
  $("rNext").classList.remove("hidden");
}

$("bz0").onclick = () => buzz(0);
$("bz1").onclick = () => buzz(1);
$("rNext").onclick = () => {
  if (++R.i < R.qs.length) return loadR();
  recordScore("rebutan", R.names, R.score);
  const [a, b] = R.score;
  $("rJuara").textContent = a === b ? "Hasil seri!" : `Pemenang: ${R.names[a > b ? 0 : 1]} 🎉`;
  $("rAkhir").innerHTML = R.names.map((n, i) => `<div><span>${n}</span><b>${R.score[i]}</b></div>`).join("");
  go("rbEnd"); sfx.menang();
};
document.addEventListener("keydown", e => {
  if (!$("rbGame").classList.contains("active") || e.target.tagName === "INPUT") return;
  const k = e.key.toLowerCase();
  if (k === "a") buzz(0); else if (k === "l") buzz(1);
  else if (/^[1-5]$/.test(k) && R.st === "answer" && R.opts[+k - 1]) pick(+k - 1);
});
