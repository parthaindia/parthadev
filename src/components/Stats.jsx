import { STATS } from "../config";

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
