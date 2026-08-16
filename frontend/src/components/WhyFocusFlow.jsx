import "../styles/WhyFocusFlow.css";

function WhyFocusFlow() {
  return (
    <section className="why-section" id="why">

      <div className="section-heading">
        <p className="section-label">
          WHY FOCUSFLOW?
        </p>

        <h2>
          Less chaos.
          <br />
          <span>More focused work.</span>
        </h2>

        <p>
          Everything your team needs to stay organized,
          aligned, and moving forward.
        </p>
      </div>

      <div className="why-grid">

        <div className="why-card">
          <span>01</span>
          <h3>One Workspace</h3>
          <p>
            Projects, tasks, deadlines and team activity
            stay together in one place.
          </p>
        </div>

        <div className="why-card">
          <span>02</span>
          <h3>Clear Priorities</h3>
          <p>
            Know what needs attention, when it is due,
            and who is responsible.
          </p>
        </div>

        <div className="why-card">
          <span>03</span>
          <h3>Better Teamwork</h3>
          <p>
            Keep everyone aligned and make collaboration
            simple and transparent.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyFocusFlow;