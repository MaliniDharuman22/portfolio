import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import GithubIcon from 'lucide-react/dist/esm/icons/github';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Cinematic Background Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-32">
          <div className="flex-1">
            <a href="#" className="text-5xl font-black text-white tracking-tighter mb-8 block">
              Malini<span className="text-primary-600">.</span>
            </a>
            <p className="text-2xl text-slate-500 font-medium leading-tight max-w-sm mb-12 tracking-tight">
              Architecting the next generation of enterprise digital experiences.
            </p>
            <div className="flex gap-6">
              {[
                { icon: <Github size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Mail size={20} />, href: "mailto:malini220402@gmail.com" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-12 h-12 rounded-[1rem] bg-white/5 text-slate-400 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-500 border border-white/5 hover:border-primary-500 hover:scale-110 active:scale-90 shadow-2xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-24 flex-1">
            <div>
              <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-10">Navigation</h4>
              <ul className="space-y-6">
                {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-lg font-bold text-slate-400 hover:text-white transition-all flex items-center gap-4 group"
                    >
                      <span className="w-0 group-hover:w-4 h-[2px] bg-primary-500 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-10">Contact</h4>
              <ul className="space-y-8">
                <li className="flex flex-col">
                  <span className="text-slate-600 text-[9px] font-black uppercase tracking-widest mb-2">Relay System</span>
                  <a href="mailto:malini220402@gmail.com" className="text-lg font-bold text-slate-400 hover:text-white transition-colors">malini220402@gmail.com</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-slate-600 text-[9px] font-black uppercase tracking-widest mb-2">Geo-Target</span>
                  <span className="text-lg font-bold text-slate-400">Chennai, Tamil Nadu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The BIG Typography Backdrop */}
        <div className="absolute -bottom-16 left-0 right-0 pointer-events-none select-none overflow-hidden h-64 -mx-10">
           <span className="text-[20vw] font-black text-white/[0.02] leading-none block text-center tracking-tighter transform translate-y-1/2">
             MALINI.D
           </span>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} Elite Portfolio System V2.0.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-slate-500 hover:text-white transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Ignite Ascent</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-500 transition-all duration-500 shadow-2xl">
              <ArrowUp size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
