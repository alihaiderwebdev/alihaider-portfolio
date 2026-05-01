import { personal } from "../data/portfolio";
import "./About.css";

const highlights = [
  { value: "40%", label: "Page assembly time reduced" },
  { value: "25+", label: "UI bugs resolved in sprints" },
  { value: "12+", label: "REST API endpoints built" },
  { value: "3", label: "Role-based dashboards shipped" },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content animate-fade-up">
            <div className="section-eyebrow">Who I am</div>
            <h2 className="section-title">About Me</h2>

            <p className="about-para">
              I'm a <strong>React.js & MERN Stack Developer</strong> based in Lahore,
              Pakistan. I specialize in building clean, user-friendly frontends with
              React.js and connecting them to robust backends with Node.js, Express.js,
              and MongoDB.
            </p>
            <p className="about-para">
              I've worked in real Agile teams, shipped real features, and resolved
              real bugs under sprint deadlines. I care deeply about code quality,
              cross-device consistency, and delivering what clients actually need.
            </p>
            <p className="about-para">
              I also have hands-on experience with <strong>Figma to Code</strong> —
              converting pixel-perfect designs into responsive React components, as
              demonstrated in my work on the live production site{" "}
              <a href="https://www.alurareset.com" target="_blank" rel="noreferrer" className="about-link">
                alurareset.com ↗
              </a>
            </p>

            <div className="about-actions">
              <a href={personal.links.portfolio} target="_blank" rel="noreferrer" className="btn btn-primary">
                View Portfolio ↗
              </a>
              <a href={personal.links.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                GitHub
              </a>
              <a href={personal.links.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="about-highlights animate-fade-up delay-2">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-box">
                <span className="highlight-box__val">{h.value}</span>
                <span className="highlight-box__lbl">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}