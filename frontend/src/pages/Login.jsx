import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          Focus<span>Flow</span>
        </div>

        <h2>Welcome Back</h2>
        <p>Login to continue to FocusFlow</p>

        <form>
          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-bottom">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;