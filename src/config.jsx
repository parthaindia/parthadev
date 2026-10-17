// ============================================================
// ParthaDev Community — Site Config
// EDIT EVERYTHING HERE. No need to touch components.
// ============================================================

export const SITE = {
  name: "ParthaDev Community",
  shortName: "ParthaDev",
  tagline: "Data Engineering + Cloud, samajh mein aayega",
  description:
    "Learn Data Engineering & Cloud from scratch — SQL, Python, Spark, Kafka, AWS & Azure. Beginner friendly, project first, made for Indian students.",
};

// ⚠️ Update these before launch
export const CONTACT = {
  whatsappNumber: "918095360531", // digits only, with country code. WhatsApp link auto built below
  whatsappMessage:
    "Hi Partha! I saw your parthadev website. I want to learn Data Engineering 🚀",
  email: "buzzpartha@gmail.com",
  github: "https://github.com/parthaindia",
  linkedin: "https://www.linkedin.com/in/parthaindia", // TODO: replace with real profile
  youtube: "https://www.youtube.com/@parthaindia", // TODO: replace with real channel
};

export const whatsappLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  CONTACT.whatsappMessage
)}`;

export const BATCH = {
  label: "New Batch",
  date: "1 Nov 2026", // TODO: update per batch
  time: "Sat–Sun, 7–9 PM IST",
  seats: "Only 20 seats per batch",
};

export const STATS = [
  { value: "12+", label: "weeks of live classes" },
  { value: "10+", label: "industry projects" },
  { value: "0", label: "prior coding needed" },
  { value: "100%", label: "placement support" },
];

export const WHY = [
  { emoji: "🎯", title: "Zero theory ratta", desc: "Every concept taught with a real example. No boring PPTs, pure vibes & value." },
  { emoji: "🗂️", title: "Project-first learning", desc: "You build a real data pipeline in week 1 itself — resume-ready by the end." },
  { emoji: "💸", title: "Talk fees in DM", desc: "Student-friendly pricing, EMI on request. No hidden fees game." },
  { emoji: "🧑‍🏫", title: "Direct mentor access", desc: "Doubts on WhatsApp, not in a comments section. Real answers, fast." },
  { emoji: "🇮🇳", title: "Made for India", desc: "Hinglish explanations, IST schedule, Naukri/LinkedIn job-hunt prep included." },
  { emoji: "♻️", title: "Lifetime access", desc: "Recordings, notes & interview QA — yours forever, batch se bhi aage." },
];

// Two tracks shown as tabs
export const TRACKS = [
  {
    id: "de",
    name: "Data Engineering Track",
    icon: "⚙️",
    blurb: "From zero → building real pipelines",
    phases: [
      {
        phase: "Phase 1",
        title: "Foundations (Weeks 1–3)",
        items: ["SQL — basics → window functions & CTEs", "Python — core, OOP, Pandas, NumPy", "Linux + Shell for data folks", "Git & GitHub like a pro"],
      },
      {
        phase: "Phase 2",
        title: "Big Data & Pipelines (Weeks 4–8)",
        items: ["Apache Spark in-depth + optimization", "Kafka for real-time streaming", "Airflow — orchestration", "Docker basics + lakehouse concepts (Delta/Iceberg)"],
      },
      {
        phase: "Phase 3",
        title: "Portfolio Sprint (Weeks 9–10)",
        items: ["End-to-end capstone pipeline", "Data modelling & warehouse design", "ETL vs ELT — when to use what", "GitHub portfolio polish"],
      },
      {
        phase: "Phase 4",
        title: "Placement Mode (Weeks 11–12)",
        items: ["Top DE interview questions solved", "Resume + Naukri + LinkedIn glow-up", "Mock interviews with feedback", "Referral strategy that works"],
      },
    ],
  },
  {
    id: "cloud",
    name: "Cloud Stack Track",
    icon: "☁️",
    blurb: "AWS + Azure, the way companies actually use them",
    phases: [
      {
        phase: "Phase 1",
        title: "Cloud ABC (Weeks 1–3)",
        items: ["Cloud fundamentals — what & why", "Compute, storage, networking without the jargon", "Free-tier account setup + first deploy", "IAM, billing & security basics"],
      },
      {
        phase: "Phase 2",
        title: "AWS Data Stack (Weeks 4–8)",
        items: ["S3 data lake architecture", "Glue ETL + Athena SQL at scale", "Redshift warehouse basics", "Lambda & event-driven pipelines"],
      },
      {
        phase: "Phase 3",
        title: "Azure Data Stack (Weeks 9–11)",
        items: ["Azure Data Factory pipelines", "Databricks + Delta Lake intro", "Synapse fundamentals", "Medallion architecture hands-on"],
      },
      {
        phase: "Phase 4",
        title: "Certify & Ship (Week 12)",
        items: ["AWS Data / Azure DP-203 prep path", "Cloud capstone project end-to-end", "Architecture diagrams for interviews", "Cost-optimization checklist"],
      },
    ],
  },
];

export const PROJECTS = [
  { emoji: "🛒", name: "E-Commerce ETL Pipeline", stack: "SQL · Python · Airflow" },
  { emoji: "🚕", name: "Uber Rides Analytics", stack: "Spark · Pandas · Dashboards" },
  { emoji: "📡", name: "Real-Time Streaming App", stack: "Kafka · Spark Streaming" },
  { emoji: "☁️", name: "Cloud Data Lakehouse", stack: "AWS S3/Glue · Azure ADF" },
  { emoji: "🧾", name: "EDI + Weather Warehouse", stack: "Redshift · DB modelling" },
  { emoji: "🪪", name: "Resume-Worthy Capstone", stack: "Full stack · Your choice" },
];

export const ROADMAP = [
  "SQL", "Python", "Linux", "Git", "Spark", "Kafka", "Airflow", "AWS", "Azure", "Projects", "Resume", "Interview", "Placed 🎉",
];

// ⚠️ Replace with your real students' words ASAP
export const TESTIMONIALS = [
  { quote: "Explored everything ( not just basics ) around latest and greatest in data engineering realm under the guidance of industry experts", name: "Sk. Sameer", role: "Data Engineer, Infosys" },
  { quote: "Truly a great learning experience! Got the deep clarity of each and every topic involved in data engineering journey", name: "Bhargav Pim",  role: "Data Engineer, Accenture" },
  { quote: "The program outweighs our several years of industry experience.", name: "Vinay Kumar", role: "Senior DE, Amazon" },
];

export const FAQS = [
  { q: "I'm from a non-coding background. Can I still learn Data Engineering?", a: "100% yes. We start from absolute zero — SQL, Python and Linux taught from scratch with Hinglish explanations. Many students came from civil, mechanical & commerce backgrounds and got placed 🎯" },
  { q: "How much does the course cost?", a: "We keep it student-friendly and transparent — ping us on WhatsApp for current batch pricing and easy EMI options. No hidden fees, no upsell trap." },
  { q: "Are classes live or recorded?", a: "Both. Live sessions every Sat–Sun evening (IST) for the main batch, and every session is recorded so college students & working folks never miss out." },
  { q: "What tools will I learn?", a: "SQL, Python, Linux, Git, Spark, Kafka, Airflow, Docker, AWS (S3, Glue, Athena, Redshift, Lambda) and Azure (ADF, Databricks, Synapse) — the exact stack companies hire for." },
  { q: "Will I get job/referral support?", a: "Yes — resume building, ATS optimization, Naukri/LinkedIn profile polishing, mock interviews and referral guidance are part of Phase 4. We're with you till you're placed." },
  { q: "How many students per batch?", a: "Maximum 20. Small batch = your doubts actually get answered. No 500-student YouTube 'batch' games." },
];

export const NAV_LINKS = [
  { label: "Modules", href: "#modules" },
  { label: "Projects", href: "#projects" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];
