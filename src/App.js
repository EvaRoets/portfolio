import React from "react"

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import fontawesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import fas from '@fortawesome/fontawesome-free-solid';
import far from '@fortawesome/fontawesome-free-regular';
import fab from '@fortawesome/fontawesome-free-brands';
import {faMobileAlt, faEnvelopeOpen, faCopy} from '@fortawesome/free-solid-svg-icons' ;
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab, far, faMobileAlt, faEnvelopeOpen, faCopy, faLinkedin, faGithub);

function App() {
    return (
        <div className="App" style={{
            backgroundImage: `url("./css/images/background-home.jpg")`
        }}>
            <main>
                <Header/>
                <Hero/>
                <Projects/>
                <Skills/>
                <About/>
                <Contact/>
                <Footer/>
            </main>
        </div>
    );
}

export default App;






























