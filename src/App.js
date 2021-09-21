import './App.css';
import React from "react";
import Header from "./components/Header"
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


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
