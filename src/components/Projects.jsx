import { PROJECTS, whatsappLink } from "../config";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">
          Projects you'll <span className="grad-text">actually build</span> 🛠️
        </h2>
        <p className="section-sub">Portfolio so strong, recruiters stop scrolling.</p>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card card" key={p.name}>
              <div className="project-emoji">{p.emoji}</div>
              <h3>{p.name}</h3>
              <span className="chip">{p.stack}</span>
            </div>
          ))}
        </div>

        <div className="center-cta">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-ghost">
            📂 Ask for full project list on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
