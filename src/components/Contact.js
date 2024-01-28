import React from "react";
import FadeInSection from "./FadeInSection";
import Nav from "react-bootstrap/Nav";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Contact.css";

class Contact extends React.Component {
 
    render() {
        return (
            <div id="contact">
                <FadeInSection>
                    {/* <h1 id="contact-section">./ contact</h1> */}
                    <p>Feel free to contact me at any of the links below!</p>
                    {/* Contact Links */}
                    <div className="contact-links">
                        <Nav.Link href="mailto:infantejose.97@gmail.com" target="_blank" className="contact-link">
                            <EmailRoundedIcon className="contact-icon" />
                            <span className="contact-link-text">Email</span>
                        </Nav.Link>
                        <Nav.Link href="https://github.com/joseinfante" target="_blank" className="contact-link">
                            <GitHubIcon className="contact-icon" />
                            <span className="contact-link-text">GitHub</span>
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/joseinfantejr/" target="_blank" className="contact-link">
                            <LinkedInIcon className="contact-icon" />
                            <span className="contact-link-text">LinkedIn</span>
                        </Nav.Link>
                    </div>
                     {/* Contact Form
                     <div className="contact-form">
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>

                            <button type="submit">Submit</button>
                        </form>
                    </div> */}
                </FadeInSection>
            </div>
        );
    }
}

export default Contact;