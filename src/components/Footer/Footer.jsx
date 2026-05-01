import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">&lt;AH /&gt;</span>
        <p className="footer__text">
          Designed & built by <strong>Ali Haider</strong> · Lahore, Pakistan · {new Date().getFullYear()}
        </p>
        <p className="footer__stack">React.js · Node.js · MongoDB</p>
      </div>
    </footer>
  );
}