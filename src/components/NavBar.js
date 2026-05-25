import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about-me" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`site-nav${scrolled ? " nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-bracket">&lt;</span>JI
            <span className="brand-bracket">/&gt;</span>
          </a>

          <button
            className={`nav-toggle${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-links${menuOpen ? " is-open" : ""}`}>
            {links.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="link-num">0{i + 1}.</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default NavBar;
