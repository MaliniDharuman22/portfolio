import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Professional Course in Java & Web Tech",
      issuer: "JSpiders Training & Development Center",
      date: "May 2025",
      id: "JSP-25-3149",
      modules: ["Core Java", "J2EE", "SQL", "Web Technology", "Frameworks"],
      icon: <ShieldCheck size={32} className="text-primary-600" />
    },
    {
      title: "Oracle Database Programming",
      issuer: "Oracle",
      date: "2024",
      icon: <Database size={32} className="text-orange-600" />
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Certifications
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col gap-6 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{cert.title}</h3>
                  <p className="text-primary-600 font-semibold flex items-center gap-2">
                     <Award size={16} />
                     {cert.issuer}
                  </p>
                  {cert.date && <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-wider">{cert.date}</p>}
                </div>
              </div>

              {cert.modules && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {cert.modules.map((mod, mi) => (
                    <span key={mi} className="px-2 py-1 bg-white text-[10px] font-bold text-slate-500 rounded-md border border-slate-100 uppercase tracking-tighter">
                      {mod}
                    </span>
                  ))}
                </div>
              )}

              {cert.id && (
                <div className="mt-auto pt-4 text-[10px] text-slate-400 font-mono">
                  ID: {cert.id}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
