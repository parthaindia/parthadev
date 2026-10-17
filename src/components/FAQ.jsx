import { useState } from "react";
import { FAQS } from "../config";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section sec-alt" id="faq">
      <div className="container container-narrow">
        <h2 className="section-title">
          FAQs — <span className="grad-text">ask anything</span>
        </h2>
        <p className="section-sub">The questions everyone asks. Straight answers.</p>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item ${i === openIdx ? "is-open" : ""}`} key={f.q}>
              <button
                className="faq-q"
                aria-expanded={i === openIdx}
                onClick={() => setOpenIdx(i === openIdx ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="faq-icon">{i === openIdx ? "−" : "+"}</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
