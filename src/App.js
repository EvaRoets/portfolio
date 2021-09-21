import './css/App.css';
import React from "react";
import Header from "./components/Header"
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import fas from '@fortawesome/fontawesome-free-solid';
import far from '@fortawesome/fontawesome-free-regular';
import fab from '@fortawesome/fontawesome-free-brands';
import { faMobileAlt, faEnvelopeOpen, faCopy } from '@fortawesome/free-solid-svg-icons' ;
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab, far, faMobileAlt, faEnvelopeOpen, faCopy, faLinkedin, faGithub);



function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
