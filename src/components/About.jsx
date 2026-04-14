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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-800">
              Passionate Developer building high-performance web solutions
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              With 1.8 years of dedicated experience as a Full Stack Developer, I specialize in crafting robust and scalable web applications. My core expertise lies in the dynamic combination of **.NET Core Web API** and **React.js**.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I am committed to writing clean, maintainable, and performance-driven code. My goal is always to deliver modern digital experiences that not only look great but function flawlessly under heavy use.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="aspect-square rounded-3xl bg-primary-100 p-8 flex flex-col justify-end">
                <span className="text-4xl font-bold text-primary-600">5+</span>
                <span className="text-slate-600 font-medium tracking-tight">Client Projects Delivered</span>
              </div>
              <div className="aspect-[4/5] rounded-3xl bg-slate-50 p-8 border border-slate-100 flex flex-col justify-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-4">
                   <Zap className="text-amber-500" fill="currentColor" />
                </div>
                <h4 className="font-bold text-slate-800 mb-1">Fast Performance</h4>
                <p className="text-sm text-slate-500 italic">30% faster API response</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-3xl border border-slate-200 p-8 flex flex-col justify-center items-center text-center">
                 <div className="text-5xl mb-4">📍</div>
                 <h4 className="font-bold text-slate-800">Location</h4>
                 <p className="text-slate-500">Chennai, IN</p>
              </div>
              <div className="aspect-square rounded-3xl bg-primary-600 p-8 text-white">
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest mb-2">Focus</p>
                <p className="text-xl font-bold leading-tight">Scalable & Performance-driven Code</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
