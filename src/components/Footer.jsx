import { SITE, CONTACT, whatsappLink } from "../config";
import { Mail, Heart } from "lucide-react";
import { LinkedinIcon, YoutubeIcon, GithubIcon, WhatsappIcon } from "./BrandIcons";

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
          <p className="footer-tag">{SITE.tagline}</p>
        </div>

        <div className="footer-links">
          <a href={whatsappLink} target="_blank" rel="noreferrer"><WhatsappIcon /> WhatsApp</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
          <a href={CONTACT.youtube} target="_blank" rel="noreferrer"><YoutubeIcon /> YouTube</a>
          <a href={`mailto:${CONTACT.email}`}><Mail /> Email</a>
        </div>
      </div>

      <div className="container footer-bottom">
        © {YEAR} {SITE.name} · Built with <Heart /> in India
      </div>
    </footer>
  );
}
