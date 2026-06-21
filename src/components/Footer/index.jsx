import "./index.css";

const Footer = () => (
  <footer className="footer-section" aria-label="Footer">
    <p className="brand-name">Go Business</p>

    <nav aria-label="Footer" className="footer-nav">
      <a href="/">About</a>
      <a>Contact</a>
      <a href="/">Privacy</a>
      <a>Terms</a>
    </nav>

    <p className="copyright">© 2024 Go Business</p>
  </footer>
);

export default Footer;
