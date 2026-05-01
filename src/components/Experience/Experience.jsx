import { experience, education } from "../../data/portfolio";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-layout">
          <div className="experience-left">
            <div className="section-eyebrow">Where I've worked</div>
            <h2 className="section-title">Experience</h2>
            <p className="section-desc">
              Real Agile environments. Real deliverables. Real impact.
            </p>

            <div className="education-cards">
              <h3 className="education-title">Education</h3>
              {education.map((edu, i) => (
                <div key={i} className="education-card">
                  <span className="education-card__year">{edu.year}</span>
                  <strong className="education-card__degree">{edu.degree}</strong>
                  <span className="education-card__inst">{edu.institution}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="timeline">
            {experience.map((job, i) => (
              <TimelineItem key={i} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ job, index }) {
  return (
    <div className={`timeline-item animate-fade-up delay-${index + 1}`}>
      <div className="timeline-item__dot" />
      <div className="timeline-item__card card">
        <div className="timeline-item__header">
          <div>
            <h3 className="timeline-item__role">{job.role}</h3>
            <p className="timeline-item__company">{job.company} · {job.location}</p>
          </div>
          <div className="timeline-item__meta">
            <span className="timeline-item__period">{job.period}</span>
            <span className={`timeline-item__type ${job.type === "Remote" ? "timeline-item__type--remote" : ""}`}>
              {job.type}
            </span>
          </div>
        </div>
        <ul className="timeline-item__bullets">
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}