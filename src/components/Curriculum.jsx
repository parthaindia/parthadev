import { useState } from "react";
import { MODULES, whatsappLink } from "../config";

export default function Curriculum() {
  const [openSet, setOpenSet] = useState(new Set(["sql"])); // first module open

  const toggle = (id) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="section sec-alt" id="modules">
      <div className="container container-narrow">
        <h2 className="section-title">
          What you'll learn — <span className="grad-text">module by module</span> 📚
        </h2>
        <p className="section-sub">
          Click each module to open it. Full 3-month program, live + recordings.
        </p>

        <div className="modules-list">
          {MODULES.map((m) => {
            const open = openSet.has(m.id);
            return (
              <div className={`module ${open ? "is-open" : ""}`} key={m.id}>
                <button
                  className="module-head"
                  aria-expanded={open}
                  onClick={() => toggle(m.id)}
                >
                  <span className="module-icon">{m.icon}</span>
                  <span className="module-title-group">
                    <span className="module-title">{m.title}</span>
                    <span className="module-blurb">{m.blurb}</span>
                  </span>
                  <span className="module-tag">{m.tag}</span>
                  <span className="module-arrow">{open ? "−" : "+"}</span>
                </button>
                <div className="module-body">
                  <ul className="check-list">
                    {m.items.map((it) => (
                      <li key={it}>✅ {it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="center-cta">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
            📩 Get the full syllabus PDF on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
