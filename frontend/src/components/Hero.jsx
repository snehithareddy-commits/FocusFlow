import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-badge">
          <span></span>
          Built for focused teams
        </div>

        <p className="tagline">
          FOCUS ON THE WORK. WE'LL HANDLE THE WORKFLOW.
        </p>

        <h1>
          Plan smarter.
          <br />
          <span>Work better.</span>
        </h1>

        <p className="hero-text">
          FocusFlow gives your team one simple place to
          plan projects, manage tasks, collaborate, and
          keep work moving forward.
        </p>

        <div className="hero-buttons">
          <Link to="/signup" className="hero-btn">
            Get Started
            <span>→</span>
          </Link>

          
        </div>

      </div>

      <div className="hero-visual">

        <div className="visual-glow"></div>

        <div className="workflow-card">

          <div className="workflow-header">
            <div>
              <span>FOCUSFLOW</span>
              <h3>Workflows</h3>
            </div>

            <div className="live">
              <i></i>
              LIVE
            </div>
          </div>

          <div className="workflow">

            <div className="workflow-step active">
              <div className="step-icon">01</div>

              <div>
                <strong>Plan</strong>
                <p>Organize your work</p>
              </div>

              <b>✓</b>
            </div>

            <div className="workflow-connector"></div>

            <div className="workflow-step active">
              <div className="step-icon">02</div>

              <div>
                <strong>Build</strong>
                <p>Turn plans into tasks</p>
              </div>

              <b>✓</b>
            </div>

            <div className="workflow-connector"></div>

            <div className="workflow-step">
              <div className="step-icon">03</div>

              <div>
                <strong>Track</strong>
                <p>Keep everyone aligned</p>
              </div>

              <b className="arrow">→</b>
            </div>

            <div className="workflow-connector"></div>

            <div className="workflow-step">
              <div className="step-icon">04</div>

              <div>
                <strong>Ship</strong>
                <p>Get work done</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;