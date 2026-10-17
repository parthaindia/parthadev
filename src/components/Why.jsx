import { WHY } from "../config";
import { Target, Layers, IndianRupee, UserCheck, MapPin, Infinity as InfinityIcon } from "lucide-react";

const ICONS = { Target, Layers, IndianRupee, UserCheck, MapPin, InfinityIcon };

export default function Why() {
  return (
    <section className="section" id="why">
      <div className="container">
        <h2 className="section-title">
          Why <span className="grad-text">ParthaDev</span>? Here's the tea
        </h2>

        <div className="why-grid">
          {WHY.map((w) => {
            const Icon = ICONS[w.icon];
            return (
              <div className="why-card card" key={w.title}>
                <div className="why-icon"><Icon /></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
