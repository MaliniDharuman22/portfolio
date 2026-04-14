import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight, Code2, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HR Management System (HRMS)",
      description: "A comprehensive solution to manage employee data, attendance, and payroll processes.",
      tech: [".NET Core", "React", "SQL Server"],
      features: ["Employee Lifecycle", "Attendance Tracking", "Payroll Engine"]
    },
    {
      title: "E-Commerce Platform",
      description: "Custom e-commerce solution for Harisilks & Crackers with seamless checkout.",
      tech: ["React", ".NET Web API", "SQL Server"],
      features: ["Product Catalog", "Cart System", "Order Management"]
    },
    {
      title: "Safety Training Platform",
      description: "Internal training management system for safety certifications and tracking.",
      tech: ["React", ".NET Core", "EF Core"],
      features: ["Course Management", "Test Modules", "Auto-Certification"]
    },
    {
      title: "Employee Reimbursement",
      description: "Automated workflow for claim submission, approval, and tracking.",
      tech: [".NET Core", "React", "SQL Server"],
      features: ["Claim Submission", "Multi-level Approval", "Receipt OCR"]
    },
    {
      title: "Alaigal Business App",
      description: "Communication application designed for business connectivity and networking.",
      tech: ["React.js", ".NET Web API", "SQL Server"],
      features: ["Messaging System", "Business Profiles", "Networking Feed"]
    },
    {
      title: "Enterprise ERP",
      description: "A centralized system to manage business processes including inventory, sales, and accounts.",
      tech: [".NET Core", "React", "SQL Server"],
      features: ["Inventory Mastery", "Sales/Purchase", "Financial Reports"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
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
              className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter"
            >
              Featured <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Creations</span>
            </motion.h2>
          </div>
          <div className="hidden lg:block">
            <div className="p-6 bg-white rounded-[2rem] shadow-2xl border border-slate-50 flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl">
                <Code2 size={28} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Architecture</p>
                <p className="text-lg font-black text-slate-900">100% Reliability</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 bg-white rounded-[4rem] p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-50 transition-all duration-700 hover:-translate-y-4 group-hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)]">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary-50 to-indigo-50 rounded-full blur-[100px] -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-125" />
                
                <div className="relative z-20">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-20 h-20 rounded-[2.2rem] bg-slate-900 flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                      <ExternalLink size={32} />
                    </div>
                    <div className="flex flex-col items-end gap-2">
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
                  <p className="text-lg text-slate-500 font-medium mb-12 line-clamp-2 leading-relaxed h-[3.5rem]">
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
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Industrial Standard</div>
                    <a 
                      href="#" 
                      className="group/btn flex items-center gap-3 text-primary-600 font-black uppercase tracking-widest text-xs"
                    >
                      Case Study
                      <div className="p-2 bg-primary-50 rounded-full group-hover/btn:bg-primary-600 group-hover/btn:text-white transition-all">
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
