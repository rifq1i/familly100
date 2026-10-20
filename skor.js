// ===== Papan Skor: akumulasi skor dari kedua permainan (disimpan di localStorage) =====
const KEY = "f100_skor",
  GAME = { survei: "Survei 100", rebutan: "Rebutan Soal" };
const loadSkor = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch (e) {
    return [];
  }
};
const saveSkor = (a) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(a));
  } catch (e) {}
};
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

// Dipanggil saat satu permainan selesai
function recordScore(game, names, scores) {
  const a = loadSkor(),
    w = Date.now();
  names.forEach((n, i) => a.push({ t: n.trim(), g: game, s: scores[i], w }));
  saveSkor(a);
}

function renderSkor() {
  const a = loadSkor(),
    el = $("skorBody");
  if (!a.length) {
    el.innerHTML =
      '<div class="panel">Belum ada skor. Selesaikan satu permainan untuk melihat papan skor.</div>';
    return;
  }
  const m = {}; // nama tim (tanpa beda huruf besar/kecil) -> total
  a.forEach((r) => {
    const o = (m[r.t.toLowerCase()] ||= {
      n: r.t,
      survei: 0,
      rebutan: 0,
      main: 0,
    });
    o.n = r.t;
    o[r.g] += r.s;
    o.main++;
  });
  const rows = Object.values(m)
    .map((o) => ({ ...o, total: o.survei + o.rebutan }))
    .sort((x, y) => y.total - x.total);
  const medal = ["🥇", "🥈", "🥉"];
  el.innerHTML = `<div class="tbl"><table>
    <tr><th>#</th><th>Tim</th><th>Survei 100</th><th>Rebutan Soal</th><th>Total</th><th>Main</th></tr>
    ${rows
      .map(
        (
          o,
          i,
        ) => `<tr class="${i === 0 ? "lead" : ""}"><td>${medal[i] || i + 1}</td><td>${esc(o.n)}</td>
      <td>${o.survei}</td><td>${o.rebutan}</td><td><b>${o.total}</b></td><td>${o.main}</td></tr>`,
      )
      .join("")}
  </table></div>
  <h3>Riwayat terakhir</h3>
  <div class="tbl"><table>${a
    .slice(-10)
    .reverse()
    .map(
      (
        r,
      ) => `<tr><td>${new Date(r.w).toLocaleString("id-ID", { dateStyle: "short", timeStyle: "short" })}</td>
    <td>${GAME[r.g]}</td><td>${esc(r.t)}</td><td><b>${r.s}</b></td></tr>`,
    )
    .join("")}</table></div>`;
}

$("resetSkor").onclick = () => {
  if (confirm("Hapus semua skor yang tersimpan?")) {
    saveSkor([]);
    renderSkor();
  }
};

