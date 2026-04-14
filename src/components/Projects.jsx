import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Code2, Cpu } from 'lucide-react';
import mockupImg from '../assets/premium_saas_dashboard_mockup.png';

const Projects = () => {
  const projects = [
    {
      title: "HR Management System",
      description: "Advanced enterprise-grade solution for employee lifecycles and automated payroll engines.",
      image: mockupImg,
      tech: [".NET Core", "React", "SQL Server"],
      features: ["Employee Lifecycle", "Attendance Tracking", "Payroll Engine"]
    },
    {
      title: "E-Commerce Elite",
      description: "Custom e-commerce solution with high-conversion checkout flows and inventory mastery.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
      tech: ["React", "Web API", "SQL Server"],
      features: ["Product Catalog", "Cart System", "Order Management"]
    },
    // ... rest same but with images if possible
    {
      title: "Safety Shield",
      description: "Internal compliance and certification management system with automated tracking.",
      tech: ["React", ".NET Core", "EF Core"],
      features: ["Course Management", "Test Modules", "Auto-Certification"]
    },
    {
       title: "FinTrack Pro",
       description: "Automated reimbursement workflow with multi-level approval hierarchies.",
       tech: [".NET Core", "React", "SQL Server"],
       features: ["Claim Submission", "Approval Flow", "Receipt Intelligence"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 font-black text-[10px] uppercase tracking-widest mb-6 border border-primary-100"
            >
              <Cpu size={12} />
              Production Ready
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none"
            >
              Featured <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Creations</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 bg-white rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-50 transition-all duration-700 hover:-translate-y-4">
                
                {/* Image Section */}
                <div className="h-[300px] overflow-hidden relative">
                   {project.image ? (
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                   ) : (
                     <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                        <Code2 size={48} className="text-white/10" />
                     </div>
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-12 md:p-16">
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex flex-wrap gap-2">
                       {project.tech.map((t, i) => (
                         <span key={i} className="px-5 py-1.5 bg-slate-50 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-100">
                           {t}
                         </span>
                       ))}
                    </div>
                  </div>

                  <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-14">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-primary-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                        <span className="text-slate-700 font-bold text-sm tracking-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-10 border-t border-slate-100">
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Module V2.1</div>
                    <a 
                      href="#" 
                      className="group/btn flex items-center gap-3 text-primary-600 font-black uppercase tracking-widest text-xs"
                    >
                      Case Study
                      <div className="p-3 bg-primary-50 rounded-full group-hover/btn:bg-primary-600 group-hover/btn:text-white transition-all">
                        <ChevronRight size={18} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Ultra-luxe background light */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-primary-400/10 to-indigo-500/10 rounded-[6rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
