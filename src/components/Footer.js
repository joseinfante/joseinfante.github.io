import React from "react";
import Nav from "react-bootstrap/Nav";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="ending-credits">
          <div>Built &amp; designed by Jose A. Infante.</div>
          <div>All rights reserved. &copy;</div>
          <div className="footer-icons">
            <Nav.Link href="mailto:infantejose.97@gmail.com">
              <EmailRoundedIcon style={{ fontSize: 17 }} />
            </Nav.Link>
            <Nav.Link href="https://github.com/joseinfante" target="_blank">
              <GitHubIcon style={{ fontSize: 17 }} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/joseinfantejr/" target="_blank">
              <LinkedInIcon style={{ fontSize: 17 }} />
            </Nav.Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
