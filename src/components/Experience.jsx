import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Vivify Technocrats",
      location: "Chennai",
      role: "Full Stack Developer",
      duration: "Sep 2024 – Present",
      highlights: [
        "Developed scalable REST APIs using .NET Core Web API.",
        "Improved API performance by 30% through query optimization and caching.",
        "Implemented secure JWT authentication and Role-Based Access Control (RBAC).",
        "Integrated payment gateways and various third-party APIs.",
        "Successfully deployed and managed applications using IIS (Internet Information Services)."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Decorative Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-primary-900 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] bg-indigo-900 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
            >
              Career <br /> <span className="text-primary-500">Expedition</span>
            </motion.h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Charting the course through enterprise challenges and architectural breakthroughs.
            </p>
          </div>
          <div className="hidden lg:block text-right">
             <span className="text-8xl font-black text-white/5 leading-none">VIVIFY</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Linear Gradient Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary-500/0 via-primary-500/50 to-primary-500/0" />

          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mb-32 last:mb-0"
            >
              {/* Central Year Node */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 mt-[1.2rem] w-12 h-12 glass-premium rounded-2xl border-primary-500/30 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                 <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              </div>

              <div className={`grid md:grid-cols-2 gap-16 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Duration Side */}
                <div className={`pl-20 md:pl-0 pt-2 ${idx % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-2 md:pl-16 md:text-left'}`}>
                  <motion.div 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     className="inline-block"
                  >
                    <span className="text-4xl font-black text-white tracking-tighter block">{exp.duration.split(' – ')[0]}</span>
                    <span className="text-sm font-black text-primary-500 uppercase tracking-[0.3em]">{exp.duration.split(' – ')[1]}</span>
                  </motion.div>

                  <div className="mt-8 flex flex-wrap gap-2 justify-start md:justify-end">
                    {[".NET CORE", "REACT", "SQL SERVER"].map((skill, si) => (
                      <span key={si} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-black text-white/40 border border-white/5 tracking-widest">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:order-2 md:pl-0' : 'md:text-right md:order-1'}`}>
                  <div className="glass-premium p-10 rounded-[3.5rem] border-white/10 hover:border-primary-500/30 transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center text-white shadow-2xl group-hover:rotate-6 transition-transform">
                          <Building2 size={24} />
                       </div>
                       <div>
                          <h3 className="text-2xl font-black text-white tracking-tight leading-none">{exp.role}</h3>
                          <p className="text-sm font-bold text-slate-500 mt-2">{exp.company} • {exp.location}</p>
                       </div>
                    </div>

                    <div className="space-y-5">
                       {exp.highlights.slice(0, 3).map((item, hi) => (
                         <div key={hi} className="flex gap-4">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">{item}</p>
                         </div>
                       ))}
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                       <div className="flex -space-x-3">
                          {[1,2,3].map(i => (
                             <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center">
                                <span className="text-[10px] font-black text-primary-500">+{i}</span>
                             </div>
                          ))}
                       </div>
                       <a href="#" className="text-[10px] font-black text-white uppercase tracking-widest border-b border-white/10 pb-1 hover:border-primary-500 transition-colors">Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
