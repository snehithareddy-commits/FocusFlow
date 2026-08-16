import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-mark"></span>
        FocusFlow
      </Link>

      <div className="nav-links">
        <a href="/#why">Why FocusFlow?</a>
        <a href="/#how">How It Works</a>

        <Link to="/login" className="login-btn">
          Log in
        </Link>

        <Link to="/signup" className="nav-cta">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;