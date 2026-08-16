import { Link } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          Focus<span>Flow</span>
        </div>

        <h2>Create Your Account</h2>
        <p>Start managing your work with FocusFlow</p>

        <form>
          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit" className="auth-btn">
            Create Account
          </button>
        </form>

        <p className="auth-bottom">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;