import React from "react";
import FadeInSection from "../components/FadeInSection";

class Home extends React.Component {
  render() {
    return (
      <div id="hero-section">
        <FadeInSection>
          <h1 id="home">JOSE<br />INFANTE</h1>
          <p className="hero-subtitle">
            <span>Full-Stack Developer</span> &amp; CS Graduate
          </p>
        </FadeInSection>
      </div>
    );
  }
}

export default Home;
