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
    <section id="achievements" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* HUD-like backdrop lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/20" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/20" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-500 mb-6 block"
          >
            Performance Metrics
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
             Impact <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-500">Quantified</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="glass-premium p-10 rounded-[3rem] border-white/5 hover:border-primary-500/50 transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-10 text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-2xl">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter leading-tight">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.description}</p>

              {/* Technical Indicator */}
              <div className="mt-10 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                 <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary-600 to-indigo-600"
                 />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
