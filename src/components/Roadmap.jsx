import { ROADMAP } from "../config";

export default function Roadmap() {
  return (
    <section className="section sec-alt" id="roadmap">
      <div className="container">
        <h2 className="section-title">
          Your path: <span className="grad-text">zero → placed</span>
        </h2>
        <p className="section-sub">Follow the line. No guesswork, no random YouTube rabbit holes.</p>

        <div className="roadmap">
          {ROADMAP.map((step, i) => (
            <div className="roadmap-step" key={step}>
              <span className="roadmap-num">{i + 1}</span>
              <span className="roadmap-label">{step}</span>
              {i < ROADMAP.length - 1 && <span className="roadmap-arrow">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
