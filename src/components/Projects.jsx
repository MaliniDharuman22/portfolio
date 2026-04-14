import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HR Management System (HRMS)",
      description: "A comprehensive solution to manage employee data, attendance, and payroll processes.",
      tech: [".NET Core", "React", "SQL Server", "JWT"],
      features: ["Employee Lifecycle Management", "Attendance Tracking", "Salary Processing"]
    },
    {
      title: "E-Commerce Platform",
      description: "Custom e-commerce solution for Harisilks & Crackers with seamless checkout.",
      tech: ["React", ".NET Web API", "SQL Server", "Payment Gateway"],
      features: ["Product Catalog", "User Cart", "Order Management"]
    },
    {
      title: "Safety Training Platform",
      description: "Internal training management system for safety certifications and tracking.",
      tech: ["React", ".NET Core", "EF Core", "MySQL"],
      features: ["Course Management", "Test Modules", "Certification Generation"]
    },
    {
      title: "Employee Reimbursement System",
      description: "Automated workflow for claim submission, approval, and tracking.",
      tech: [".NET Core", "React", "SQL Server"],
      features: ["Claim Submission", "Multi-level Approval", "Receipt Uploads"]
    },
    {
      title: "Alaigal Business App",
      description: "Communication application designed for business connectivity and networking.",
      tech: ["React.js", ".NET Web API", "SQL Server"],
      features: ["Messaging System", "Business Profiles", "Networking Feed"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary-600 mx-auto rounded-full"
          />
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            A selection of my recent work, ranging from business tools to consumer-facing platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card p-0 rounded-3xl overflow-hidden hover:border-primary-400 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center p-6 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-20 group-hover:opacity-40">
                  <Layers size={80} className="text-primary-600" />
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                   {project.tech.map((t, ti) => (
                     <span key={ti} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-primary-700 rounded-md uppercase tracking-wider shadow-sm">
                       {t}
                     </span>
                   ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed mb-auto">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Features</p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    {project.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary-500 rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <button className="flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">
                    <Github size={16} />
                    Source
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
