import { PROJECTS, whatsappLink } from "../config";
import { BarChart3, Zap, Cloud, Medal, FolderOpen } from "lucide-react";

const ICONS = { BarChart3, Zap, Cloud, Medal };

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">
          Projects you'll <span className="grad-text">actually build</span>
        </h2>
        <p className="section-sub">A portfolio strong enough to stop recruiters scrolling.</p>

        <div className="projects-grid">
          {PROJECTS.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <div className="project-card card" key={p.name}>
                <div className="project-icon"><Icon /></div>
                <h3>{p.name}</h3>
                <span className="chip">{p.stack}</span>
              </div>
            );
          })}
        </div>

        <div className="center-cta">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <FolderOpen /> Ask for the full project list on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
