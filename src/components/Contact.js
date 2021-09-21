import React from "react"

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Contact() {
    return (
        <div className="contact" id="contact">
            <FontAwesomeIcon icon={['far', 'address-card']}/>
            <h2>Contact</h2>

            <p>Wat is Lorem Ipsum?
                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in
                deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar
                husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel
                onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie
                van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus
                PageMaker die versies van Lorem Ipsum bevatten.</p>

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

            <a href="#top">
                <FontAwesomeIcon icon="chevron-circle-up"/>
                Let's go back to the top
            </a>
        </div>
    )
}

export default Contact;