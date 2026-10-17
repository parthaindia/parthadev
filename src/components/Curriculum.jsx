import { useState } from "react";
import { TRACKS } from "../config";

export default function Curriculum() {
  const [active, setActive] = useState(0);
  const track = TRACKS[active];

  return (
    <section className="section sec-alt" id="modules">
      <div className="container">
        <h2 className="section-title">
          What you'll learn — <span className="grad-text">module by module</span> 📊
        </h2>
        <p className="section-sub">Two focused tracks. Pick your weapon. (Yes, you can do both 😎)</p>

        <div className="tabs" role="tablist">
          {TRACKS.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={i === active}
              className={`tab ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {t.icon} {t.name}
            </button>
          ))}
        </div>

        <p className="track-blurb">{track.blurb}</p>

        <div className="phases-grid">
          {track.phases.map((p) => (
            <div className="phase-card card" key={p.phase}>
              <div className="phase-eyebrow">{p.phase}</div>
              <h3>{p.title}</h3>
              <ul className="check-list">
                {p.items.map((it) => (
                  <li key={it}>✅ {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
