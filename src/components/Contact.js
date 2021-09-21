import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Contact() {
    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <p>
                <FontAwesomeIcon icon="mobile-alt"/>
                <a href="tel:+32493140480">+32 493 140 480</a>
            </p>

            <div className="contact-email-container">
                <p id="email">
                    <FontAwesomeIcon icon={['far', 'envelope-open']}/>
                    <a href="mailto:eva_roets@hotmail">eva_roets@hotmail</a>
                </p>

                <button className="copy-email-btn tooltip" onClick="CopyToClipboard('email')">
                    <FontAwesomeIcon icon={['far', 'copy']}/>
                    <span className="tooltiptext"></span>
                </button>
            </div>

            <a href="https://www.linkedin.com/in/evaroets/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
                https://www.linkedin.com/in/evaroets/</a>

            <a href="https://github.com/EvaRoets" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']}/>
                https://github.com/EvaRoets</a>
        </div>
    )
}

export default Contact;