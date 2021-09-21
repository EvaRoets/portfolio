import React from "react"

function Contact(props) {
    return (
        <div class="contact" id="contact">
            <h1>Contact</h1>
            <p>
                <i className="fas fa-mobile-alt"></i>
                <a href="tel:+32493140480">+32 493 140 480</a>
            </p>

            <div className="contact-email-container">
                <p id="email">

                    <i className="far fa-envelope-open"></i>
                    <a href="mailto:eva_roets@hotmail">eva_roets@hotmail</a>
                </p>

                <button className="copy-email-btn tooltip" onClick="CopyToClipboard('email')">
                    <i className="fas fa-copy"></i
                    ><span className="tooltiptext">copy email</span>
                </button>
            </div>

            <a href="https://www.linkedin.com/in/evaroets/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
                https://www.linkedin.com/in/evaroets/</a>

            <a href="https://github.com/EvaRoets" target="_blank">
                <i className="fab fa-github"></i>
                https://github.com/EvaRoets</a>
        </div>
    )
}

export default Contact;