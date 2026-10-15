import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, BarChart3, ChevronDown, Megaphone, Menu, MousePointerClick, PenLine,
  Share2, Sparkles, TrendingUp, Users, Video, Wallet, X, LifeBuoy, Target, UserPlus,
} from "lucide-react";
import { SITE, COMMISSION, NAV_LINKS, FAQS } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE.title },
      { name: "description", content: SITE.description },
      { property: "og:title", content: SITE.title },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.canonicalUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE.title },
      { name: "twitter:description", content: SITE.description },
    ],
    links: [{ rel: "canonical", href: SITE.canonicalUrl }],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Cta({ children, variant = "primary", href = SITE.signupUrl, className = "" }: {
  children: React.ReactNode; variant?: "primary" | "ghost" | "light"; href?: string; className?: string;
}) {
  const base = "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5";
  const v = {
    primary: "bg-brand text-primary-foreground shadow-glow hover:brightness-110",
    ghost: "border border-ink-foreground/25 text-ink-foreground hover:bg-ink-foreground/10",
    light: "bg-accent text-accent-foreground hover:brightness-105 shadow-soft",
  }[variant];
  const isExternal = href.startsWith("http");
  return (
    <a href={href} {...(isExternal ? ext : {})} className={`${base} ${v} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
    </a>
  );
}

function SectionHead({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-ink/90 shadow-soft backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Navigasi utama">
        <a href="#top" className="flex items-center gap-2 text-lg font-extrabold text-ink-foreground">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand"><Sparkles className="h-4 w-4" aria-hidden /></span>
          {SITE.brandName}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href} className="text-sm font-medium text-ink-muted transition-colors hover:text-ink-foreground">{l.label}</a></li>
          ))}
        </ul>
        <div className="hidden md:block"><Cta className="min-h-10 py-2">Daftar Sekarang</Cta></div>
        <button className="grid h-11 w-11 place-items-center rounded-lg text-ink-foreground md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Tutup menu" : "Buka menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-ink-foreground/10 px-5 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-3 font-medium text-ink-foreground">{l.label}</a></li>
            ))}
          </ul>
          <Cta className="w-full">Daftar Sekarang</Cta>
        </div>
      )}
    </header>
  );
}

function DashboardMock() {
  const bars = [35, 52, 44, 68, 60, 82, 74];
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden>
      <div className="rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-6 backdrop-blur-xl shadow-glow">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink-muted">Ringkasan Komisi</p>
          {/* <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">Contoh tampilan</span> */}
        </div>
        <p className="mt-3 text-3xl font-extrabold text-ink-foreground">Rp 100,000</p>
        <p className="text-xs text-ink-muted">Data ilustrasi, bukan hasil nyata</p>
        <div className="mt-6 flex h-36 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-lg bg-brand opacity-90" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[["Klik", MousePointerClick], ["Referral", Users], ["Konversi", TrendingUp]].map(([l, I]) => {
            const Icon = I as typeof Users;
            return (
              <div key={l as string} className="rounded-xl bg-ink-foreground/5 p-3">
                <Icon className="mx-auto h-4 w-4 text-accent" />
                <p className="mt-1 text-xs text-ink-muted">{l as string}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="animate-float absolute -left-6 -top-6 hidden rounded-2xl bg-card p-3 text-card-foreground shadow-soft sm:flex sm:items-center sm:gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent"><Wallet className="h-4 w-4" /></span>
        <span className="text-xs font-semibold">Komisi masuk</span>
      </div>
      <div className="animate-float absolute -bottom-5 -right-4 hidden rounded-2xl bg-card p-3 text-card-foreground shadow-soft [animation-delay:2s] sm:flex sm:items-center sm:gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary"><BarChart3 className="h-4 w-4 text-primary" /></span>
        <span className="text-xs font-semibold">Tracking real-time</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-hero relative overflow-hidden pt-28 pb-20 text-ink-foreground lg:pt-36 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-4 py-1.5 text-xs font-semibold text-ink-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden /> Program Afiliasi
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Raih Penghasilan dari Setiap <span className="text-accent">Rekomendasi</span> yang Berhasil
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">
            Bergabunglah dengan program afiliasi dan monetisasi audiens Anda dengan merekomendasikan produk digital kepada orang yang tepat.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Cta>Mulai Jadi Affiliate</Cta>
            <Cta variant="ghost" href="#cara-kerja">Pelajari Cara Kerjanya</Cta>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            {["Pendaftaran gratis", "Tautan referral unik", "Dashboard pelacakan"].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{t}</li>
            ))}
          </ul>
        </div>
        <DashboardMock />
      </div>
    </section>
  );
}

const BENEFITS = [
  { icon: Wallet, t: "Potensi Penghasilan", d: "Dapatkan komisi sesuai ketentuan program untuk referral yang memenuhi syarat." },
  { icon: Share2, t: "Mudah Dipromosikan", d: "Bagikan tautan referral melalui website, blog, media sosial, atau kanal pemasaran yang sesuai." },
  { icon: BarChart3, t: "Tracking Referral", d: "Pantau performa referral dan konversi melalui sistem pelacakan yang disediakan program." },
  { icon: LifeBuoy, t: "Dukungan Promosi", d: "Manfaatkan materi promosi dan panduan yang tersedia untuk membantu aktivitas pemasaran." },
];

function Benefits() {
  return (
    <section id="keuntungan" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Keuntungan" title="Kenapa Bergabung dengan Program Afiliasi Kami?" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, t, d }, i) => (
            <article key={t} className="reveal group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commission() {
  const flow = [
    { icon: Share2, l: "Anda bagikan tautan" },
    { icon: MousePointerClick, l: "Audiens mengklik" },
    { icon: Target, l: "Pembelian valid" },
    { icon: Wallet, l: "Komisi tercatat" },
  ];
  return (
    <section id="komisi" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Komisi</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Setiap Rekomendasi Membuka Peluang</h2>
          <p className="mt-4 text-muted-foreground">
            Anda menerima komisi untuk setiap pembelian yang memenuhi syarat melalui tautan referral Anda. Besaran komisi mengikuti produk yang dipromosikan, syarat validasi, dan ketentuan program yang berlaku.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {[["Tarif komisi", COMMISSION.rate], ["Masa atribusi", COMMISSION.cookieDays]].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-border bg-card p-5">
                <dt className="text-xs font-semibold text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-2xl font-extrabold text-primary">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-muted-foreground">Nilai di atas adalah placeholder. Lihat ketentuan resmi untuk angka aktual.</p>
          <div className="mt-8"><Cta>Mulai Pendaftaran</Cta></div>
        </div>
        <ol className="reveal relative grid gap-4">
          {flow.map(({ icon: Icon, l }, i) => (
            <li key={l} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-primary-foreground"><Icon className="h-5 w-5" aria-hidden /></span>
              <span className="font-semibold">{l}</span>
              <span className="ml-auto text-sm font-bold text-muted-foreground">0{i + 1}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", icon: UserPlus, t: "Daftar", d: "Isi formulir pendaftaran program afiliasi melalui tautan resmi." },
    { n: "02", icon: Megaphone, t: "Promosikan", d: "Bagikan tautan referral melalui kanal pemasaran yang diperbolehkan." },
    { n: "03", icon: Wallet, t: "Dapatkan Komisi", d: "Peroleh komisi dari referral yang valid sesuai ketentuan program." },
  ];
  return (
    <section id="cara-kerja" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Cara Kerja" title="Mulai dalam 3 Langkah Mudah" />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(({ n, icon: Icon, t, d }, i) => (
            <li key={n} className="reveal relative rounded-3xl border border-border bg-card p-8 shadow-soft" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="text-5xl font-extrabold text-secondary">{n}</span>
              <Icon className="absolute right-8 top-8 h-7 w-7 text-primary" aria-hidden />
              <h3 className="mt-4 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Audience() {
  const items = [
    { icon: PenLine, t: "Blogger & Pemilik Website", d: "Sisipkan rekomendasi pada artikel, ulasan, dan tutorial Anda." },
    { icon: Video, t: "Content Creator", d: "Tambahkan tautan di video, deskripsi, atau bio media sosial." },
    { icon: TrendingUp, t: "Digital Marketer", d: "Integrasikan ke strategi kampanye dan funnel pemasaran Anda." },
    { icon: Users, t: "Komunitas & Publisher", d: "Bagikan solusi bermanfaat kepada anggota dan pembaca Anda." },
  ];
  return (
    <section className="bg-secondary/60 py-20 lg:py-28" aria-labelledby="audience-title">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Untuk Siapa</p>
          <h2 id="audience-title" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Cocok untuk Siapa Saja?</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, t, d }) => (
            <article key={t} className="reveal rounded-3xl bg-card p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground"><Icon className="h-6 w-6" aria-hidden /></span>
              <h3 className="mt-5 font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="px-5 py-20" aria-labelledby="cta-title">
      <div className="reveal bg-hero mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-16 text-center text-ink-foreground shadow-glow sm:px-12">
        <h2 id="cta-title" className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Siap Mengembangkan Potensi Penghasilan Anda?</h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-muted">Mulai perjalanan afiliasi Anda dengan strategi promosi yang tepat dan rekomendasi yang bermanfaat bagi audiens.</p>
        <div className="mt-8"><Cta variant="light">Daftar Program Afiliasi</Cta></div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead eyebrow="FAQ" title="Pertanyaan yang Sering Diajukan" />
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-border bg-card">
                <h3>
                  <button id={`faq-btn-${i}`} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`} onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left font-semibold">
                    {f.q}
                    <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden />
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="flex items-center gap-2 text-lg font-extrabold text-ink-foreground">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand"><Sparkles className="h-4 w-4" aria-hidden /></span>{SITE.brandName}
          </p>
          <p className="mt-4 text-xs leading-relaxed">Disclaimer: Komisi dan hasil yang diperoleh dapat berbeda untuk setiap afiliasi dan bergantung pada ketentuan program. Website ini bukan situs resmi penyedia produk mana pun.</p>
        </div>
        <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} className="hover:text-ink-foreground">{l.label}</a>)}
          <a href={SITE.termsUrl} {...ext} className="hover:text-ink-foreground">Syarat & Ketentuan</a>
          <a href={SITE.privacyUrl} {...ext} className="hover:text-ink-foreground">Kebijakan Privasi</a>
        </nav>
      </div>
      <p className="border-t border-ink-foreground/10 py-6 text-center text-xs">© {new Date().getFullYear()} {SITE.brandName}. Hak cipta dilindungi.</p>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Commission />
        <HowItWorks />
        <Audience />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
