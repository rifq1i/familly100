// Format jawaban: [teks tampil, poin, [kata kunci yang diterima]]
// Poin = bobot kepentingan fakta (total 100 per soal), bukan hasil survei nyata.
const BANK = {
  bab1: {
    judul: "1945–1949: Mempertahankan Kemerdekaan",
    soal: [
      {
        q: "Sebutkan tokoh yang berperan dalam Proklamasi Kemerdekaan 17 Agustus 1945!",
        a: [
          ["Soekarno", 35, ["soekarno", "sukarno", "bung karno"]],
          ["Mohammad Hatta", 30, ["hatta"]],
          ["Sayuti Melik", 12, ["sayuti", "melik"]],
          ["Fatmawati", 10, ["fatmawati"]],
          ["Latief Hendraningrat", 8, ["latief", "hendraningrat"]],
          ["Suhud", 5, ["suhud"]],
        ],
      },
      {
        q: "Sebutkan pertempuran mempertahankan kemerdekaan 1945–1949!",
        a: [
          [
            "Pertempuran Surabaya (10 November 1945)",
            30,
            ["surabaya", "10 november"],
          ],
          ["Palagan Ambarawa", 20, ["ambarawa"]],
          ["Bandung Lautan Api", 18, ["bandung"]],
          ["Medan Area", 12, ["medan"]],
          ["Serangan Umum 1 Maret 1949", 12, ["serangan umum", "1 maret"]],
          ["Puputan Margarana", 8, ["margarana", "puputan"]],
        ],
      },
      {
        q: "Sebutkan perundingan diplomasi Indonesia–Belanda 1946–1949!",
        a: [
          ["Linggarjati", 28, ["linggarjati"]],
          ["Renville", 28, ["renville"]],
          ["Roem-Roijen", 22, ["roem", "royen", "roijen"]],
          ["Konferensi Meja Bundar (KMB)", 22, ["kmb", "meja bundar"]],
        ],
      },
      {
        q: "Sebutkan tokoh yang berperan dalam perjuangan fisik 1945–1949!",
        a: [
          ["Jenderal Soedirman", 35, ["sudirman", "soedirman"]],
          ["Bung Tomo", 25, ["tomo"]],
          ["Soeharto", 15, ["soeharto", "suharto"]],
          ["A.H. Nasution", 15, ["nasution"]],
          ["Sri Sultan Hamengkubuwono IX", 10, ["hamengku", "sultan"]],
        ],
      },
      {
        q: "Sebutkan peristiwa penting sepanjang 1948–1949!",
        a: [
          ["Agresi Militer Belanda II", 30, ["agresi"]],
          ["Serangan Umum 1 Maret 1949", 25, ["serangan umum", "1 maret"]],
          ["Pembentukan PDRI", 20, ["pdri", "darurat"]],
          ["Perjanjian Roem-Roijen", 15, ["roem", "royen", "roijen"]],
          ["Konferensi Meja Bundar", 10, ["kmb", "meja bundar"]],
        ],
      },
      {
        q: "Sebutkan hasil Konferensi Meja Bundar (KMB) 1949!",
        a: [
          [
            "Pengakuan kedaulatan (27 Desember 1949)",
            35,
            ["kedaulatan", "pengakuan"],
          ],
          ["Pembentukan RIS", 30, ["ris", "serikat"]],
          ["Pembentukan Uni Indonesia–Belanda", 20, ["uni"]],
          ["Irian Barat ditunda", 15, ["irian", "papua"]],
        ],
      },
      {
        q: "Sebutkan lembaga penting yang lahir di awal kemerdekaan 1945!",
        a: [
          ["KNIP", 30, ["knip", "komite nasional"]],
          ["BKR", 25, ["bkr", "badan keamanan rakyat"]],
          ["TKR", 25, ["tkr", "tentara keamanan rakyat"]],
          ["PPKI", 20, ["ppki"]],
        ],
      },
      {
        q: "Sebutkan kota yang pernah menjadi pusat pemerintahan RI 1945–1949!",
        a: [
          ["Yogyakarta", 40, ["yogya", "jogja"]],
          ["Jakarta", 30, ["jakarta"]],
          ["Bukittinggi", 30, ["bukittinggi", "bukit tinggi"]],
        ],
      },
    ],
  },
  bab2: {
    judul: "1950–1959: Demokrasi Liberal",
    soal: [
      {
        q: "Sebutkan kabinet pada masa Demokrasi Liberal!",
        a: [
          ["Natsir", 25, ["natsir"]],
          ["Sukiman", 15, ["sukiman"]],
          ["Wilopo", 15, ["wilopo"]],
          ["Ali Sastroamidjojo I", 15, ["ali sastro", "ali i", "ali 1"]],
          ["Burhanuddin Harahap", 10, ["burhanuddin", "harahap"]],
          ["Djuanda (Kabinet Karya)", 10, ["djuanda", "juanda", "karya"]],
          ["Ali Sastroamidjojo II", 10, ["ali ii", "ali 2"]],
        ],
      },
      {
        q: "Sebutkan peristiwa penting di Indonesia tahun 1955!",
        a: [
          ["Konferensi Asia Afrika", 40, ["asia afrika", "kaa"]],
          [
            "Pemilu DPR (29 September)",
            30,
            ["pemilu", "pemilihan umum", "dpr"],
          ],
          ["Pemilu Konstituante (15 Desember)", 20, ["konstituante"]],
          ["Kabinet Burhanuddin Harahap", 10, ["burhanuddin", "harahap"]],
        ],
      },
      {
        q: "Sebutkan empat partai besar pemenang Pemilu 1955!",
        a: [
          ["PNI", 30, ["pni", "nasional indonesia"]],
          ["Masyumi", 30, ["masyumi"]],
          ["Nahdlatul Ulama (NU)", 20, ["nu", "nahdlatul"]],
          ["PKI", 20, ["pki", "komunis"]],
        ],
      },
      {
        q: "Sebutkan pemberontakan/gerakan daerah pada 1950–1959!",
        a: [
          ["DI/TII", 25, ["di/tii", "ditii", "di tii", "darul islam"]],
          ["PRRI", 20, ["prri"]],
          ["Permesta", 20, ["permesta"]],
          ["RMS", 20, ["rms", "republik maluku"]],
          ["APRA", 15, ["apra", "westerling"]],
        ],
      },
      {
        q: "Sebutkan lima negara pelopor Konferensi Asia Afrika (Konferensi Kolombo)!",
        a: [
          ["Indonesia", 30, ["indonesia"]],
          ["India", 25, ["india"]],
          ["Pakistan", 15, ["pakistan"]],
          ["Burma (Myanmar)", 15, ["burma", "myanmar"]],
          ["Sri Lanka (Ceylon)", 15, ["sri lanka", "ceylon", "srilanka"]],
        ],
      },
      {
        q: "Sebutkan isi Dekrit Presiden 5 Juli 1959!",
        a: [
          [
            "Kembali ke UUD 1945",
            40,
            ["uud 1945", "uud45", "uud '45", "undang-undang dasar 1945"],
          ],
          ["Pembubaran Konstituante", 35, ["konstituante", "bubar"]],
          ["Pembentukan MPRS dan DPAS", 25, ["mprs", "dpas"]],
        ],
      },
      {
        q: "Sebutkan kebijakan ekonomi masa Demokrasi Liberal!",
        a: [
          ["Gerakan Benteng", 30, ["benteng"]],
          ["Ekonomi Ali-Baba", 25, ["ali baba", "ali-baba"]],
          ["Nasionalisasi De Javasche Bank", 20, ["javasche", "nasionalisasi"]],
          [
            "Gunting Syafruddin (sanering)",
            15,
            ["gunting", "sanering", "syafruddin"],
          ],
          ["Persetujuan Finek", 10, ["finek", "finansial"]],
        ],
      },
      {
        q: "Sebutkan tokoh penting masa Demokrasi Liberal!",
        a: [
          ["Mohammad Natsir", 25, ["natsir"]],
          ["Ir. Djuanda", 25, ["djuanda", "juanda"]],
          ["Soekarno", 20, ["soekarno", "sukarno"]],
          ["Mohammad Hatta", 15, ["hatta"]],
          ["Syafruddin Prawiranegara", 15, ["syafruddin", "prawiranegara"]],
        ],
      },
    ],
  },
};
