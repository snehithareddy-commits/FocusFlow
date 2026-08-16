import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyFocusFlow from "../components/WhyFocusFlow";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <WhyFocusFlow />

      <HowItWorks />

      <section className="cta">

        <p className="section-label">
          START BUILDING
        </p>

        <h2>
          Ready to focus
          <br />
          <span>on what matters?</span>
        </h2>

        <p>
          Bring your projects, tasks and team together with FocusFlow.
        </p>

        <Link to="/signup" className="primary-btn">
          Get Started
          <span>→</span>
        </Link>

      </section>

      <Footer />

    </div>
  );
}

export default Home;