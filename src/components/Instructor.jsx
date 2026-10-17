import { SITE, CONTACT } from "../config";
import { LinkedinIcon, YoutubeIcon, GithubIcon } from "./BrandIcons";

export default function Instructor() {
  return (
    <section className="section" id="instructor">
      <div className="container">
        <h2 className="section-title">
          Meet your <span className="grad-text">mentor</span>
        </h2>

        <div className="instructor-card card">
          <div className="instructor-avatar" aria-hidden="true">
            <span>PD</span>
          </div>

          <div>
            <h3>Partha Gundarpi</h3>
            <p className="instructor-role">Data &amp; Cloud Engineer · Founder, {SITE.name}</p>

            <div className="chip-row">
              {["SQL", "PySpark", "Azure ADF", "Databricks", "Delta Lake", "Kafka", "Streaming", "GIT"].map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>

            <blockquote>
              "I built this program for students who want{" "}
              <b>practical skills, not certificates.</b> Every topic is explained
              simply and directly — exactly the way it's used in real jobs."
            </blockquote>

            <div className="instructor-links">
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
              <a href={CONTACT.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
              <a href={CONTACT.youtube} target="_blank" rel="noreferrer"><YoutubeIcon /> YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
