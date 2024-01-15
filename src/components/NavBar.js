import React from "react";
import { Container } from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

class NavBar extends React.Component {
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
    <div id="navigation-bar">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-me">About</a></li>
            <li><a href="#projects">Projects</a></li>
            {/* <li><a href="#contact">Contact</a></li> */}
          </ul>
    </div>
    );
    }
}
export default NavBar;