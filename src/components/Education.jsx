import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      college: "Valliammal College",
      year: "2024",
      score: "8.8 CGPA",
      location: "Chennai"
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      college: "Theivanai Ammal College",
      year: "2022",
      score: "7.5 CGPA",
      location: "Villupuram"
    }
  ];

  return (
    <section id="education" className="section-padding bg-white relative overflow-hidden">
      {/* Structural Decoration */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none">
         <GraduationCap size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10"
          >
            Academic <br /> <span className="text-primary-600">Foundation</span>
          </motion.h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Theoretical excellence meeting architectural precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative group p-12 rounded-[4rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] hover:scale-[1.02] transition-all duration-700"
            >
              <div className="absolute top-12 right-12 text-[5rem] font-black text-slate-200/50 leading-none group-hover:text-primary-500/10 transition-colors">
                 0{idx + 1}
              </div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black tracking-widest uppercase mb-8">
                  Class of {item.year}
                </div>

                <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
                   {item.degree}
                </h3>
                <p className="text-lg font-bold text-primary-600 mb-8 tracking-tight">{item.college}</p>

                <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400">
                       <MapPin size={18} />
                    </div>
                    <span className="text-sm font-black text-slate-500 uppercase tracking-widest">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 shadow-sm flex items-center justify-center text-primary-600">
                       <Award size={18} />
                    </div>
                    <span className="text-xl font-black text-slate-900 tracking-tighter">{item.score}</span>
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

export default Education;
