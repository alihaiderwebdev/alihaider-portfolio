import { projects } from "../data/portfolio";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-eyebrow">What I've built</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">
          Real-world applications built end-to-end — from architecture to deployment.
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      className={`project-card card ${project.featured ? "project-card--featured" : ""} animate-fade-up delay-${index + 1}`}
    >
      {project.featured && (
        <div className="project-card__featured-bar">
          ⭐ Featured Project
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__top">
          <span className="badge">{project.badge}</span>
          {project.live && (
            <span className="project-card__live-indicator">
              <span className="project-card__live-dot" />
              Live
            </span>
          )}
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__metrics">
          {project.metrics.map((m, i) => (
            <div key={i} className="project-metric">
              <span className="project-metric__val">{m.value}</span>
              <span className="project-metric__lbl">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="project-card__stack">
          {project.stack.map((tech) => (
            <span key={tech} className="project-stack-tag">{tech}</span>
          ))}
        </div>

        <div className="project-card__links">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Site ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      <div
        className="project-card__visual"
        style={{ "--project-color": project.color }}
      >
        <ProjectIllustration id={project.id} />
      </div>
    </div>
  );
}

function ProjectIllustration({ id }) {
  if (id === 1) {
    return (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="160" height="120" rx="12" fill="currentColor" fillOpacity="0.08" />
        <rect x="30" y="30" width="55" height="100" rx="8" fill="currentColor" fillOpacity="0.2" />
        <circle cx="57" cy="58" r="16" fill="currentColor" fillOpacity="0.4" />
        <rect x="38" y="80" width="40" height="6" rx="3" fill="currentColor" fillOpacity="0.3" />
        <rect x="38" y="92" width="28" height="6" rx="3" fill="currentColor" fillOpacity="0.2" />
        <rect x="96" y="30" width="74" height="44" rx="8" fill="currentColor" fillOpacity="0.2" />
        <rect x="104" y="40" width="56" height="6" rx="3" fill="currentColor" fillOpacity="0.4" />
        <rect x="104" y="52" width="40" height="6" rx="3" fill="currentColor" fillOpacity="0.3" />
        <rect x="96" y="84" width="74" height="44" rx="8" fill="currentColor" fillOpacity="0.15" />
        <rect x="104" y="94" width="56" height="6" rx="3" fill="currentColor" fillOpacity="0.35" />
        <rect x="104" y="106" width="36" height="6" rx="3" fill="currentColor" fillOpacity="0.25" />
      </svg>
    );
  }
  if (id === 2) {
    return (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="15" width="160" height="100" rx="10" fill="currentColor" fillOpacity="0.08" />
        <rect x="20" y="15" width="160" height="22" rx="10" fill="currentColor" fillOpacity="0.15" />
        <circle cx="34" cy="26" r="5" fill="currentColor" fillOpacity="0.4" />
        <circle cx="50" cy="26" r="5" fill="currentColor" fillOpacity="0.3" />
        <circle cx="66" cy="26" r="5" fill="currentColor" fillOpacity="0.2" />
        <rect x="30" y="50" width="140" height="12" rx="4" fill="currentColor" fillOpacity="0.25" />
        <rect x="30" y="70" width="100" height="8" rx="4" fill="currentColor" fillOpacity="0.18" />
        <rect x="30" y="84" width="120" height="8" rx="4" fill="currentColor" fillOpacity="0.18" />
        <rect x="30" y="98" width="80" height="8" rx="4" fill="currentColor" fillOpacity="0.15" />
        <rect x="40" y="125" width="120" height="20" rx="6" fill="currentColor" fillOpacity="0.3" />
        <rect x="55" y="131" width="90" height="8" rx="3" fill="currentColor" fillOpacity="0.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="20" width="170" height="120" rx="10" fill="currentColor" fillOpacity="0.06" />
      <rect x="15" y="20" width="170" height="30" rx="10" fill="currentColor" fillOpacity="0.12" />
      <rect x="25" y="30" width="80" height="10" rx="3" fill="currentColor" fillOpacity="0.35" />
      <rect x="150" y="28" width="25" height="14" rx="7" fill="currentColor" fillOpacity="0.4" />
      <rect x="25" y="65" width="70" height="60" rx="8" fill="currentColor" fillOpacity="0.18" />
      <rect x="105" y="65" width="70" height="28" rx="8" fill="currentColor" fillOpacity="0.18" />
      <rect x="105" y="100" width="70" height="25" rx="8" fill="currentColor" fillOpacity="0.14" />
      <circle cx="60" cy="85" r="14" fill="currentColor" fillOpacity="0.3" />
      <rect x="35" y="104" width="50" height="6" rx="3" fill="currentColor" fillOpacity="0.25" />
      <rect x="35" y="114" width="36" height="6" rx="3" fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}