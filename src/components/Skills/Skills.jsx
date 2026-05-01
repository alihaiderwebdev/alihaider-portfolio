import { skills } from "../data/portfolio";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-eyebrow">What I work with</div>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-desc">
          Full-stack capabilities across the entire MERN ecosystem — from pixel-perfect UIs to secure backend APIs.
        </p>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <SkillCard key={i} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group, index }) {
  return (
    <div className={`skill-card card animate-fade-up delay-${index + 1}`}>
      <div className="skill-card__header">
        <div className="skill-card__icon">{group.icon}</div>
        <h3 className="skill-card__title">{group.category}</h3>
      </div>
      <div className="skill-card__tags">
        {group.items.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}