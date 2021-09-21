import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    const name = "Eva Roets"
    return (
        <>
            <div className="footer sticky">
                Copyright
                <FontAwesomeIcon icon={['far', 'copyright']}/>
                <script>document.write(new Date().getFullYear())</script>
                {name}
            </div>
        </>
    );
}

export default Footer;






