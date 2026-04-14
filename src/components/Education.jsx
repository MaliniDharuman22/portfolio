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
    <section className="section-padding bg-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border-l-4 border-l-primary-600 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                     <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.degree}</h3>
                  <p className="text-lg font-medium text-slate-600 mb-4">{item.college}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1 font-bold text-slate-700">
                      <Award size={16} className="text-amber-500" />
                      {item.score}
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

export default Education;
