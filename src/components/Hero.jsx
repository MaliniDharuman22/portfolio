import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute rounded-full bg-primary-400 blur-2xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-50 text-primary-700 font-bold text-xs mb-8 border border-primary-100 uppercase tracking-widest"
          >
            <Sparkles size={14} className="animate-pulse" />
            Available for New Opportunities
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
            Hi, I'm <br />
            <span className="text-primary-600 relative inline-block">
              Malini D
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-2 left-0 h-3 bg-primary-100 -z-10"
              />
            </span>
          </h1>
          
          <div className="h-10 mb-6">
            <p className="text-2xl md:text-3xl text-slate-700 font-bold flex items-center gap-2">
              <span className="text-primary-600">❯</span>
              {text}
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1.5 h-8 bg-primary-600 ml-1"
              />
            </p>
          </div>

          <p className="text-lg text-slate-500 max-w-lg mb-10 leading-relaxed font-medium">
            Crafting scalable web ecosystems with <span className="text-slate-900 font-bold underline decoration-primary-300 decoration-4 underline-offset-4">.NET Core</span> and <span className="text-slate-900 font-bold underline decoration-primary-300 decoration-4 underline-offset-4">React.js</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#projects" className="btn-primary flex items-center justify-center gap-2 group text-base px-10 py-4 shadow-2xl shadow-primary-500/20">
              Explore Portfolio
              <ChevronRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary flex items-center justify-center px-10 py-4 text-base border-2 hover:shadow-lg">
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden md:block perspective-1000"
        >
          {/* Decorative floating elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-200 rounded-full blur-[80px] opacity-60 animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-300 rounded-full blur-[100px] opacity-40 animate-pulse" />
          
          <div className="relative z-10 w-[380px] h-[380px] mx-auto bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border-[12px] border-white p-2 hover:rotate-2 transition-transform duration-500">
             <div className="w-full h-full rounded-[2.2rem] bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center relative group">
                <Briefcase size={120} className="text-white/10 group-hover:scale-110 transition-transform duration-700" />
                
                {/* Stats Overlay */}
                <div className="absolute inset-x-6 bottom-6 p-6 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 text-white shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-4xl font-black">1.8+</span>
                    <span className="text-xs font-bold uppercase tracking-widest mb-1.5 opacity-80">Years</span>
                  </div>
                  <p className="text-sm font-bold text-primary-50 text-shadow">Pro Full Stack Expertise</p>
                </div>
             </div>
          </div>

          {/* Premium Floating Badges */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 -right-8 p-5 bg-white rounded-[2rem] shadow-2xl border border-slate-50 flex items-center gap-4 z-20 group hover:scale-110 transition-transform"
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shadow-inner">
              <span className="text-2xl font-black">JS</span>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Frontend</p>
              <p className="font-black text-slate-800 text-lg">React.js</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-12 p-5 bg-white rounded-[2rem] shadow-2xl border border-slate-50 flex items-center gap-4 z-20 group hover:scale-110 transition-transform"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
              <span className="text-3xl font-black">#</span>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Backend</p>
              <p className="font-black text-slate-800 text-lg">.NET Core</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
