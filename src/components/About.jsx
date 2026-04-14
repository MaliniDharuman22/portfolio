import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Database, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Zap size={24} />, title: "1.8+ Years", description: "Experience as Full Stack Developer" },
    { icon: <Code size={24} />, title: "Full Stack", description: ".NET Core & React.js Expertise" },
    { icon: <Database size={24} />, title: "Database", description: "SQL Server & MySQL proficiency" },
    { icon: <Award size={24} />, title: "Quality", description: "Focus on clean & scalable code" },
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Branding */}
      <div className="absolute top-0 right-0 p-12 hidden lg:block select-none pointer-events-none">
        <span className="text-[12rem] font-black text-slate-50 uppercase leading-none origin-top-right rotate-90 inline-block translate-x-1/2">About</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[4rem] bg-slate-900 overflow-hidden shadow-2xl group">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
               <div className="absolute inset-0 flex items-center justify-center p-20">
                  <Cpu size={200} className="text-white/5 group-hover:scale-110 transition-transform duration-1000" />
               </div>
               
               {/* Impact Overlay */}
               <div className="absolute bottom-12 left-12 right-12 glass-premium p-8 rounded-[2.5rem] border-white/20">
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-6xl font-black text-white tracking-tighter">1.8</span>
                    <span className="text-xl font-bold text-primary-400 mb-2">Years Pro</span>
                  </div>
                  <p className="text-sm font-bold text-white/70 uppercase tracking-widest">Full Stack Engineering</p>
               </div>
            </div>

            {/* Achievement Badges */}
            <motion.div 
               whileHover={{ scale: 1.05 }}
               className="absolute -top-8 -right-8 p-6 bg-white rounded-[2rem] shadow-2xl border border-slate-50 z-20 flex flex-col items-center"
            >
               <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-2">
                  <Database size={24} />
               </div>
               <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Mastery</p>
               <p className="font-black text-slate-900">SQL Expert</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-600 mb-6 block"
              >
                The Introduction
              </motion.span>
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                Building <br /> High-IQ <br /> <span className="text-primary-600">Architectures.</span>
              </h3>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                I specialize in bridging the gap between high-performance backends and pixel-perfect frontends. My philosophy is simple: **Scalability is not an option, it's a requirement.**
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-2">
                  <p className="text-3xl font-black text-slate-900 italic">"Clean Code"</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">My Religion</p>
               </div>
               <div className="space-y-2">
                  <p className="text-3xl font-black text-slate-900 italic">"User First"</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">My Priority</p>
               </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
               {["System Design", "Agile Workflow", "API Security", "UI/UX Fidelity"].map((skill, idx) => (
                 <div key={idx} className="px-6 py-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-black uppercase tracking-widest text-slate-600">
                    {skill}
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
