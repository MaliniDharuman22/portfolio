import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Users, Settings2, Clock } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <TrendingDown size={32} className="text-emerald-600" />,
      title: "Reduced API latency by 30%",
      description: "Optimized backend queries and implemented intelligent caching mechanisms."
    },
    {
      icon: <Users size={32} className="text-blue-600" />,
      title: "Delivered 5+ Client Projects",
      description: "Successfully managed and shipped multiple production-grade applications."
    },
    {
      icon: <Settings2 size={32} className="text-orange-600" />,
      title: "Automated HR Workflows",
      description: "Achieved a 40% efficiency gain by digitizing and automating manual HR tasks."
    },
    {
      icon: <Clock size={32} className="text-indigo-600" />,
      title: "Zero Downtime Deployments",
      description: "Handled production issues and updates with 100% availability for end-users."
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
            Key Achievements
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-primary-200 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
