import { SITE, CONTACT, whatsappLink } from "../config";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="logo">
            <span className="logo-mark">PD</span>
            <span>{SITE.name}</span>
          </div>
          <p className="footer-tag">{SITE.tagline} ✌️</p>
        </div>

        <div className="footer-links">
          <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp 💬</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn 🔗</a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer">GitHub 🐙</a>
          <a href={`mailto:${CONTACT.email}`}>Email ✉️</a>
        </div>
      </div>

      <div className="container footer-bottom">
        © {YEAR} {SITE.name} · Built with 💜 in India
      </div>
    </footer>
  );
}
