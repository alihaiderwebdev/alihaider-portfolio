import { personal } from "../../data/portfolio";
import "./Hero.css";
import aliphoto from "../../assets/images/aliphoto.webp";

const techStack = ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs", "JWT"];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-pattern" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__orb hero__orb--${i + 1}`} />
        ))}
      </div>

      <div className="container hero__inner">
        <div className="hero__content animate-fade-up">
          <div className="hero__available">
            <span className="hero__available-dot" />
            Available for opportunities
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">React.js &</span>
            <span className="hero__title-accent">MERN Stack</span>
            <span className="hero__title-line">Developer</span>
          </h1>

          <p className="hero__desc">
            Building fast, scalable & responsive web applications with clean,
            maintainable code. Based in{" "}
            <span className="hero__location">📍 Lahore, Pakistan</span>
          </p>

          <div className="hero__stack">
            {techStack.map((tech) => (
              <span key={tech} className="hero__tech-pill">
                {tech}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Work ↓
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
            <a
              href={personal.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero__visual animate-fade-up delay-2">
          <div className="hero__card">
            <div className="hero__avatar"><img src={aliphoto} alt="Ali Haider" />

            </div>
            <h3 className="hero__card-name">{personal.name}</h3>
            <p className="hero__card-role">React.js · MERN Stack Developer</p>

            <div className="hero__card-stats">
              <div className="hero__stat">
                <span className="hero__stat-val">2+</span>
                <span className="hero__stat-lbl">Internships</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-val">25+</span>
                <span className="hero__stat-lbl">Bugs Fixed</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-val">12+</span>
                <span className="hero__stat-lbl">API Endpoints</span>
              </div>
            </div>

            <div className="hero__card-live">
              <span className="hero__live-dot" />
              <a href="https://www.alurareset.com" target="_blank" rel="noreferrer">
                alurareset.com
              </a>
              <span className="hero__live-badge">Live</span>
            </div>

            <div className="hero__card-links">
              <a href={personal.links.linkedin} target="_blank" rel="noreferrer" className="hero__icon-link">
                in
              </a>
              <a href={personal.links.github} target="_blank" rel="noreferrer" className="hero__icon-link">
                gh
              </a>
              <a href={personal.links.github} target="_blank" rel="noreferrer" className="hero__icon-link">
                🔗
              </a>
            </div>
          </div>

          <div className="hero__floating-tag hero__floating-tag--1">
            ⚛️ React.js
          </div>
          <div className="hero__floating-tag hero__floating-tag--2">
            🌿 MERN Stack
          </div>
          <div className="hero__floating-tag hero__floating-tag--3">
            🔐 JWT Auth
          </div>
        </div>
      </div>

      <a href="#skills" className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </a>
    </section>
  );
}