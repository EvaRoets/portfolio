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

        </>
    );
}

export default Header;