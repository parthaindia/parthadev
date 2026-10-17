import { CONTACT, BATCH, whatsappLink } from "../config";
import { Mail } from "lucide-react";
import { LinkedinIcon, YoutubeIcon, WhatsappIcon } from "./BrandIcons";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="hero-glow g1" />
      <div className="hero-glow g2" />
      <div className="container container-narrow contact-inner">
        <h2 className="section-title">
          Ready? <span className="grad-text">Ping me, I reply fast.</span>
        </h2>
        <p className="section-sub">
          Fees, syllabus PDF, batch doubts — one WhatsApp message away.
          {BATCH.seats}.
        </p>

        <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-big">
          <WhatsappIcon /> Chat on WhatsApp
        </a>

        <div className="contact-alt">
          <a href={`mailto:${CONTACT.email}`}><Mail /> {CONTACT.email}</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
          <a href={CONTACT.youtube} target="_blank" rel="noreferrer"><YoutubeIcon /> YouTube</a>
        </div>

        <p className="contact-note">
          No spam, no annoying follow-up calls. Just useful info.
        </p>
      </div>
    </section>
  );
}
