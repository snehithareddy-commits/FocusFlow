import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      alert("Sending signup request");

      const response = await fetch(
        "https://focusflow-is-fine.onrender.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      console.log("Backend response:", data);

      if (response.ok) {
        // Signup successful → go to Dashboard
        navigate("/dashboard");
      } else {
        setMessage(data.message);
        alert(data.message);
      }
    } catch (error) {
      console.log("Frontend error:", error);
      setMessage("Unable to connect to the server.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          Focus<span>Flow</span>
        </div>

        <h2>Create Your Account</h2>
        <p>Start managing your work with FocusFlow</p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSignup(event);
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
          />

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
            Create Account
          </button>
        </form>

        {message && <p>{message}</p>}

        <p className="auth-bottom">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;