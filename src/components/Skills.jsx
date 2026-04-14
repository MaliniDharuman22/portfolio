import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Settings, Terminal } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <Code2 className="text-primary-600" />,
      skills: ["React.js", "JavaScript (ES6+)", "Redux", "HTML5", "CSS3 / Tailwind"]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-primary-600" />,
      skills: ["C#", ".NET Core Web API", "Entity Framework", "RESTful APIs", "JWT Auth"]
    },
    {
      title: "Database Management",
      icon: <Database className="text-primary-600" />,
      skills: ["SQL Server", "MySQL", "Database Design", "Stored Procedures"]
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="text-primary-600" />,
      skills: ["Git / GitHub", "Postman", "Visual Studio", "VS Code", "IIS Deployment"]
    },
    {
      title: "Software Concepts",
      icon: <Terminal className="text-primary-600" />,
      skills: ["REST APIs", "JWT Auth", "RBAC", "Clean Architecture", "Code Refactoring"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding bg-[#fafafa] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary-100 rounded-full blur-[120px] opacity-40" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter"
            >
              Technical <br /> <span className="text-primary-600">Arsenals</span>
            </motion.h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Leveraging a diverse technology stack to build high-performance, secure, and user-centric enterprise solutions.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden md:flex flex-col items-end"
          >
            <span className="text-7xl font-black text-slate-100 uppercase leading-none">Power</span>
            <span className="text-primary-600 font-black tracking-widest text-sm uppercase -mt-2 pr-2">The Stack</span>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Main Large Bento - Frontend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white rounded-[3rem] p-10 shadow-2xl shadow-primary-500/5 group hover:shadow-primary-500/10 transition-all border border-slate-50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-primary-100 transition-colors" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-primary-500/20 group-hover:rotate-6 transition-transform">
                <Code2 size={48} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">{skillGroups[0].title}</h3>
                <p className="text-slate-400 font-medium mb-6">Reactive UI Design & State Management</p>
                <div className="flex flex-wrap gap-2">
                  {skillGroups[0].skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-4 py-2 bg-slate-50 text-slate-600 font-bold rounded-2xl border border-slate-100 hover:border-primary-400 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vertical Bento - Software Concepts */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent" />
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Terminal size={40} className="text-primary-400" />
              </div>
              <h3 className="text-2xl font-black mb-6">{skillGroups[4].title}</h3>
              <div className="space-y-4 w-full">
                {skillGroups[4].skills.map((skill, sIdx) => (
                  <div key={sIdx} className="w-full py-3 bg-white/5 rounded-2xl border border-white/5 font-bold text-sm hover:bg-white/10 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Medium Bento - Backend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 bg-white rounded-[3rem] p-10 shadow-2xl shadow-primary-500/5 group hover:shadow-primary-500/10 transition-all border border-slate-50 relative"
          >
             <div className="w-20 h-20 rounded-[1.8rem] bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shadow-inner ring-1 ring-blue-100">
                <Server size={40} />
             </div>
             <h3 className="text-2xl font-black text-slate-900 mb-6">{skillGroups[1].title}</h3>
             <div className="grid grid-cols-2 gap-3">
                {skillGroups[1].skills.map((skill, sIdx) => (
                  <div key={sIdx} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-all">
                    {skill}
                  </div>
                ))}
             </div>
          </motion.div>

          {/* Medium Bento - Database */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-7 bg-primary-600 rounded-[3rem] p-10 text-white shadow-2xl group flex flex-col md:flex-row items-center gap-10"
          >
             <div className="w-32 h-32 rounded-[2.5rem] bg-white text-primary-600 flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:rotate-12 transition-transform">
                <Database size={64} />
             </div>
             <div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">{skillGroups[2].title}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroups[2].skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 font-bold text-sm tracking-wide">
                      {skill}
                    </span>
                  ))}
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
