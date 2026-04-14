import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Briefcase, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-primary-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-300 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6 border border-primary-200">
            Available for New Opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Hi, I'm <span className="text-primary-600">Malini D</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-4">
            Full Stack Developer (.NET Core + React.js)
          </p>
          <p className="text-lg text-slate-500 max-w-lg mb-8 leading-relaxed">
            Building scalable web applications with .NET Core and React.js. Specialized in creating high-performance, user-centric solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex items-center gap-3 text-slate-600">
              <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100">
                <Mail size={20} className="text-primary-600" />
              </div>
              <span className="font-medium">malini220402@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100">
                <Phone size={20} className="text-primary-600" />
              </div>
              <span className="font-medium">+91 6383726649</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              View Projects
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-[450px] h-[450px] mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white p-2">
             {/* Placeholder for actual image - using a nice gradient/pattern until real image is provided */}
             <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <Briefcase size={120} className="text-white/20" />
                <span className="absolute bottom-10 left-10 right-10 p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white">
                  <span className="block text-2xl font-bold mb-1">1.8+ Years</span>
                  <span className="text-white/80">Full Stack Experience</span>
                </span>
             </div>
          </div>
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
              JS
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Expertise</p>
              <p className="font-bold text-slate-800">React.js</p>
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-[-20px] p-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
              #
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Backend</p>
              <p className="font-bold text-slate-800">.NET Core</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
