import "./Navbar.css";
import { personal } from "../../data/portfolio";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];

export default function Navbar({ scrolled, activeSection }) {
  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          <span className="logo-bracket">&lt;</span>
          AH
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${
                  activeSection === link.href.replace("#", "")
                    ? "navbar__link--active"
                    : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary navbar__cta">
          Hire Me ↗
        </a>

        <button
          className="navbar__mobile-menu"
          onClick={() => {
            const menu = document.querySelector(".navbar__links");
            menu.classList.toggle("navbar__links--open");
          }}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}