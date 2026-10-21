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
          ["Burhanuddin Harahap", 10, ["burhanuddin", "harahap"]],
          ["Djuanda (Kabinet Karya)", 10, ["djuanda", "juanda", "karya"]],
          ["Ali Sastroamidjojo II", 10, ["ali ii", "ali 2"]],
          ["Ali Sastroamidjojo I", 15, ["ali sastro", "ali i", "ali 1"]],
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

// Bank Rebutan: {q: pertanyaan, o: [jawaban benar, pengecoh...], } -> jawaban benar SELALU indeks pertama (diacak saat tampil)
const RB = {
  bab1: [
    {
      q: "Siapa yang mengetik naskah Proklamasi Kemerdekaan?",
      o: ["Sayuti Melik", "Soekarni", "Ahmad Soebardjo", "Chairul Saleh"],
    },
    {
      q: "Proklamasi dibacakan di kediaman Soekarno di jalan…",
      o: [
        "Pegangsaan Timur No. 56",
        "Menteng No. 31",
        "Imam Bonjol No. 1",
        "Medan Merdeka Barat",
      ],
    },
    {
      q: "Hari Pahlawan 10 November memperingati pertempuran di…",
      o: ["Surabaya", "Ambarawa", "Bandung", "Medan"],
    },
    {
      q: "Palagan Ambarawa (Desember 1945) dipimpin oleh…",
      o: ["Kolonel Soedirman", "Bung Tomo", "Letkol Soeharto", "A.H. Nasution"],
    },
    {
      q: "Perundingan Renville dilaksanakan di atas kapal…",
      o: ["USS Renville", "HMS Victory", "KRI Dewaruci", "SS Linggarjati"],
    },
    {
      q: "Serangan Umum 1 Maret 1949 di Yogyakarta dipimpin oleh…",
      o: [
        "Letkol Soeharto",
        "Jenderal Soedirman",
        "Bung Tomo",
        "Kolonel Gatot Subroto",
      ],
    },
    {
      q: "Pemerintah Darurat Republik Indonesia (PDRI) dipimpin oleh…",
      o: [
        "Syafruddin Prawiranegara",
        "Mohammad Hatta",
        "Sutan Sjahrir",
        "Amir Sjarifuddin",
      ],
    },
    {
      q: "Belanda mengakui kedaulatan Indonesia (hasil KMB) pada…",
      o: ["27 Desember 1949", "17 Agustus 1945", "1 Maret 1949", "5 Juli 1959"],
    },
    {
      q: "Ibu kota RI dipindahkan ke Yogyakarta pada tahun…",
      o: ["1946", "1945", "1947", "1948"],
    },
    {
      q: "Perjanjian Linggarjati mengakui secara de facto wilayah RI yaitu Jawa, Madura, dan…",
      o: ["Sumatera", "Kalimantan", "Sulawesi", "Papua"],
    },
  ],
  bab2: [
    {
      q: "Pemilu 1955 dilaksanakan pada masa kabinet…",
      o: ["Burhanuddin Harahap", "Natsir", "Wilopo", "Ali Sastroamidjojo I"],
    },
    {
      q: "Konferensi Asia Afrika 1955 diselenggarakan di kota…",
      o: ["Bandung", "Jakarta", "Yogyakarta", "Surabaya"],
    },
    {
      q: "Kabinet pertama masa Demokrasi Liberal (1950) dipimpin oleh…",
      o: ["Mohammad Natsir", "Sukiman", "Wilopo", "Djuanda"],
    },
    {
      q: "Gerakan Benteng digagas oleh…",
      o: [
        "Sumitro Djojohadikusumo",
        "Iskaq Tjokrohadisurjo",
        "Syafruddin Prawiranegara",
        "Mohammad Hatta",
      ],
    },
    {
      q: "Deklarasi Djuanda 1957 menyatakan laut antarpulau Indonesia adalah…",
      o: [
        "Bagian dari wilayah NKRI",
        "Laut internasional",
        "Zona netral",
        "Wilayah bersama ASEAN",
      ],
    },
    {
      q: "Dekrit Presiden 5 Juli 1959 menetapkan kembali berlakunya…",
      o: ["UUD 1945", "UUDS 1950", "Konstitusi RIS 1949", "UUD Sementara 1959"],
    },
    {
      q: "Dalam sistem ekonomi Ali-Baba, “Ali” melambangkan pengusaha…",
      o: ["Pribumi", "Tionghoa", "Belanda", "Asing"],
    },
    {
      q: "PRRI diproklamasikan tahun 1958 di wilayah…",
      o: ["Sumatera Barat", "Sulawesi Utara", "Jawa Barat", "Aceh"],
    },
    {
      q: "Partai peraih suara terbanyak pada Pemilu 1955 adalah…",
      o: ["PNI", "Masyumi", "NU", "PKI"],
    },
    {
      q: "Mosi Integral Natsir (1950) mendorong kembalinya Indonesia ke bentuk…",
      o: ["Negara kesatuan", "Negara federal", "Kerajaan", "Persemakmuran"],
    },
  ],
};

// ===== PERLUASAN BANK SOAL (Survei 100: soal dan jawaban papan bertambah) =====
BANK.bab1.soal[2] = {
  q: "Sebutkan perundingan/persetujuan Indonesia–Belanda 1946–1949!",
  a: [
    ["Linggarjati", 22, ["linggarjati"]],
    ["Renville", 22, ["renville"]],
    ["Roem-Roijen", 18, ["roem", "royen", "roijen"]],
    ["Konferensi Meja Bundar (KMB)", 18, ["kmb", "meja bundar"]],
    ["Perundingan Hoge Veluwe", 10, ["hoge", "veluwe"]],
    ["Persetujuan Gencatan Senjata (1946)", 10, ["gencatan", "cease"]],
  ],
};
BANK.bab1.soal[5] = {
  q: "Sebutkan hasil Konferensi Meja Bundar (KMB) 1949!",
  a: [
    [
      "Pengakuan kedaulatan (27 Desember 1949)",
      30,
      ["kedaulatan", "pengakuan"],
    ],
    ["Pembentukan RIS", 25, ["ris", "serikat"]],
    ["Pembentukan Uni Indonesia–Belanda", 20, ["uni"]],
    ["Irian Barat ditunda", 15, ["irian", "papua"]],
    ["RIS menanggung utang Hindia Belanda", 10, ["utang", "hutang"]],
  ],
};
BANK.bab1.soal[6] = {
  q: "Sebutkan keputusan/lembaga penting di awal kemerdekaan 1945!",
  a: [
    ["KNIP", 22, ["knip", "komite nasional"]],
    ["BKR", 18, ["bkr", "badan keamanan rakyat"]],
    ["TKR", 18, ["tkr", "tentara keamanan rakyat"]],
    ["PPKI", 14, ["ppki"]],
    ["Kabinet Presidensial", 14, ["kabinet"]],
    ["Pembagian 8 provinsi", 14, ["provinsi"]],
  ],
};
BANK.bab2.soal[2] = {
  q: "Sebutkan partai peraih suara terbanyak pada Pemilu 1955!",
  a: [
    ["PNI", 24, ["pni", "nasional indonesia"]],
    ["Masyumi", 24, ["masyumi"]],
    ["Nahdlatul Ulama (NU)", 18, ["nu", "nahdlatul"]],
    ["PKI", 16, ["pki", "komunis"]],
    ["PSII", 6, ["psii"]],
    ["Parkindo", 6, ["parkindo"]],
    ["Partai Katolik", 6, ["katolik"]],
  ],
};
BANK.bab1.soal.push(
  {
    q: "Sebutkan tokoh golongan muda menjelang Proklamasi 1945!",
    a: [
      ["Soekarni", 25, ["soekarni", "sukarni"]],
      ["Chairul Saleh", 20, ["chairul", "khairul"]],
      ["Wikana", 20, ["wikana"]],
      ["Sutan Sjahrir", 15, ["sjahrir", "syahrir"]],
      ["Adam Malik", 10, ["adam malik"]],
      ["B.M. Diah", 10, ["diah"]],
    ],
  },
  {
    q: "Sebutkan hasil sidang PPKI 18 Agustus 1945!",
    a: [
      ["Mengesahkan UUD 1945", 30, ["uud", "undang-undang dasar"]],
      ["Memilih Presiden dan Wakil Presiden", 30, ["presiden", "memilih"]],
      ["Membentuk KNIP", 20, ["knip", "komite nasional"]],
      [
        "Menetapkan Pancasila sebagai dasar negara",
        20,
        ["pancasila", "dasar negara"],
      ],
    ],
  },
  {
    q: "Sebutkan perunding/diplomat Indonesia pada perundingan 1946–1949!",
    a: [
      ["Sutan Sjahrir", 25, ["sjahrir", "syahrir"]],
      ["Amir Sjarifuddin", 20, ["amir", "sjarifuddin"]],
      ["Mohammad Roem", 20, ["roem"]],
      ["Mohammad Hatta", 20, ["hatta"]],
      ["Haji Agus Salim", 15, ["agus salim", "salim"]],
    ],
  },
  {
    q: "Sebutkan peristiwa perlawanan rakyat di daerah 1945–1947!",
    a: [
      ["Peristiwa Hotel Yamato (Surabaya)", 25, ["yamato"]],
      ["Pertempuran Lima Hari Semarang", 20, ["semarang"]],
      ["Peristiwa Merah Putih di Manado", 15, ["manado", "merah putih"]],
      ["Pertempuran Lima Hari Palembang", 15, ["palembang"]],
      ["Bandung Lautan Api", 15, ["bandung"]],
      ["Pertempuran Lengkong", 10, ["lengkong"]],
    ],
  },
  {
    q: "Sebutkan pemimpin RI yang ditawan Belanda saat Agresi Militer II!",
    a: [
      ["Soekarno", 25, ["soekarno", "sukarno"]],
      ["Mohammad Hatta", 25, ["hatta"]],
      ["Sutan Sjahrir", 20, ["sjahrir", "syahrir"]],
      ["Haji Agus Salim", 15, ["agus salim", "salim"]],
      ["Mohammad Roem", 15, ["roem"]],
    ],
  },
  {
    q: "Sebutkan negara bagian bentukan Belanda (1946–1949)!",
    a: [
      ["Negara Indonesia Timur (NIT)", 25, ["indonesia timur", "nit"]],
      ["Negara Pasundan", 20, ["pasundan"]],
      ["Negara Sumatera Timur", 20, ["sumatera timur"]],
      ["Negara Madura", 15, ["madura"]],
      ["Negara Jawa Timur", 10, ["jawa timur"]],
      ["Negara Sumatera Selatan", 10, ["sumatera selatan"]],
    ],
  },
);
BANK.bab2.soal.push(
  {
    q: "Sebutkan tokoh yang berperan dalam Konferensi Asia Afrika 1955!",
    a: [
      ["Ali Sastroamidjojo", 30, ["ali sastro", "ali"]],
      ["Soekarno", 25, ["soekarno", "sukarno"]],
      ["Jawaharlal Nehru", 15, ["nehru"]],
      ["Zhou Enlai", 10, ["zhou", "chou"]],
      ["Gamal Abdel Nasser", 10, ["nasser"]],
      ["U Nu", 5, ["nu"]],
      ["Mohammad Ali Bogra", 5, ["bogra"]],
    ],
  },
  {
    q: "Sebutkan penyebab sering jatuhnya kabinet masa Demokrasi Liberal!",
    a: [
      ["Persaingan antarpartai", 30, ["persaingan", "partai"]],
      ["Mosi tidak percaya parlemen", 25, ["mosi"]],
      ["Koalisi tidak stabil", 20, ["koalisi"]],
      ["Pemberontakan daerah", 15, ["pemberontakan", "daerah"]],
      ["Krisis ekonomi", 10, ["ekonomi"]],
    ],
  },
  {
    q: "Sebutkan tokoh yang terlibat PRRI/Permesta!",
    a: [
      ["Ahmad Husein", 25, ["husein", "hussein"]],
      ["Syafruddin Prawiranegara", 20, ["syafruddin", "prawiranegara"]],
      ["Sumitro Djojohadikusumo", 15, ["sumitro"]],
      ["Mohammad Natsir", 15, ["natsir"]],
      ["Ventje Sumual", 15, ["sumual"]],
      ["Maludin Simbolon", 10, ["simbolon"]],
    ],
  },
  {
    q: "Sebutkan peristiwa politik-militer dalam negeri 1952–1957!",
    a: [
      ["Peristiwa 17 Oktober 1952", 30, ["17 oktober"]],
      ["Peristiwa Cikini (1957)", 25, ["cikini"]],
      ["Peristiwa 27 Juni 1955", 20, ["27 juni"]],
      ["Konsepsi Presiden 1957", 15, ["konsepsi"]],
      ["Dewan Banteng", 10, ["banteng"]],
    ],
  },
  {
    q: "Sebutkan hasil/dampak Konferensi Asia Afrika 1955!",
    a: [
      ["Dasasila Bandung", 35, ["dasasila", "dasa sila"]],
      ["Solidaritas Asia-Afrika", 25, ["solidaritas", "persatuan"]],
      [
        "Dorongan kemerdekaan bangsa Asia-Afrika",
        20,
        ["kemerdekaan", "dekolonisasi"],
      ],
      ["Cikal bakal Gerakan Non-Blok", 20, ["non-blok", "non blok", "nonblok"]],
    ],
  },
  {
    q: "Sebutkan negara peserta KAA 1955 (selain Indonesia)!",
    a: [
      ["RRT (Tiongkok)", 20, ["rrt", "tiongkok", "china", "cina"]],
      ["India", 15, ["india"]],
      ["Mesir", 15, ["mesir"]],
      ["Jepang", 12, ["jepang"]],
      ["Filipina", 10, ["filipina"]],
      ["Turki", 10, ["turki"]],
      ["Vietnam", 10, ["vietnam"]],
      ["Thailand", 8, ["thailand"]],
    ],
  },
);

// ===== PERLUASAN BANK REBUTAN: semua soal kini 5 pilihan =====
[
  "Wikana",
  "Kebon Sirih No. 5",
  "Semarang",
  "Slamet Riyadi",
  "USS Missouri",
  "Ahmad Yani",
  "Assaat",
  "2 September 1945",
  "1949",
  "Bali",
].forEach((x, i) => RB.bab1[i].o.push(x));
[
  "Sukiman",
  "Semarang",
  "Burhanuddin Harahap",
  "Ali Sastroamidjojo",
  "Wilayah sengketa",
  "Piagam Jakarta",
  "Arab",
  "Maluku",
  "Partai Sosialis Indonesia",
  "Negara teokrasi",
].forEach((x, i) => RB.bab2[i].o.push(x));
RB.bab1.push(
  {
    q: "Teks Proklamasi ditandatangani oleh…",
    o: [
      "Soekarno dan Hatta",
      "Soekarno dan Sutan Sjahrir",
      "Hatta dan Soekarni",
      "Soekarno dan Sayuti Melik",
      "Soekarno dan Soebardjo",
    ],
  },
  {
    q: "Bendera Sang Saka Merah Putih pada Proklamasi dijahit oleh…",
    o: [
      "Fatmawati",
      "Inggit Garnasih",
      "Utari",
      "R.A. Kartini",
      "Dewi Sartika",
    ],
  },
  {
    q: "Peristiwa Rengasdengklok terjadi pada tanggal…",
    o: [
      "16 Agustus 1945",
      "17 Agustus 1945",
      "15 Agustus 1945",
      "14 Agustus 1945",
      "18 Agustus 1945",
    ],
  },
  {
    q: "Pengerek bendera saat Proklamasi adalah…",
    o: [
      "Latief Hendraningrat dan Suhud",
      "Sayuti Melik dan Wikana",
      "Soekarni dan Wikana",
      "Hatta dan Soebardjo",
      "Fatmawati dan Soekarni",
    ],
  },
  {
    q: "Presiden dan Wakil Presiden RI pertama dipilih oleh…",
    o: ["PPKI", "BPUPKI", "KNIP", "DPR", "MPR"],
  },
  {
    q: "Peristiwa Bandung Lautan Api terjadi pada…",
    o: [
      "24 Maret 1946",
      "10 November 1945",
      "1 Maret 1949",
      "21 Juli 1947",
      "19 Desember 1948",
    ],
  },
  {
    q: "Agresi Militer Belanda II dimulai pada…",
    o: [
      "19 Desember 1948",
      "21 Juli 1947",
      "17 Agustus 1945",
      "1 Maret 1949",
      "27 Desember 1949",
    ],
  },
  {
    q: "Tokoh yang memimpin perang gerilya meski sedang sakit adalah…",
    o: [
      "Jenderal Soedirman",
      "Letkol Soeharto",
      "A.H. Nasution",
      "Bung Tomo",
      "Slamet Riyadi",
    ],
  },
  {
    q: "Salah satu hasil Perundingan Roem-Roijen 1949 adalah…",
    o: [
      "Pemerintah RI kembali ke Yogyakarta",
      "Pembentukan negara federal",
      "Pengakuan Irian Barat",
      "Pembubaran TNI",
      "Pengakuan Konstitusi RIS",
    ],
  },
  {
    q: "Perjanjian Linggarjati ditandatangani pada tahun…",
    o: ["1947", "1946", "1948", "1949", "1945"],
  },
);
RB.bab2.push(
  {
    q: "Perdana Menteri Indonesia saat Konferensi Asia Afrika 1955 adalah…",
    o: [
      "Ali Sastroamidjojo",
      "Burhanuddin Harahap",
      "Mohammad Natsir",
      "Wilopo",
      "Djuanda",
    ],
  },
  {
    q: "KAA 1955 menghasilkan kesepakatan bernama…",
    o: [
      "Dasasila Bandung",
      "Piagam Jakarta",
      "Deklarasi Djuanda",
      "Pancasila Bandung",
      "Trikora",
    ],
  },
  {
    q: "Gedung tempat berlangsungnya KAA 1955 adalah…",
    o: [
      "Gedung Merdeka",
      "Gedung Sate",
      "Balai Kota Bandung",
      "Istana Merdeka",
      "Gedung Dwi Warna",
    ],
  },
  {
    q: "Pemilu 1955 memilih anggota DPR dan…",
    o: ["Konstituante", "MPR", "DPD", "DPRD", "Presiden"],
  },
  {
    q: "Tugas utama Konstituante hasil Pemilu 1955 adalah…",
    o: [
      "Menyusun UUD baru",
      "Memilih presiden",
      "Membentuk kabinet",
      "Mengatur pemilu daerah",
      "Mengadili pejabat",
    ],
  },
  {
    q: "Peristiwa Cikini 1957 adalah upaya pembunuhan terhadap…",
    o: [
      "Presiden Soekarno",
      "Mohammad Hatta",
      "Mohammad Natsir",
      "Djuanda",
      "Ali Sastroamidjojo",
    ],
  },
  {
    q: "Nasionalisasi De Javasche Bank (1951) dilakukan pada masa Kabinet…",
    o: [
      "Sukiman",
      "Natsir",
      "Wilopo",
      "Ali Sastroamidjojo I",
      "Burhanuddin Harahap",
    ],
  },
  {
    q: "“Gunting Syafruddin” 1950 adalah kebijakan…",
    o: [
      "Pemotongan nilai uang",
      "Pembatasan impor beras",
      "Penghapusan pajak",
      "Pencabutan subsidi BBM",
      "Penambahan cadangan emas",
    ],
  },
  {
    q: "Presiden Soekarno menyampaikan Konsepsi Presiden pada tahun…",
    o: ["1957", "1955", "1956", "1958", "1959"],
  },
  {
    q: "Tokoh yang mengundurkan diri dari jabatan Wakil Presiden pada 1956 adalah…",
    o: [
      "Mohammad Hatta",
      "Sri Sultan HB IX",
      "Adam Malik",
      "Mohammad Natsir",
      "Syafruddin Prawiranegara",
    ],
  },
);
