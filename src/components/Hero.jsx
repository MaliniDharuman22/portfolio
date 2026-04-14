import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Briefcase, ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer";
  
  // Parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [0, 500], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 500], [-5, 5]), springConfig);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#fafafa]">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary-200/50 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-100/50 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white shadow-xl shadow-primary-500/5 text-primary-700 font-black text-[10px] mb-10 border border-primary-100 uppercase tracking-[0.2em]"
          >
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-ping" />
            Top Rated Developer
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.85] mb-10 tracking-tighter">
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 relative">
              Architect
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-4 bg-primary-500/10 -z-10 rounded-full"
              />
            </span>
          </h1>
          
          <div className="h-12 mb-8">
            <p className="text-3xl md:text-4xl text-slate-800 font-bold flex items-center gap-3">
              <span className="text-primary-600 opacity-50 font-black">/</span>
              {text}
              <motion.span 
                animate={{ opacity: [1, 0.1, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-2.5 h-10 bg-primary-600 rounded-sm"
              />
            </p>
          </div>

          <p className="text-xl text-slate-500 max-w-lg mb-12 leading-relaxed font-medium">
            Engineering robust <span className="text-slate-900 font-bold">.NET</span> ecosystems and high-fidelity <span className="text-slate-900 font-bold">React</span> interfaces for global-scale performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#projects" className="btn-primary flex items-center justify-center gap-3 text-lg px-12 py-5 shadow-[0_20px_40px_-10px_rgba(14,165,233,0.3)] group">
              View Work
              <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a href="#contact" className="px-12 py-5 rounded-full border-2 border-slate-200 font-black uppercase tracking-widest text-xs hover:border-primary-400 hover:text-primary-600 transition-all active:scale-95 bg-white/50 backdrop-blur-md">
              Start Project
            </a>
          </div>
        </motion.div>

        <motion.div
          style={{ rotateX, rotateY }}
          className="relative hidden md:block perspective-1000"
        >
          {/* Advanced Lighting Effects */}
          <div className="absolute inset-0 bg-primary-500/20 blur-[120px] rounded-full animate-pulse" />
          
          <div className="relative z-10 w-[420px] h-[420px] mx-auto bg-white rounded-[4rem] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.2)] overflow-hidden border-[15px] border-white p-2 group transition-all duration-700 hover:shadow-[0_80px_120px_-20px_rgba(14,165,233,0.25)]">
             <div className="w-full h-full rounded-[3.2rem] bg-gradient-to-br from-slate-900 via-primary-950 to-primary-900 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <Briefcase size={140} className="text-white/5 group-hover:scale-110 transition-transform duration-1000" />
                
                {/* Floating Stats Bento */}
                <div className="absolute inset-x-8 bottom-8 p-8 glass-premium rounded-[2.5rem] transform group-hover:-translate-y-4 transition-transform duration-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-black text-white tracking-tighter">1.8<span className="text-primary-400">+</span></span>
                    <Sparkles className="text-primary-400 animate-spin-slow" size={24} />
                  </div>
                  <p className="text-sm font-black text-white uppercase tracking-[0.25em]">Years Mastery</p>
                  <p className="text-[10px] text-white/80 mt-1">Full Stack Architecture</p>
                </div>
             </div>
          </div>

          {/* Premium Floating Context Cards */}
          <motion.div 
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-12 p-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] flex items-center gap-5 z-20 group hover:scale-110 transition-transform shadow-2xl"
          >
            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white shadow-xl rotate-3 group-hover:rotate-12 transition-transform">
              <span className="text-2xl font-black">JS</span>
            </div>
            <div>
              <p className="text-[10px] text-primary-400 font-black uppercase tracking-[0.3em] mb-1">Frontend</p>
              <p className="font-black text-slate-100 text-xl">React.js</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-16 p-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] flex items-center gap-5 z-20 group hover:scale-110 transition-transform shadow-2xl"
          >
            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-xl -rotate-6 group-hover:rotate-0 transition-transform">
              <span className="text-4xl font-black">#</span>
            </div>
            <div>
              <p className="text-[10px] text-primary-400 font-black uppercase tracking-[0.3em] mb-1">Backend</p>
              <p className="font-black text-slate-100 text-xl">.NET Core</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
