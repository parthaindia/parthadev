import { TESTIMONIALS } from "../config";

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <h2 className="section-title">
          Students <span className="grad-text">yapping about us</span> ⭐
        </h2>
        <p className="section-sub">Real words from people who made the switch.</p>

        <div className="reviews-grid">
          {TESTIMONIALS.map((t) => (
            <div className="review card" key={t.name}>
              <div className="review-stars">★★★★★</div>
              <p className="review-quote">"{t.quote}"</p>
              <div className="review-author">
                <div className="review-avatar" aria-hidden="true">{t.name[0]}</div>
                <div>
                  <div className="review-name">{t.name}</div>
                  <div className="review-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
