import { SITE, CONTACT } from "../config";

export default function Instructor() {
  return (
    <section className="section" id="instructor">
      <div className="container">
        <h2 className="section-title">
          Meet your <span className="grad-text">mentor</span> 👋
        </h2>

        <div className="instructor-card card">
          <div className="instructor-avatar" aria-hidden="true">
            <span>PD</span>
          </div>

          <div>
            <h3>Partha Gundarpi</h3>
            <p className="instructor-role">Data &amp; Cloud Engineer · Founder, {SITE.name}</p>

            <div className="chip-row">
              {["SQL", "Python", "Spark", "Kafka", "Airflow", "AWS", "Azure", "Docker"].map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>

            <blockquote>
              "Maine yeh program banaya hai for students who want{" "}
              <b>practical skills, not certificates.</b> Har topic aise samjhaunga
              jaise dost se baat kar rahe hain — simple, Indian, and straight
              useful for jobs."
            </blockquote>

            <div className="instructor-links">
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={CONTACT.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={CONTACT.youtube} target="_blank" rel="noreferrer">YouTube ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
