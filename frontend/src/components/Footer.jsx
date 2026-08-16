import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>

      <Link to="/" className="logo">
        <span className="logo-mark"></span>
        FocusFlow
      </Link>

      <p>
        © 2026 FocusFlow. Built for focused teams.
      </p>

    </footer>
  );
}

export default Footer;