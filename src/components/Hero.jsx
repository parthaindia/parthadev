import { BATCH, whatsappLink } from "../config";
import { Rocket, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow g1" />
      <div className="hero-glow g2" />
      <div className="container hero-inner">
        <span className="wave">ParthaDev Community presents</span>

        <div className="hero-batch">
          <span className="dot" />
          {BATCH.label}: {BATCH.date} · {BATCH.time}
        </div>

        <h1>
          Data Engineering + Cloud,
          <br />
          <span className="grad-text">made simple</span>
        </h1>

        <p className="hero-sub">
          Go from <b>zero coding</b> to <b>job-ready data engineer</b> in{" "}
          <b>3 months</b> — SQL, PySpark, Azure, ADF &amp; Databricks, with a
          real end-to-end project and interview prep all the way. No boring
          theory. Full hands-on.
        </p>

        <div className="hero-cta">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
            <Rocket /> Enroll Now — DM on WhatsApp
          </a>
          <a href="#modules" className="btn btn-ghost">
            <BookOpen /> See What You'll Learn
          </a>
        </div>

        <div className="hero-meta">
          {BATCH.seats} · Fees discussed on DM (student-friendly, we promise)
        </div>
      </div>
    </section>
  );
}
