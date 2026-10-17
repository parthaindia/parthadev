import { WHY } from "../config";

export default function Why() {
  return (
    <section className="section" id="why">
      <div className="container">
        <h2 className="section-title">
          Why <span className="grad-text">ParthaDev</span>? Here's the tea 🍵
        </h2>

        <div className="why-grid">
          {WHY.map((w) => (
            <div className="why-card card" key={w.title}>
              <div className="why-emoji">{w.emoji}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
