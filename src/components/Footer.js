import React from "react";
import FadeInSection from "./FadeInSection";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

class Footer extends React.Component {
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
        <div id="footer">
            <div class="ending-credits"> 
                <div>Built and designed by Jose A. Infante. </div>
                <div>All rights reserved. ©</div>
                <Nav.Link href="mailto:infantejose.97@gmail.com">
                  <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
                </Nav.Link>
                <Nav.Link href="https://github.com/joseinfante" target="_blank">
                  <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/joseinfantejr/" target="_blank">
                  <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
                </Nav.Link>
            </div>
        </div>
    );
    }
}

export default Footer;