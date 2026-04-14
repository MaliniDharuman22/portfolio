import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import GithubIcon from 'lucide-react/dist/esm/icons/github';

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
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "A centralized system to manage business processes including inventory, sales, and accounts.",
      tech: [".NET Core", "React", "SQL Server", "RDLC Reports"],
      features: ["Inventory Tracking", "Sales & Purchase Modules", "Financial Statements"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
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
            A selection of my recent developer work, focusing on enterprise-grade solutions and modern web architectures.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group glass-card p-0 rounded-3xl overflow-hidden hover:border-primary-400 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full glow-on-hover"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-900/40 group-hover:scale-110 transition-all duration-700 blur-[2px]" />
                <div className="absolute inset-0 flex items-center justify-center p-6 transition-all duration-500 opacity-30 group-hover:opacity-60">
                  <Layers size={80} className="text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                   {project.tech.map((t, ti) => (
                     <span key={ti} className="px-2 py-1 bg-white/10 backdrop-blur-md text-[10px] font-black text-white rounded-md uppercase tracking-wider border border-white/10 shadow-xl">
                       {t}
                     </span>
                   ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed mb-auto font-medium">
                  {project.description}
                </p>

                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] mb-2 px-2 py-1 bg-primary-50 inline-block rounded-md">Key Features</p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    {project.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-1 flex-shrink-0" />
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-50 mt-auto">
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-600 hover:text-primary-700 transition-colors">
                    <ExternalLink size={14} />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors ml-auto">
                    <GithubIcon size={14} />
                    Source
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
