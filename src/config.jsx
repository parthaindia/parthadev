// ============================================================
// ParthaDev Community — Site Config
// EDIT EVERYTHING HERE. No need to touch components.
// ============================================================

export const SITE = {
  name: "ParthaDev Community",
  shortName: "ParthaDev",
  tagline: "Data Engineering + Cloud, made simple",
  description:
    "Learn Data Engineering & Cloud from scratch — SQL, Python, Spark, Kafka, AWS & Azure. Beginner friendly, project first, made for Indian students.",
};

// Update these before launch
export const CONTACT = {
  whatsappNumber: "918095360531", // digits only, with country code. WhatsApp link auto built below
  whatsappMessage:
    "Hi Partha! I saw your parthadev website. I want to learn Data Engineering.",
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
  { value: "3", label: "months, live classes + recordings" },
  { value: "100+", label: "SQL problems solved together" },
  { value: "2+2", label: "mock interviews & resume reviews" },
  { value: "1", label: "real end-to-end Azure pipeline" },
];

export const WHY = [
  { icon: "Target", title: "Zero theory, all practice", desc: "Every concept taught with a real example. No boring PPTs, pure value." },
  { icon: "Layers", title: "Project-first learning", desc: "You build a real end-to-end Azure pipeline — bronze, silver, gold — then defend it in interviews." },
  { icon: "IndianRupee", title: "Student-friendly fees", desc: "Affordable pricing with EMI on request. No hidden fees game." },
  { icon: "UserCheck", title: "Direct mentor access", desc: "Doubts on WhatsApp, not in a comments section. Real answers, fast." },
  { icon: "MapPin", title: "Made for India", desc: "Simple-English explanations, IST-friendly schedule, Naukri/LinkedIn job-hunt prep included." },
  { icon: "InfinityIcon", title: "Lifetime access", desc: "Recordings, notes & interview QA — yours forever, no expiry." },
];

// Accordion modules — click to open/close (from the official program PDF)
export const MODULES = [
  {
    id: "de-program",
    icon: "Rocket",
    title: "Data Engineering Program (3 Months)",
    tag: "End to End",
    blurb: "The full journey — SQL → PySpark → Azure → Databricks → Interview",
    items: [
      "Month 1 · Foundation: SQL (joins → window functions, CTEs, 100+ problems) + Spark/PySpark core with optimization",
      "Month 2 · Cloud: Azure fundamentals (ADLS Gen2, Blob, security) + Data Factory pipelines + Azure Databricks & Delta Lake",
      "Month 3 · Mastery: advanced DE concepts (data modelling, CDC, streaming, Kafka) + AWS foundation + interview mastery",
      "1 real end-to-end Azure pipeline: ADLS Gen2 + ADF + Databricks — Bronze → Silver → Gold",
      "Interview prep runs the whole way: 2 mock interviews + 2 resume reviews + weekly practice",
    ],
  },
  {
    id: "sql",
    icon: "Database",
    title: "SQL Training",
    tag: "Month 1",
    blurb: "Think and code like a data engineer",
    items: [
      "SQL from beginner to advanced — Joins",
      "Window functions, CTEs, Ranking",
      "Deduplication techniques",
      "100+ SQL problems: joins, CTEs, windows",
    ],
  },
  {
    id: "spark",
    icon: "Zap",
    title: "Spark Training (PySpark)",
    tag: "Month 1",
    blurb: "From big data foundations to serious optimization",
    items: [
      "Big data architecture & Hadoop fundamentals, HDFS, distributed processing",
      "Apache Spark, PySpark, Spark SQL — transformations & actions",
      "Joins & window functions in Spark",
      "Optimization: partitioning, shuffle, caching, broadcast joins",
      "AQE, data skew, memory management & performance tuning",
      "Hands-on: large-scale PySpark ETL pipeline",
    ],
  },
  {
    id: "azure-adf",
    icon: "Factory",
    title: "Azure + Data Factory (ADF)",
    tag: "Month 2",
    blurb: "Build pipelines on a real cloud stack",
    items: [
      "Azure architecture, resource groups, storage accounts",
      "ADLS Gen2, Blob Storage, networking & security basics",
      "ADF: linked services, datasets, pipelines, copy activity",
      "Parameters, variables, expressions, ForEach, Lookup",
      "Triggers, incremental loading & metadata-driven pipelines",
      "Error handling & pipeline monitoring",
    ],
  },
  {
    id: "databricks",
    icon: "Boxes",
    title: "Azure Databricks",
    tag: "Month 2",
    blurb: "The lakehouse, hands-on",
    items: [
      "Databricks architecture, workspace, compute & cluster types",
      "Cluster configuration, jobs, notebooks, DBUtils",
      "Delta Lake — managed vs external tables, Auto Loader, COPY INTO",
      "Medallion architecture & Unity Catalog",
      "Workflows, optimization & CI/CD basics",
    ],
  },
  {
    id: "advanced",
    icon: "BrainCircuit",
    title: "Advanced Data Engineering Concepts",
    tag: "Month 3",
    blurb: "The senior-engineer skill set",
    items: [
      "Data modelling: OLTP vs OLAP, star & snowflake schemas",
      "Fact & dimension tables, SCD Type 1 & 2, warehouse concepts",
      "Incremental processing & CDC concepts, batch vs streaming",
      "Data quality: validation, null & duplicate handling, schema evolution",
      "Logging, error handling & performance optimization",
      "Streaming: Structured Streaming + Kafka (topics, partitions, offsets)",
      "AWS foundation: S3, IAM, Glue, EMR, Redshift, Lambda overview",
    ],
  },
  {
    id: "interview",
    icon: "Handshake",
    title: "Interview Support",
    tag: "All 3 months",
    blurb: "Build the pipeline. Then defend it.",
    items: [
      "100+ SQL problems: second-highest salary, query optimization",
      "PySpark scenarios: OOM, data skew, nested JSON parsing",
      "ADF scenarios: failures, incremental loads & Databricks scenarios",
      "Production architecture, security & monitoring questions",
      "2 mock interviews + 2 resume reviews",
      "Resume, LinkedIn & Naukri optimization",
      "Project explanation prep — defend your end-to-end project",
      "Weekly practice sessions + interview question bank + HR prep",
    ],
  },
];

export const PROJECTS = [
  { icon: "BarChart3", name: "SQL Analytics Project", stack: "SQL · Queries · Analytics" },
  { icon: "Zap", name: "Large-Scale PySpark ETL Pipeline", stack: "PySpark · Spark SQL · Optimization" },
  { icon: "Cloud", name: "End-to-End Azure Pipeline", stack: "ADLS Gen2 · ADF · Databricks" },
  { icon: "Medal", name: "Bronze → Silver → Gold", stack: "Medallion · Delta Lake · Unity Catalog" },
];

export const ROADMAP = [
  "SQL", "PySpark", "Azure", "ADF", "Databricks", "Delta Lake", "Kafka", "Data Modelling", "Capstone", "Resume", "Mock Interview", "Placed",
];

// Replace with your real students' words ASAP
export const TESTIMONIALS = [
  { quote: "Explored everything ( not just basics ) around latest and greatest in data engineering realm under the guidance of industry experts", name: "Sk. Sameer", role: "Data Engineer, Infosys" },
  { quote: "Truly a great learning experience! Got the deep clarity of each and every topic involved in data engineering journey", name: "Bhargav Pim",  role: "Data Engineer, Accenture" },
  { quote: "The program outweighs our several years of industry experience.", name: "Vinay Kumar", role: "Senior DE, Amazon" },
];

export const FAQS = [
  { q: "I'm from a non-coding background. Can I still learn Data Engineering?", a: "100% yes. We start from absolute zero — SQL, Python and Linux taught from scratch in simple English. Many students came from civil, mechanical & commerce backgrounds and got placed." },
  { q: "How much does the course cost?", a: "We keep it student-friendly and transparent — ping us on WhatsApp for current batch pricing and easy EMI options. No hidden fees, no upsell trap." },
  { q: "Are classes live or recorded?", a: "Both. It's a 3-month live program with every session recorded, plus weekly practice sessions — so college students & working folks never miss out." },
  { q: "What tools will I learn?", a: "SQL, PySpark & Spark SQL, Azure (ADLS Gen2, Data Factory), Databricks (Delta Lake, Medallion architecture, Unity Catalog), Kafka and an AWS overview (S3, Glue, EMR, Redshift, Lambda) — the exact stack companies hire for." },
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
