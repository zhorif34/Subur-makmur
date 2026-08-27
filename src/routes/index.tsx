import { createFileRoute } from "@tanstack/react-router";

import { Instagram, ShoppingBag, ShoppingCart, ChevronDown, ArrowUp } from "lucide-react";

import { WhatsAppFloat } from "@/components/whatsapp-float";

import heroVideo from "@/assets/hero-video.mp4.asset.json";

import heroFallback from "@/assets/hero-fallback.jpg";

import logoAsset from "@/assets/logo.png.asset.json";

const logo = logoAsset.url;

import director from "@/assets/director.jpg";

import staff1 from "@/assets/staff-1.jpg";

import staff2 from "@/assets/staff-2.jpg";

import staff3 from "@/assets/staff-3.jpg";

import staff4 from "@/assets/staff-4.jpg";

import staff5 from "@/assets/staff-5.jpg";

import staff6 from "@/assets/staff-6.jpg";

import staff7 from "@/assets/staff-7.jpg";

const TOKOPEDIA_URL = "https://www.tokopedia.com/";

const SHOPEE_URL = "https://shopee.co.id/";

const INSTAGRAM_URL = "https://www.instagram.com/cvsuburmakmur";

const STAFF = [
  { name: "Ayu", role: "WAKIL DIREKTUR", photo: staff1 },

  { name: "Wandi", role: "Gudang", photo: staff2 },

  { name: "Lastri", role: "Sales", photo: staff3 },

  { name: "Tri", role: "SALES", photo: staff4 },

  { name: "Rina", role: "Admin", photo: staff5 },

  { name: "Rista", role: "Admin", photo: staff6 },

  { name: "Tia", role: "Purchase Order", photo: staff7 },
];

const PARTNERS = [
  "Petrokimia Gresik",
  "Pupuk Kaltim",
  "Pupuk Kujang",
  "Pupuk Iskandar Muda",

  "Syngenta",
  "Bayer Crop Science",
  "BASF",
  "Corteva",
  "FMC",
  "Nufarm",

  "Dow AgroSciences",
  "UPL",
  "Sumitomo Chemical",
  "Nippon Soda",
  "Agricon",

  "Petrosida Gresik",
  "Dharma Guna Wibawa",
  "Panca Agro Niaga",
  "Royal Agro",

  "Bisi International",
  "East West Seed",
  "Panah Merah",
  "Cap Kapal Terbang",

  "Known You Seed",
  "Takii Seed",
  "Sakata Seed",
  "Tanindo Subur Prima",

  "Meroke Tetap Jaya",
  "Behn Meyer",
  "Yara Indonesia",
  "Saprotan Utama",

  "Gramoxone",
  "Roundup",
  "Sido Agung",
  "Multi Sarana Indotani",

  "Honda Power Products",
  "Yanmar Agri",
  "Quick Traktor",
  "Maspion Agro",

  "Sanyo Sprayer",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CV Subur Makmur — Pupuk, Pestisida, Benih & Alat Pertanian" },

      {
        name: "description",

        content:
          "CV Subur Makmur menyediakan pupuk, pestisida, benih, dan alat pertanian 100% original dari merek resmi. Belanja mudah via Tokopedia dan Shopee.",
      },

      { property: "og:title", content: "CV Subur Makmur — Kebutuhan Pertanian Tentu Ada" },

      {
        property: "og:description",

        content:
          "Supplier terpercaya pupuk, pestisida, benih, dan alat pertanian 100% original untuk petani modern.",
      },

      { property: "og:type", content: "website" },

      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main>
      <TopBar />

      <Hero />

      <Profile />

      <Partners />

      <Footer />

      <WhatsAppFloat />
    </main>
  );
}

function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#home"

          aria-label="Kembali ke atas"

          className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 shadow-[var(--shadow-soft)] backdrop-blur transition-transform hover:scale-105"
        >
          <img src={logo} alt="Logo CV Subur Makmur" width={36} height={36} className="h-9 w-9" />

          <span className="hidden text-sm font-bold tracking-tight text-primary sm:inline">
            CV SUBUR MAKMUR
          </span>
        </a>

        <a
          href={INSTAGRAM_URL}

          target="_blank"

          rel="noopener noreferrer"

          aria-label="Instagram CV Subur Makmur"

          className="rounded-full bg-background/80 p-2.5 text-primary shadow-[var(--shadow-soft)] backdrop-blur transition-transform hover:scale-110"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"

        autoPlay

        loop

        muted

        playsInline

        poster={heroFallback}

        aria-hidden="true"
      >
        <source src={heroVideo.url} type="video/mp4" />
      </video>

      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-24 text-center">
        <img
          src={logo}

          alt="Logo CV Subur Makmur"

          width={720}

          height={720}

          className="h-[30rem] w-[30rem] translate-y-8 drop-shadow-lg sm:h-[42rem] sm:w-[42rem]"
        />

        <h1 className="mt-5 text-3xl font-extrabold uppercase tracking-[0.15em] text-primary-foreground drop-shadow-md sm:text-5xl lg:text-6xl">
          {"\n"}
        </h1>

        <p className="mt-5 max-w-2xl text-xl font-bold leading-snug text-accent drop-shadow sm:text-3xl lg:text-4xl">
          &ldquo;Distributor Pupuk, Pestisida, Benih, dan Alat Pertanian&rdquo;
        </p>

        <p className="mt-4 inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur sm:text-sm">
          100% Original &amp; Terpercaya
        </p>

        <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={TOKOPEDIA_URL}

            target="_blank"

            rel="noopener noreferrer"

            className="inline-flex items-center justify-center gap-2 rounded-full bg-tokopedia px-7 py-3.5 text-base font-bold text-tokopedia-foreground shadow-[var(--shadow-lift)] transition-transform duration-200 hover:scale-105 hover:brightness-110"
          >
            <ShoppingCart className="h-5 w-5" />
            Kunjungi Tokopedia
          </a>

          <a
            href={SHOPEE_URL}

            target="_blank"

            rel="noopener noreferrer"

            className="inline-flex items-center justify-center gap-2 rounded-full bg-shopee px-7 py-3.5 text-base font-bold text-shopee-foreground shadow-[var(--shadow-lift)] transition-transform duration-200 hover:scale-105 hover:brightness-110"
          >
            <ShoppingBag className="h-5 w-5" />
            Kunjungi Shopee
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href="#profil"

            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/60 px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/15"
          >
            Kenali Kami Lebih Dekat
            <ChevronDown className="h-4 w-4" />
          </a>

          <a
            href={INSTAGRAM_URL}

            target="_blank"

            rel="noopener noreferrer"

            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-accent"
          >
            <Instagram className="h-5 w-5" />
            Follow @cvsuburmakmur
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-glow">{eyebrow}</p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>

      {subtitle ? <p className="mt-3 text-base text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

function Profile() {
  return (
    <section id="profil" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Manajemen Kami"

          title="Profil Perusahaan"

          subtitle="Orang-orang di balik pelayanan CV Subur Makmur yang siap membantu kebutuhan pertanian Anda."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,380px)_1fr]">
          <figure className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl bg-secondary shadow-[var(--shadow-lift)]">
              <img
                src={director}

                alt="Foto Direktur Utama — CV Subur Makmur"

                loading="lazy"

                width={768}

                height={1024}

                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            <figcaption className="mt-5 text-center">
              <p className="text-xl font-bold text-foreground">Endah</p>

              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-primary-glow">
                Direktur Utama — CV Subur Makmur
              </p>
            </figcaption>
          </figure>

          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              CV Subur Makmur berkomitmen menyediakan pupuk, pestisida, benih, dan alat pertanian
              yang <strong className="text-foreground">100% original</strong> langsung dari
              distributor serta pabrikan resmi. Kami melayani petani, pemilik kebun, dan pelaku
              agribisnis dengan produk terjamin dan pendampingan yang informatif.
            </p>

            <h3 className="mt-10 text-lg font-bold text-foreground">Jajaran Staff</h3>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {STAFF.map((person) => (
                <article
                  key={person.role}

                  className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <img
                    src={person.photo}

                    alt={`Foto staff ${person.role} CV Subur Makmur`}

                    loading="lazy"

                    width={768}

                    height={1024}

                    className="aspect-[3/4] w-full object-cover"
                  />

                  <div className="p-3 text-center">
                    <p className="truncate text-sm font-bold text-card-foreground">{person.name}</p>

                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-primary-glow">
                      {person.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-4 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0">
      <span className="text-center text-sm font-bold leading-tight text-primary">{name}</span>
    </div>
  );
}

function Partners() {
  return (
    <section id="partner" className="scroll-mt-20 bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Jaminan Keaslian"

          title="Partner &amp; Merek Resmi"

          subtitle="Kami bermitra dengan pabrikan dan distributor resmi pupuk, pestisida, benih, serta alat pertanian."
        />
      </div>

      <div className="group relative mt-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="marquee-track flex w-max gap-5 px-5 group-hover:[animation-play-state:paused]">
          {[...PARTNERS, ...PARTNERS].map((name, i) => (
            <PartnerLogo key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Geser ke kanan atau kiri untuk melihat seluruh partner kami.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 text-center sm:px-6">
        <img
          src={logo}
          alt="Logo CV Subur Makmur"
          loading="lazy"
          width={256}
          height={256}
          className="h-64 w-64"
        />

        <p className="text-lg font-bold uppercase tracking-widest">CV Subur Makmur</p>

        <p className="max-w-md text-sm text-primary-foreground/80">
          Pupuk, Pestisida, Benih, Alat Pertanian â€” TENTU ADA. 100% Original &amp; Terpercaya.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={TOKOPEDIA_URL}

            target="_blank"

            rel="noopener noreferrer"

            className="rounded-full bg-tokopedia px-5 py-2 text-sm font-semibold text-tokopedia-foreground transition-transform hover:scale-105"
          >
            Tokopedia
          </a>

          <a
            href={SHOPEE_URL}

            target="_blank"

            rel="noopener noreferrer"

            className="rounded-full bg-shopee px-5 py-2 text-sm font-semibold text-shopee-foreground transition-transform hover:scale-105"
          >
            Shopee
          </a>

          <a
            href={INSTAGRAM_URL}

            target="_blank"

            rel="noopener noreferrer"

            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-5 py-2 text-sm font-semibold transition-colors hover:bg-primary-foreground/15"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>

        <a
          href="#home"

          className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/70 transition-colors hover:text-accent"
        >
          <ArrowUp className="h-3.5 w-3.5" /> Kembali ke atas
        </a>

        <p className="text-xs text-primary-foreground/60">
          Â© {new Date().getFullYear()} CV Subur Makmur. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
