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
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary-600 mx-auto rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Connector */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-100 md:left-1/2 md:-ml-0.5" />

              <div className="relative mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-[-36px] top-6 w-8 h-8 rounded-full border-4 border-white bg-primary-600 shadow-lg md:left-1/2 md:-ml-4" />

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Left Side (Empty on even, content on odd in standard multi-exp timelines) */}
                  <div className="hidden md:block text-right pr-12 pt-6">
                     <span className="text-primary-600 font-bold text-xl">{exp.duration}</span>
                  </div>

                  {/* Right Side / Box */}
                  <div className="glass-card p-8 rounded-3xl border-l-4 border-l-primary-600 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary-600 font-semibold mt-1">
                          <Building2 size={18} />
                          <span>{exp.company}, {exp.location}</span>
                        </div>
                      </div>
                      <div className="md:hidden flex items-center gap-2 text-slate-500 bg-slate-100 px-3 py-1 rounded-full text-sm">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {exp.highlights.map((item, iIdx) => (
                        <li key={iIdx} className="flex gap-3 text-slate-600">
                          <CheckCircle2 size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
