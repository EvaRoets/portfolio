import React from "react";

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>
            {/*navbar starts*/}
            <div className="navigation">
                <div class="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                {/*<img src={""} className="logo" alt="Logo Image" />*/}
                <a name="top"></a>
                <div className="navigation-sub">
                    <a href="#top" class="tab nav-active">
                        <FontAwesomeIcon icon="home"/>
                        Home
                    </a>
                    <a href="#my-projects" className="tab">
                        <FontAwesomeIcon icon="code"/>
                        Projects
                    </a>
                    <a href="#my-skills" className="tab">
                        <FontAwesomeIcon icon="cogs"/>
                        Skills
                    </a>
                    <a href="#about-me" class="tab">
                        <FontAwesomeIcon icon={['far', 'user']}/>
                        About me
                    </a>
                    <a href="#contact" class="tab">
                        <FontAwesomeIcon icon={['far', 'address-card']}/>
                        Contact
                    </a>
                </div>
            </div>
            {/*navbar ends*/}

            {/*intro hero image starts*/}
            <div class="hero">
                <div class="hero-image" id="home">
                    <div class="hero-text">
                        <h2>Hi, I'm Eva!</h2>
                        <p>and I am a junior web developer, with a passion for aesthetics.</p>
                        <a href="#contact" className="button" role="button">
                            <FontAwesomeIcon icon={['far', 'address-card']}/>
                            Let's get in touch!
                        </a>
                    </div>
                </div>
            </div>
            {/*intro hero image end*/}
        </>
    );
}

export default Header;