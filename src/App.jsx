import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 relative selection:bg-primary-100 selection:text-primary-900">
      <CustomCursor />
      {/* Global Grain & Texture */}
      <div className="grain-overlay" />
      
      {/* Global Mesh Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-primary-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] bg-indigo-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
