import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-indigo-500 origin-left z-[70]"
        style={{ scaleX }}
      />
      <nav className={`fixed w-full z-[60] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className={`max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-slate-900/90 backdrop-blur-2xl py-3 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] mt-4' : 'bg-transparent'}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href="#" className={`text-2xl md:text-3xl font-black tracking-tighter transition-all duration-500 flex items-center gap-2 group ${scrolled ? 'text-white' : 'text-slate-900'}`}>
              Malini<span className="text-primary-600 transition-transform group-hover:scale-125">.D</span>
            </a>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full ${scrolled ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-primary-600 hover:bg-slate-100'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              download="Malini_D_Resume.pdf"
              className="group relative ml-4"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500" />
              <div className="relative px-6 py-2 bg-slate-900 rounded-full text-white text-[10px] font-black uppercase tracking-widest leading-none flex items-center gap-2 border border-white/10">
                Resume
                <Download size={12} className="group-hover:translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${scrolled ? 'text-white hover:bg-white/10' : 'bg-slate-900 text-white shadow-xl'}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Cinematic Overlay */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:hidden fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-3xl flex flex-col items-center justify-center p-12 pointer-events-auto"
          >
            <button className="absolute top-8 right-8 text-white/40 hover:text-white" onClick={() => setIsOpen(false)}>
               <X size={40} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-black text-white hover:text-primary-500 transition-colors tracking-tighter"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                href="/resume.pdf" 
                download="Malini_D_Resume.pdf"
                className="mt-8 px-12 py-5 bg-primary-600 text-white font-black rounded-full uppercase tracking-widest text-xs shadow-2xl"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
