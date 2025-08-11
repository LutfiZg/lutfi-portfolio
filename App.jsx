import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Sun,
  Moon,
  ExternalLink,
  ArrowUpRight,
  Download,
  GraduationCap,
  BookOpen,
  PenTool,
  ShieldHalf,
  Rocket,
  Code2,
  Layers,
  Cpu,
  Database,
  Boxes,
  Globe,
  Anchor,
  ChevronRight,
  ArrowUp,
  Award,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";

/**
 * LUTFI — PORTFOLIO WEBSITE
 * -------------------------------------------------------------
 * Tech stack used here:
 * - React (single file component)
 * - Tailwind CSS utility classes (assumed available in preview)
 * - framer-motion for tasteful animations
 * - lucide-react for icons
 * - recharts for one lightweight visualization (skills)
 *
 * How to deploy (quick):
 * 1) Create a fresh Vite app:  
 *    npm create vite@latest lutfi-portfolio -- --template react
 *    cd lutfi-portfolio && npm i framer-motion lucide-react recharts
 *    npm i -D tailwindcss postcss autoprefixer && npx tailwindcss init -p
 * 2) Configure Tailwind (content paths), add the base styles.  
 * 3) Replace App.jsx with this file's default export component contents.  
 * 4) npm run dev (local), then commit & push to GitHub.  
 * 5) Deploy to Netlify/Vercel. Build command: `npm run build`, output: `dist`.
 *
 * NOTE: All content is centralized below in the DATA object. Personalize safely.
 */

const DATA = {
  person: {
    name: "Lutfi Ghifari Hibban",
    alias: "Lutfi",
    title: "IT Undergraduate · Writer · Market Analyst",
    summary:
      "Mahasiswa S1 Teknologi Informasi (Telkom University, 2024–2028) dengan minat kuat pada AI, Blockchain, dan Keamanan Siber. Berpengalaman sebagai Penulis Lepas dan Market Analyst mandiri (RSI, MACD, candlestick). Terbiasa riset terstruktur, kolaborasi tim, dan problem solving; sedang mencari peluang magang/part‑time/asisten lab untuk menguatkan pengalaman praktis pemrograman & penelitian.",
    location: "Rengasdengklok, Karawang, Jawa Barat, Indonesia",
    email: "lutfizg8@gmail.com",
    phone: "+62 857-7169-2328",
    website: "https://lutfi118.wordpress.com",
    socials: {
      github: "https://github.com/LutfiZg",
      linkedin: "#",
      twitter: "#",
    },
    keywords: [
      "Artificial Intelligence",
      "Machine Learning",
      "Blockchain",
      "Cybersecurity",
      "Algorithms",
      "Data Structures",
      "C++",
      "Go",
      "Technical Analysis",
      "RSI",
      "MACD",
      "Candlestick",
      "Risk Management",
      "TradingView",
      "MetaTrader",
      "Stockbit",
      "Writing",
      "Critical Thinking",
      "Teamwork",
      "Communication",
      "Problem Solving",
    ],
    resumeUrl: "/Lutfi_CV.pdf",
  },
  skills: {
    categories: [
      {
        name: "Pemrograman",
        items: ["C++", "Go", "C", "Algorithms", "Data Structures"],
        icon: Code2,
      },
      {
        name: "Analisis Pasar",
        items: [
          "Technical Analysis",
          "RSI",
          "MACD",
          "Candlestick",
          "Risk Management",
          "TradingView",
          "MetaTrader",
          "Stockbit",
        ],
        icon: Layers,
      },
      {
        name: "AI & Blockchain",
        items: ["AI/ML (basic)", "Blockchain (basic)"],
        icon: Cpu,
      },
      {
        name: "Tools",
        items: ["Git (basic)", "Kaggle"],
        icon: Database,
      },
      {
        name: "Komunikasi",
        items: ["Writing", "Editing", "Critical Thinking", "Teamwork", "Communication"],
        icon: PenTool,
      },
      {
        name: "Security",
        items: ["Cybersecurity (fundamental)", "Threat Modeling (basic)", "HTTPS/TLS (basic)"],
        icon: ShieldHalf,
      },
    ],
    radar: [
      { area: "Pemrograman", A: 70 },
      { area: "Analisis Pasar", A: 80 },
      { area: "Security", A: 60 },
      { area: "AI/Blockchain", A: 60 },
      { area: "Komunikasi", A: 85 },
    ],
  },
  experience: [
    {
      org: "Independen",
      role: "Market Analyst",
      period: "2023 — Sekarang",
      bullets: [
        "Analisis teknikal saham & kripto: support/resistance, trendline, RSI, MACD, pola candlestick.",
        "Rencana transaksi & manajemen risiko (risk–reward, position sizing) dengan TradingView, MetaTrader, Stockbit; dokumentasi hipotesis & evaluasi.",
      ],
    },
    {
      org: "Freelance",
      role: "Penulis Lepas",
      period: "2020 — Sekarang",
      bullets: [
        "Menulis cerpen, novel, dan nonfiksi; fokus kejelasan narasi, logika alur, dan penyuntingan.",
        "Riset topik, susun outline, revisi berbasis umpan balik; kolaborasi pada tenggat ketat.",
      ],
    },
    {
      org: "Telkom University",
      role: "Mahasiswa TI (S1)",
      period: "2024 — 2028 (ongoing)",
      bullets: [
        "Fokus: Artificial Intelligence, Blockchain, Cybersecurity.",
        "Coursework: Algorithm & Programming (C/C++), Data Structures.",
      ],
    },
  ],
  projects: [
    {
      name: "Aplikasi Toko (CLI)",
      tagline: "Manajemen stok/sales sederhana berbasis Go.",
      description:
        "Aplikasi CLI untuk alur transaksi/daftar barang; praktik I/O, perhitungan total, modularisasi fungsi; struktur data & kontrol alur (array/slice, loop, kondisi) dan penanganan error.",
      stack: ["Go"],
      links: [
        { label: "GitHub", href: "https://github.com/LutfiZg/AlproProject/blob/main/aplikasiToko.go" },
      ],
    },
  ],
  writing: [
    // Tambahkan tautan tulisan bila ada
  ],
  education: [
    {
      school: "Telkom University",
      degree: "S1 Teknologi Informasi",
      period: "2024 — 2028 (ongoing)",
      highlights: [
        "Fokus: AI, Blockchain, Cybersecurity",
        "Coursework: C/C++, Data Structures",
      ],
    },
    {
      school: "SMA Negeri 1 Rengasdengklok",
      degree: "MIPA (Lulus 2024)",
      period: "2019 — 2024",
      highlights: ["Juara Umum 1 MIPA"],
    },
    {
      school: "SMP Negeri 1 Rengasdengklok",
      degree: "Lulus 2021",
      period: "2018 — 2021",
      highlights: ["Pramuka, klub literasi"],
    },
  ],
  achievements: [
    { name: "Juara 2 OSN Astronomi (Kabupaten)", note: "SMA" },
    { name: "Peserta OSN (Provinsi)", note: "SMA" },
    { name: "Juara 1 Menulis Cerpen (tingkat sekolah)", note: "SMA" },
    { name: "Pramuka — Wakil Pratama", note: "Koordinasi kegiatan & kepemimpinan" },
  ],
  certifications: [],
};

// ----------------------- Utility Hooks & Components ------------------------

function useTheme() {
  const [theme, setTheme] = useState("system");
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "system";
    setTheme(saved);
  }, []);
  useEffect(() => {
    const root = window.document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (theme === "system" && prefersDark);
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, setTheme };
}

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function Section({ id, title, icon: Icon, children, eyebrow }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className="mb-10 flex items-center gap-3">
          {Icon && (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700">
              <Icon className="h-5 w-5" />
            </span>
          )}
          <div>
            {eyebrow && (
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              {title}
            </h2>
          </div>
        </div>
        {children}
      </Container>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
      {children}
    </span>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 ${className}`}>
      {children}
    </div>
  );
}

function LinkOut({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center gap-1 underline-offset-2 hover:underline ${className}`}
    >
      {children}
      <ExternalLink className="h-4 w-4" />
    </a>
  );
}

// ----------------------------- Navbar -------------------------------------

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#writing", label: "Writing" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/80">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
            LG
          </span>
          <span className="text-zinc-900 dark:text-zinc-100">{DATA.person.name}</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={DATA.person.resumeUrl}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
          <button
            aria-label="Toggle theme"
            className="rounded-xl border border-zinc-300 p-2 dark:border-zinc-700"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : theme === "light" ? "system" : "dark")
            }
            title={`Theme: ${theme}`}
          >
            {theme === "dark" ? (
              <Moon className="h-4 w-4" />
            ) : theme === "light" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
        </nav>
        <button
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 p-2 md:hidden dark:border-zinc-700"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="text-sm">Menu</span>
          <ChevronRight className={`h-4 w-4 transition ${open ? "rotate-90" : ""}`} />
        </button>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden"
          >
            <div className="space-y-2 border-t border-zinc-200 p-4 dark:border-zinc-800">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#writing", label: "Writing" },
                { href: "#education", label: "Education" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={DATA.person.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-900 dark:border-zinc-700 dark:text-zinc-100"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

// ------------------------------ HERO --------------------------------------

function Hero() {
  const p = DATA.person;
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-zinc-900">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl"
            >
              {p.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 text-lg text-zinc-700 dark:text-zinc-300"
            >
              {p.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400"
            >
              {p.summary}
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-zinc-900"
              >
                <Mail className="h-4 w-4" /> Hubungi Saya
              </a>
              <a
                href={p.socials.github}
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={p.resumeUrl}
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
              >
                <Download className="h-4 w-4" /> Unduh CV
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {p.location}</span>
              <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> Tersedia untuk kolaborasi</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.keywords.map((k) => (
                <Badge key={k}>{k}</Badge>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <Card className="relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-100 blur-3xl dark:from-zinc-800 dark:to-zinc-900" />
              <div className="relative">
                <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-50 p-1 dark:from-zinc-900 dark:to-zinc-800">
                  <div className="flex h-full items-center justify-center rounded-lg bg-white dark:bg-zinc-950">
                    {/* Placeholder avatar monogram */}
                    <span className="text-6xl font-black tracking-tight text-zinc-200 dark:text-zinc-800">
                      LG
                    </span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {p.email}</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {p.phone}</li>
                  <li className="flex items-center gap-2"><Github className="h-4 w-4" /> <LinkOut href={p.socials.github}>GitHub</LinkOut></li>
                  <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> <LinkOut href={p.socials.linkedin}>LinkedIn</LinkOut></li>
                  <li className="flex items-center gap-2"><Twitter className="h-4 w-4" /> <LinkOut href={p.socials.twitter}>X/Twitter</LinkOut></li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ------------------------------ ABOUT -------------------------------------

function About() {
  return (
    <Section id="about" title="About" icon={BookOpen} eyebrow="Profil singkat">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-zinc-700 dark:text-zinc-300">
            Halo! Saya {DATA.person.alias}. Saat ini kuliah di <strong>Telkom University</strong>,
            jurusan Teknologi Informasi. Saya senang menggabungkan <em>pemikiran sistem</em> dengan
            <em> sensitivitas produk</em>—membuat hal yang rapi di dalam, dan nyaman dipakai di luar.
            Minat utama saya: <strong>AI</strong>, <strong>cybersecurity</strong>, <strong>web3</strong>, dan menulis.
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Saya percaya portofolio terbaik adalah <em>produk yang benar‑benar dipakai</em>. Saat ini saya tertarik pada
            arsitektur kepercayaan: bagaimana AI, keamanan siber, dan blockchain dapat bekerja bersama untuk menjaga
            integritas informasi dan mencegah disinformasi. Karena itu, proyek saya cenderung kecil namun end‑to‑end,
            dapat diuji, dan terdokumentasi. Menulis membantu saya memetakan ide teknis menjadi keputusan produk.
          </p>
        </div>
        <Card>
          <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-center gap-2"><Anchor className="h-4 w-4" /> Prinsip: sederhana, aman, dapat diandalkan.</li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4" /> Bahasa: Indonesia (utama), Inggris.</li>
            <li className="flex items-center gap-2"><PenTool className="h-4 w-4" /> Hobi: menulis novel & esai.</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

// ------------------------------ SKILLS ------------------------------------

function Skills() {
  const { categories, radar } = DATA.skills;
  return (
    <Section id="skills" title="Skills" icon={Rocket} eyebrow="Teknologi & alat">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="mb-2 flex items-center gap-2">
                  <cat.icon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {cat.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((it) => (
                    <Badge key={it}>{it}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="area" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Level" dataKey="A" strokeWidth={2} fillOpacity={0.2} />
                <RechartsTooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </Section>
  );
}

// ---------------------------- EXPERIENCE ----------------------------------

function Experience() {
  return (
    <Section id="experience" title="Experience" icon={Layers} eyebrow="Pekerjaan & aktivitas">
      <div className="space-y-4">
        {DATA.experience.map((xp, i) => (
          <Card key={i}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {xp.role}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{xp.org}</p>
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">{xp.period}</div>
            </div>
            <ul className="mt-4 list-outside list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              {xp.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ----------------------------- PROJECTS -----------------------------------

function Projects() {
  return (
    <Section id="projects" title="Projects" icon={Code2} eyebrow="Pilihan karya">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DATA.projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800" />
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.tagline}</p>
              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <LinkOut key={l.href} href={l.href}>
                    {l.label}
                  </LinkOut>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ------------------------------ WRITING -----------------------------------

function Writing() {
  return (
    <Section id="writing" title="Writing" icon={PenTool} eyebrow="Esai & catatan">
      <div className="grid gap-6 md:grid-cols-2">
        {DATA.writing.map((w, i) => (
          <Card key={i}>
            <div className="flex items-start justify-between">
              <div>
                <a href={w.url} className="text-lg font-semibold hover:underline">
                  {w.title}
                </a>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {new Date(w.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-zinc-400" />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ------------------------------ EDUCATION ---------------------------------

function Education() {
  return (
    <Section id="education" title="Education" icon={GraduationCap} eyebrow="Pendidikan">
      <div className="grid gap-6 md:grid-cols-2">
        {DATA.education.map((ed, i) => (
          <Card key={i}>
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="text-lg font-semibold">{ed.school}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{ed.degree}</p>
              </div>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">{ed.period}</span>
            </div>
            {ed.highlights?.length ? (
              <ul className="mt-3 list-outside list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {ed.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  if (!DATA.certifications?.length) return null;
  return (
    <Section id="certs" title="Certifications" icon={ShieldHalf} eyebrow="Sertifikasi">
      <div className="grid gap-6 md:grid-cols-2">
        {DATA.certifications.map((c, i) => (
          <Card key={i}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold">{c.name}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{c.issuer}</p>
              </div>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">{c.year}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ------------------------------ ACHIEVEMENTS -----------------------------------

function Achievements() {
  if (!DATA.achievements?.length) return null;
  return (
    <Section id="achievements" title="Achievements & Activities" icon={Award} eyebrow="Penghargaan & kegiatan">
      <div className="grid gap-6 md:grid-cols-2">
        {DATA.achievements.map((a, i) => (
          <Card key={i}>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">{a.name}</h3>
              {a.note ? (
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{a.note}</span>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ------------------------------ CONTACT -----------------------------------

function Contact() {
  const p = DATA.person;
  const subject = encodeURIComponent("[Portofolio] Hai, saya ingin berkolaborasi!");
  const body = encodeURIComponent(
    "Halo Lutfi,\\n\\nSaya melihat portofolio Anda dan tertarik untuk ...\\n\\nTerima kasih."
  );
  const mailto = `mailto:${p.email}?subject=${subject}&body=${body}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(p.email);
      alert("Email disalin ke clipboard");
    } catch (e) {
      window.location.href = mailto;
    }
  };

  return (
    <Section id="contact" title="Contact" icon={Mail} eyebrow="Mari terhubung">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <h3 className="text-base font-semibold">Kontak Langsung</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {p.email}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {p.phone}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {p.location}</li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a href={mailto} className="rounded-xl bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-white dark:text-zinc-900">
              Kirim Email
            </a>
            <button onClick={copyEmail} className="rounded-xl border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-700">
              Salin Email
            </button>
          </div>
        </Card>
        <Card className="md:col-span-2">
          <h3 className="text-base font-semibold">Kenapa harus bekerja sama?</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Saya merespons cepat, mengutamakan kejelasan, dan terbuka untuk tantangan
            yang <em>realistis</em>. Proyek kecil dengan tujuan jelas adalah favorit saya.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>Kolaborasi riset kecil</Badge>
            <Badge>Audit keamanan dasar</Badge>
            <Badge>Prototipe produk</Badge>
            <Badge>Penulisan teknis</Badge>
          </div>
        </Card>
      </div>
    </Section>
  );
}

// ------------------------------- FOOTER -----------------------------------

function Footer() {
  const p = DATA.person;
  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} {p.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={p.socials.github} aria-label="GitHub" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href={p.socials.linkedin} aria-label="LinkedIn" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={p.socials.twitter} aria-label="Twitter" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// ----------------------------- JSON-LD SEO --------------------------------

function JsonLd() {
  const p = DATA.person;
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    url: p.website,
    jobTitle: p.title,
    email: p.email,
    telephone: p.phone,
    sameAs: [p.socials.github, p.socials.linkedin, p.socials.twitter].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: p.location,
      addressCountry: "ID",
    },
    knowsAbout: DATA.person.keywords,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

// ---------------------------- Scroll To Top -------------------------------

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 rounded-full border border-zinc-300 bg-white p-3 shadow-lg transition hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

// --------------------------- DEV SELF-TESTS -------------------------------

const isBrowser = typeof window !== "undefined";

function collectStrings(obj, path = "DATA") {
  const entries = [];
  const helper = (val, p) => {
    if (typeof val === "string") entries.push({ path: p, value: val });
    else if (Array.isArray(val)) val.forEach((v, i) => helper(v, `${p}[${i}]`));
    else if (val && typeof val === "object")
      Object.entries(val).forEach(([k, v]) => helper(v, `${p}.${k}`));
  };
  helper(obj, path);
  return entries;
}

function runSelfTests() {
  const results = [];
  const failures = [];
  const assert = (cond, msg) => {
    const r = { ok: !!cond, msg };
    results.push(r);
    if (!cond) failures.push(msg);
  };

  // 1) Basic person fields
  assert(!!DATA.person.name, "Person name exists");
  assert(/.+@.+\..+/.test(DATA.person.email), "Email format looks valid");
  // 2) Social links (allow '#')
  [DATA.person.socials.github, DATA.person.socials.linkedin, DATA.person.socials.twitter]
    .filter(Boolean)
    .forEach((u, i) => {
      if (u === "#") results.push({ ok: true, msg: `Social[${i}] is placeholder` });
      else assert(/^https?:\/\//.test(u), `Social[${i}] has http/https`);
    });
  // 3) Skills not empty
  assert(Array.isArray(DATA.skills.categories) && DATA.skills.categories.length > 0, "Skills categories present");
  // 4) Radar values in [0,100]
  DATA.skills.radar.forEach((r, i) => assert(r.A >= 0 && r.A <= 100, `Radar[${i}] within 0..100`));
  // 5) Projects have valid links
  DATA.projects.forEach((p, i) => {
    (p.links || []).forEach((l, j) => assert(/^https?:\/\//.test(l.href), `Project[${i}].link[${j}] valid URL`));
  });
  // 6) Education periods present
  DATA.education.forEach((e, i) => assert(!!e.period, `Education[${i}] has period`));
  // 7) Ensure no raw backslashes in data strings (to avoid escape issues)
  collectStrings(DATA).forEach(({ path, value }) => {
    assert(!/\\/.test(value), `No backslash in ${path}`);
  });

  return { results, failures };
}

function DevTests() {
  const [outcome, setOutcome] = useState(null);
  useEffect(() => {
    if (!isBrowser) return;
    const r = runSelfTests();
    // always log to console for developers
    // eslint-disable-next-line no-console
    console.table(r.results);
    setOutcome(r);
  }, []);

  if (!isBrowser || !window.location.hash.includes("test") || !outcome) return null;
  const total = outcome.results.length;
  const failed = outcome.failures.length;
  return (
    <div className="fixed bottom-6 left-6 max-w-xs rounded-2xl border border-zinc-300 bg-white/90 p-3 text-xs shadow-lg backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/90">
      <div className="font-semibold">Self‑Tests</div>
      <div className="mt-1">Total: {total} • Failed: {failed}</div>
      {failed > 0 ? (
        <ul className="mt-2 list-inside list-disc">
          {outcome.failures.slice(0, 5).map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      ) : (
        <div className="mt-2">All checks passed ✅</div>
      )}
      <div className="mt-2 text-[10px] text-zinc-500">(Add #test to URL to see this panel)</div>
    </div>
  );
}

// --------------------------- Document Meta --------------------------------

function Meta() {
  useEffect(() => {
    document.title = `${DATA.person.name} — Portfolio`;
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = `${DATA.person.title}. ${DATA.person.summary}`;
    if (metaDesc) metaDesc.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);
  return null;
}

// ------------------------------ APP ---------------------------------------

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <Meta />
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Writing />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <DevTests />
    </div>
  );
}
