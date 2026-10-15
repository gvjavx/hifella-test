/**
 * Central configuration for the affiliate landing page.
 * TODO: Replace every PLACEHOLDER value below with real, verified program data.
 */
export const SITE = {
  brandName: "Hifella Afiliasi", // PLACEHOLDER wordmark — replace with your brand
  canonicalUrl: "#", //"https://example.com/", // PLACEHOLDER — your live domain
  title: "Program Afiliasi — Raih Komisi dari Setiap Rekomendasi",
  description:
    "Gabung program afiliasi dan monetisasi audiens Anda dengan merekomendasikan produk digital. Daftar gratis, bagikan tautan, dapatkan komisi sesuai ketentuan.",
  signupUrl: "#", // "https://example.com/affiliate/signup", // PLACEHOLDER — official registration URL
  termsUrl: "#", //"https://example.com/affiliate/terms", // PLACEHOLDER — official terms
  privacyUrl: "#" //"https://example.com/privacy", // PLACEHOLDER — privacy policy
};

/** Commission details. Leave as placeholders until verified from the official program. */
export const COMMISSION = {
  rate: "10 %", // PLACEHOLDER
  cookieDays: "30 hari", // PLACEHOLDER
  payoutSchedule: "[jadwal pembayaran]", // PLACEHOLDER
  minimumPayout: "[minimum pencairan]", // PLACEHOLDER
};

export const NAV_LINKS = [
  { href: "#keuntungan", label: "Keuntungan" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#komisi", label: "Komisi" },
  { href: "#faq", label: "FAQ" },
];

export const FAQS = [
  {
    q: "Apa itu program afiliasi?",
    a: "Program afiliasi adalah kerja sama di mana Anda merekomendasikan produk melalui tautan referral unik. Saat referral Anda melakukan pembelian yang memenuhi syarat, Anda mendapatkan komisi.",
  },
  {
    q: "Bagaimana cara mendaftar?",
    a: "Klik tombol \u201cDaftar Sekarang\u201d untuk menuju formulir pendaftaran resmi. Isi data Anda, tunggu proses peninjauan, lalu dapatkan tautan referral setelah disetujui.",
  },
  {
    q: "Siapa yang dapat bergabung?",
    a: "Blogger, pemilik website, content creator, digital marketer, dan pengelola komunitas dapat mendaftar. Persetujuan akhir mengikuti kriteria dalam ketentuan program.",
  },
  {
    q: "Bagaimana komisi dihitung?",
    a: `Komisi dihitung dari pembelian valid melalui tautan Anda, dengan tarif ${COMMISSION.rate} dan masa atribusi ${COMMISSION.cookieDays}. Detail akhir mengikuti produk dan ketentuan program.`,
  },
  {
    q: "Bagaimana cara melacak referral?",
    a: "Setelah bergabung, Anda dapat memantau klik, referral, dan konversi melalui sistem pelacakan yang disediakan oleh program.",
  },
  {
    q: "Kapan komisi dibayarkan?",
    a: `Komisi dibayarkan sesuai ${COMMISSION.payoutSchedule} setelah melewati masa validasi dan mencapai ${COMMISSION.minimumPayout}.`,
  },
  {
    q: "Apakah ada persyaratan khusus untuk promosi?",
    a: "Ya. Beberapa metode promosi dapat dibatasi, misalnya spam atau iklan pada kata kunci merek tertentu. Selalu periksa ketentuan program sebelum berpromosi.",
  },
  {
    q: "Di mana saya dapat membaca ketentuan lengkap program?",
    a: "Ketentuan lengkap tersedia di halaman syarat dan ketentuan resmi program yang ditautkan di bagian bawah halaman ini.",
  },
];
