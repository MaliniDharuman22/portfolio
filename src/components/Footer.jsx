import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-10 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-bold text-white tracking-tight mb-6 block">
              Malini<span className="text-primary-400">.D</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Full Stack Developer specializing in .NET Core and React.js. Building scalable, performance-driven web applications for modern businesses.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Mail size={20} />, href: "mailto:malini220402@gmail.com" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 border border-slate-700 hover:border-primary-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-primary-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Detail</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 flex flex-col">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:malini220402@gmail.com" className="hover:text-primary-400 transition-colors">malini220402@gmail.com</a>
              </li>
              <li className="text-slate-400 flex flex-col">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Phone</span>
                <a href="tel:+916383726649" className="hover:text-primary-400 transition-colors">+91 6383726649</a>
              </li>
              <li className="text-slate-400 flex flex-col">
                 <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Location</span>
                 <span>Chennai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Malini D. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Back to top</span>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary-600 transition-all">
              <ArrowUp size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
