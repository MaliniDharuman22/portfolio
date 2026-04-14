import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Calendar } from 'lucide-react';
import certificateImg from '../assets/qspiders_certificate.jpg';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Elite Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 mb-16"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-600 mb-4 block">Official Attestation</span>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10">
              Validated <br /> <span className="text-primary-600">Mastery</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="glass-card p-10 rounded-[3rem] border-slate-200 shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Award size={120} />
               </div>
               
               <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black tracking-widest uppercase mb-8">
                  QSpiders Institute
               </div>

               <h3 className="text-4xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                  Full Stack Java <br /> Development
               </h3>

               <div className="space-y-6 mb-12">
                  {[
                    "Advanced J2EE Systems",
                    "Reactive Web Architectures",
                    "Enterprise Database Design"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-slate-600 font-bold tracking-tight">{item}</span>
                    </div>
                  ))}
               </div>

               <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                  <div className="flex flex-col">
                     <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">ID Reference</span>
                     <span className="text-xs font-bold text-slate-900">QSP-FS-2024-782</span>
                  </div>
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                     <CheckCircle2 size={24} className="text-green-500" />
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative group perspective-1000">
              {/* Dynamic Frame Glow */}
              <div className="absolute -inset-8 bg-primary-500/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative p-4 bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden transform group-hover:rotate-1 group-hover:scale-[1.03] transition-all duration-700">
                <img 
                  src={certificateImg} 
                  alt="Official Certification" 
                  className="w-full h-auto rounded-[3rem] shadow-inner"
                />
                
                {/* Visual Verification Badge */}
                <div className="absolute bottom-12 right-12 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-2 border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center mb-2">
                     <Award size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Verified Asset</span>
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
