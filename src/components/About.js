import React from "react";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  render() {
    return (
      <div id="about-me">
        <FadeInSection>
          <h1>hi!</h1>
          <p>
            My name is Jose Angel Infante — I graduated Fall 2023 with a Bachelor of
            Science in Computer Science from the University of Texas at Rio Grande
            Valley ✌️.
          </p>
          <p>
            I am passionate about a wide spectrum of technology, spanning from
            full-stack development to artificial intelligence and human-computer
            interaction. I love building software that bridges the gap between
            humans and machines.
          </p>
          <a href="mailto:infantejose.97@gmail.com">
            <button className="email-me">Say hi!</button>
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
