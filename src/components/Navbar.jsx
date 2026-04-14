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
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-400 origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900 shadow-2xl py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${scrolled ? 'text-white' : 'text-primary-600'}`}>
            Malini<span className={scrolled ? 'text-primary-400' : 'text-slate-900'}>.D</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-110 ${scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-primary-600'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              download="Malini_D_Resume.pdf"
              className={`px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95 ${scrolled ? 'bg-white text-slate-900 hover:bg-primary-50' : 'bg-primary-600 text-white hover:bg-primary-700'}`}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className={`md:hidden transition-colors ${scrolled ? 'text-white' : 'text-slate-900'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden absolute top-full left-0 w-full border-t border-white/5 shadow-2xl overflow-hidden ${scrolled ? 'bg-slate-900' : 'bg-white'}`}
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-bold transition-colors ${scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-primary-600'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/resume.pdf" 
                download="Malini_D_Resume.pdf"
                className={`w-full py-4 rounded-2xl font-black text-center uppercase tracking-widest active:scale-95 ${scrolled ? 'bg-white text-slate-900' : 'bg-primary-600 text-white'}`}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
