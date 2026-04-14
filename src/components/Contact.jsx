import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    // These should be replaced with actual user credentials from EmailJS dashboard
    const SERVICE_ID = "YOUR_SERVICE_ID"; 
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    if (SERVICE_ID === "YOUR_SERVICE_ID") {
      // Mock success for demonstration if credentials aren't set yet
      setTimeout(() => {
        setStatus('success');
        setTimeout(() => setStatus('idle'), 5000);
      }, 2000);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-primary-900/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-950/40 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-400 mb-8 block"
            >
              The Final Move
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12">
              Ready to <br /> <span className="text-primary-500">Upgrade</span> <br /> your team?
            </h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-md mb-16">
              I'm currently looking for high-impact roles. If you have a challenge that needs a Full Stack Architect, let's talk.
            </p>

            <div className="space-y-12">
              {[
                { icon: <Mail size={24} />, title: "Digital Pipeline", info: "malini220402@gmail.com" },
                { icon: <MapPin size={24} />, title: "Base of Ops", info: "Chennai, India" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.title}</p>
                    <p className="text-2xl font-black text-white tracking-tight">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-premium p-12 md:p-16 rounded-[4rem] border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                      <CheckCircle size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">Message Received!</h3>
                    <p className="text-slate-400 font-medium tracking-tight">I'll get back to you across the digital wire shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-10"
                  >
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">Identification</label>
                      <input 
                        type="text" 
                        name="from_name"
                        required
                        placeholder="Full Name"
                        className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-xl text-white focus:border-primary-500 outline-none transition-all placeholder:text-white/20"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">Relay Address</label>
                      <input 
                        type="email" 
                        name="reply_to"
                        required
                        placeholder="Email Address"
                        className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-xl text-white focus:border-primary-500 outline-none transition-all placeholder:text-white/20"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">The Mission</label>
                      <textarea 
                        rows={3} 
                        name="message"
                        required
                        placeholder="Tell me about the project..."
                        className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-xl text-white focus:border-primary-500 outline-none transition-all resize-none placeholder:text-white/20"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full py-6 rounded-[2rem] bg-gradient-to-r from-primary-600 to-indigo-600 text-white font-black uppercase tracking-[0.3em] text-xs shadow-2xl hover:scale-[1.02] transition-all active:scale-95 group flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          Processing... <Loader2 className="animate-spin" size={18} />
                        </>
                      ) : (
                        <>
                          Ignite Sync <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-rose-500 font-bold text-xs justify-center pt-4">
                        <AlertCircle size={14} />
                        Transmission failed. Please try again.
                      </div>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Aesthetic Glow */}
            <div className="absolute -inset-10 bg-primary-500/10 blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
