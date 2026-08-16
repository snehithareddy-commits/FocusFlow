import "../styles/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-section" id="how">

      <div className="section-heading center">

        <p className="section-label">
          HOW IT WORKS
        </p>

        <h2>
          From idea to <span>done.</span>
        </h2>

        <p>
          A simple workflow designed to keep your team focused.
        </p>

      </div>

      <div className="steps">

        <div className="step">
          <span>01</span>
          <h3>Plan</h3>
          <p>Create projects and define the work.</p>
        </div>

        <div className="step-line"></div>

        <div className="step">
          <span>02</span>
          <h3>Build</h3>
          <p>Create tasks and assign responsibilities.</p>
        </div>

        <div className="step-line"></div>

        <div className="step">
          <span>03</span>
          <h3>Track</h3>
          <p>See progress and identify blockers.</p>
        </div>

        <div className="step-line"></div>

        <div className="step">
          <span>04</span>
          <h3>Ship</h3>
          <p>Finish the work and hit your deadlines.</p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;