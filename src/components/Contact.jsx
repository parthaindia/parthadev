import { CONTACT, BATCH, whatsappLink } from "../config";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="hero-glow g1" />
      <div className="hero-glow g2" />
      <div className="container container-narrow contact-inner">
        <h2 className="section-title">
          Ready? <span className="grad-text">Ping me, I reply fast.</span> 📲
        </h2>
        <p className="section-sub">
          Fees, syllabus PDF, batch doubts — one WhatsApp DM away.
          {BATCH.seats}.
        </p>

        <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-big">
          💬 Chat on WhatsApp
        </a>

        <div className="contact-alt">
          <a href={`mailto:${CONTACT.email}`}>✉️ {CONTACT.email}</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
          <a href={CONTACT.youtube} target="_blank" rel="noreferrer">▶️ YouTube</a>
        </div>

        <p className="contact-note">
          No spam, no annoying follow-up calls. Sirf useful info. 🤝
        </p>
      </div>
    </section>
  );
}
