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
    <section id="skills" className="section-padding bg-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary-600 mx-auto rounded-full"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-8 rounded-3xl hover:border-primary-300 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 bg-white text-slate-600 text-sm font-medium rounded-lg border border-slate-100 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
