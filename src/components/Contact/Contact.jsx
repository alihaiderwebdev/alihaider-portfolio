import { personal } from "../data/portfolio";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-pattern" aria-hidden="true" />
      <div className="container contact-inner">
        <div className="section-eyebrow contact-eyebrow">Let's work together</div>
        <h2 className="contact-title">Open to Opportunities</h2>
        <p className="contact-desc">
          Available for full-time roles, remote positions & freelance projects.
          <br />
          Based in Lahore, Pakistan · Ready to start immediately.
        </p>

        <a href={`mailto:${personal.email}`} className="contact-email">
          {personal.email} ↗
        </a>

        <div className="contact-links">
          <a href={personal.links.linkedin} target="_blank" rel="noreferrer" className="contact-link">
            LinkedIn
          </a>
          <a href={personal.links.github} target="_blank" rel="noreferrer" className="contact-link">
            GitHub
          </a>
          <a href={personal.links.portfolio} target="_blank" rel="noreferrer" className="contact-link">
            Portfolio
          </a>
          <a href={`tel:${personal.phone}`} className="contact-link">
            {personal.phone}
          </a>
        </div>
      </div>
    </section>
  );
}