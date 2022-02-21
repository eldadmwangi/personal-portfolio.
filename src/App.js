import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* <Router> */}
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer/>
      {/* <Routes> */}
      {/* <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/tesimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<Contact/>} /> */}
      {/* </Routes> */}
      {/* </Router> */}
    </main>
  );
}

export default App;
