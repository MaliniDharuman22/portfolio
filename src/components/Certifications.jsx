import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Calendar } from 'lucide-react';
import certificateImg from '../assets/qspiders_certificate.jpg';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-bold tracking-wide uppercase">
              <Award size={18} />
              Professional Recognition
            </div>
            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
              Full Stack Java Development <span className="text-primary-600">Certified</span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Successfully completed the intensive Full Stack Developer course at **QSpiders Software Testing Training Institute**. 
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Advanced Java & J2EE",
                "Web Technologies (HTML, CSS, JS)",
                "Full Stack Architecture Principles",
                "Database Design & Management"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200">
              <div className="flex items-center gap-4 text-slate-500">
                <Calendar size={20} />
                <span className="font-medium">Issued: QSpiders Institute</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative group">
              {/* Image Frame Decor */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500 to-primary-600 rounded-[2.5rem] opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
              <div className="relative glass-card p-4 rounded-[2rem] shadow-2xl overflow-hidden border-2 border-white">
                <img 
                  src={certificateImg} 
                  alt="QSpiders Fullstack Course Completion Certificate" 
                  className="w-full h-auto rounded-2xl shadow-inner group-hover:scale-[1.02] transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur shadow-lg px-4 py-2 rounded-xl flex items-center gap-2 border border-slate-100">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
