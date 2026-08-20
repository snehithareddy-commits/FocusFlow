import {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [message,setMessage]=useState("");
  const navigate=useNavigate()
  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await fetch("https://focusflow-is-fine.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const data = await response.json();
    alert(data.message);

    setMessage(data.message);
    if(response.ok){
      console.log("going to dashboard...");
      navigate("/dashboard");

    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          Focus<span>Flow</span>
        </div>

        <h2>Welcome Back</h2>
        <p>Login to continue to FocusFlow</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
          />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>
        {message && <p>{message}</p>}

        <p className="auth-bottom">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;