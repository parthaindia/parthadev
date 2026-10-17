import { useState } from "react";
import { NAV_LINKS, SITE, whatsappLink } from "../config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">PD</span>
          <span>{SITE.shortName}</span>
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-nav">
            Join Batch 💬
          </a>
        </nav>

        <button
          className={`burger ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
