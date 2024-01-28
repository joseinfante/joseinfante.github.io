import React from "react";
import FadeInSection from "./FadeInSection";
import Nav from "react-bootstrap/Nav";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";


class About extends React.Component {
    constructor() {
        super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
        <div id="about-me">
        <FadeInSection>
        <h1 >hi!</h1>
        <p>My name is Jose Angel Infante and I recently graduated this Fall 2023, with a Bachelor of Science in Computer Science at the University of Texas at Rio Grande Valley✌️.</p>
        <p>I am passionate about a wide spectrum of technology, spanning from full-stack development to artificial intelligence and human-computer interactions. My interests encompass the entire range of technologies that bridge the gap between software development and the interaction between humans and machines.</p>
        <div class="email-me-button">
            <a href="mailto:infantejose.97@gmail.com" class="intro-contact">
                <button class="email-me">
                   <ul>
                        {/* <li><img height="25px" width="25px" src="/resources/icons/email-white.png" alt="Send me an email!"></li> */}
                        <li>Say hi!</li>
                   </ul>
                </button>
            </a>
        </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;