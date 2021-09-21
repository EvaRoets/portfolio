import React from "react";

const Header = () => {
    return (
        <>
            <div className="header">
                <h1>My portfolio</h1>
            </div>

            {/*navbar starts*/}
            <div className="navigation">
                <div class="hamburger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <img src={""} className="logo" alt="Logo Image" />

                <div className="navigation-sub">
                    <a href="#home" class="tab nav-active">Home</a>
                    <a href="#my-projects" class="tab">My projects</a>
                    <a href="#about-me" class="tab">About me</a>
                    <a href="#contact" class="tab">Contact me</a>
                </div>
            </div>
            {/*navbar ends*/}

            <div class="hero">
                {/*intro hero image starts*/}

                <div class="hero-image" id="home">
                    <div class="hero-text">
                        <h1>I am Eva Roets...</h1>
                        <p>and I am a junior web developer, with a passion for aesthetics.</p>
                        <button>Contact me</button>
                    </div>
                </div>
            </div>
            {/*intro hero image end*/}

        </>
    );
}

export default Header;