import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send } from 'lucide-react';
import MovingMesh from '../components/MovingMesh';

const Contact = () => {
  return (
    <>
      <SEO title="Get in Touch" />
      <main className="relative min-h-screen bg-navy overflow-hidden selection:bg-gold selection:text-navy">
        <MovingMesh />
        
        <section className="relative z-20 pt-32 pb-24 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* LEFT: Text & Details (Minimal Typography, NO BOXES) */}
          <div className="flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center mb-6 px-4 py-1 text-[10px] tracking-widest rounded-full border border-gold/30 text-gold uppercase font-bold w-fit"
            >
              Get in touch
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-cream leading-tight uppercase mb-8 italic"
            >
              Let's Build <br className="hidden md:block"/>
              <span className="text-gold">Something</span> <br className="hidden md:block"/>
              Great.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-light/60 text-sm md:text-base leading-relaxed max-w-md mb-12 text-justify"
            >
              Have a project in mind or want to learn more about our services? Our team is ready to assist you.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8 mt-auto"
            >
              <div>
                <p className="text-[10px] uppercase font-bold text-gold tracking-widest mb-2">WhatsApp / Call</p>
                <a href="tel:+910000000000" className="text-xl md:text-2xl font-medium text-cream hover:text-gold transition-colors flex items-center gap-2 w-fit">
                  +91 [PHONE NUMBER] <ArrowUpRight size={18} />
                </a>
                <p className="text-xs text-gray-light/40 mt-1">Monday - Saturday, 9am - 6pm IST</p>
              </div>
              
              <div>
                <p className="text-[10px] uppercase font-bold text-gold tracking-widest mb-2">Email</p>
                <a href="mailto:contact@dhyanora.com" className="text-xl md:text-2xl font-medium text-cream hover:text-gold transition-colors flex items-center gap-2 w-fit">
                  contact@dhyanora.com <ArrowUpRight size={18} />
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase font-bold text-gold tracking-widest mb-2">Headquarters</p>
                <p className="text-base md:text-lg text-cream/80">
                  Dhyanora Group <br/>
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 md:p-12 rounded-[2rem] border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-gold/10"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold ml-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/5 text-cream placeholder:text-gray-light/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold ml-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/5 text-cream placeholder:text-gray-light/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold ml-2">Subject</label>
                <div className="relative">
                  <select className="w-full p-4 rounded-xl bg-white/5 border border-white/5 text-cream focus:outline-none focus:border-gold/50 transition-colors text-sm appearance-none cursor-pointer">
                    <option className="bg-navy">General Inquiry</option>
                    <option className="bg-navy">Metal Scrap Trading</option>
                    <option className="bg-navy">Industrial Park / Infrastructure</option>
                    <option className="bg-navy">Electronics Retail</option>
                    <option className="bg-navy">Construction Materials</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gold/50">▼</div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold ml-2">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/5 text-cream placeholder:text-gray-light/30 focus:outline-none focus:border-gold/50 transition-colors text-sm resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full mt-4 px-6 py-4 rounded-xl btn-primary text-navy font-black text-xs md:text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(242,201,76,0.2)] hover:shadow-[0_0_40px_rgba(242,201,76,0.4)] flex items-center justify-center gap-2 group/btn"
              >
                Send Message <Send size={16} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </section>
      </main>
    </>
  );
};

export default Contact;
