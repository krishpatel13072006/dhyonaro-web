import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import MovingMesh from '../components/MovingMesh';

const Contact = () => {
  return (
    <>
      <SEO title="Get in Touch" />
      <main className="relative">
        
        {/* PREMIUM ANIMATED HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-navy pt-[165px]">
          <MovingMesh />
          
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading font-black uppercase leading-[1] text-cream mb-8" style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}>
                Let's <span className="text-gold">Connect.</span>
              </h1>
              <p className="text-xl md:text-3xl text-gray-light/60 leading-relaxed max-w-3xl mx-auto font-medium">
                Have a project in mind or want to learn more about our services? Our team is ready to assist you.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-navy to-transparent z-10" />
        </section>

        <section className="px-6 py-20 bg-navy relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              {[
                { icon: <Mail size={24} />, title: "Email Us", desc: "For general inquiries and partnerships.", detail: "contact@dhyanora.com", link: "mailto:contact@dhyanora.com" },
                { icon: <Phone size={24} />, title: "Call Us", desc: "Monday - Saturday, 9am - 6pm IST.", detail: "+91 [PHONE NUMBER]", link: "tel:+910000000000" },
                { icon: <MapPin size={24} />, title: "Visit Us", desc: "Our corporate headquarters.", detail: "Ahmedabad, Gujarat, India", link: "#" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card group p-10 flex gap-8 items-start border-white/5 hover:border-gold/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold shrink-0 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-cream mb-2 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-gray-light/40 mb-4">{item.desc}</p>
                    {item.link !== "#" ? (
                      <a href={item.link} className="text-gold font-black text-lg hover:underline transition-all">{item.detail}</a>
                    ) : (
                      <p className="text-cream/80 text-lg leading-relaxed">{item.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 border-gold/20 shadow-2xl relative overflow-hidden"
            >
              <h2 className="text-4xl mb-10 font-heading font-black text-cream uppercase">Send a Message</h2>
              <form className="flex flex-col gap-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-xs text-gold uppercase tracking-[0.2em] font-bold">Full Name</label>
                    <input type="text" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-cream focus:border-gold outline-none transition-all placeholder:text-white/10" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xs text-gold uppercase tracking-[0.2em] font-bold">Email Address</label>
                    <input type="email" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-cream focus:border-gold outline-none transition-all placeholder:text-white/10" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-xs text-gold uppercase tracking-[0.2em] font-bold">Subject</label>
                  <div className="relative">
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-cream focus:border-gold outline-none transition-all appearance-none cursor-pointer">
                      <option className="bg-navy">General Inquiry</option>
                      <option className="bg-navy">Metal Scrap Trading</option>
                      <option className="bg-navy">Industrial Park / Infrastructure</option>
                      <option className="bg-navy">Electronics Retail</option>
                      <option className="bg-navy">Construction Materials</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gold/50">▼</div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs text-gold uppercase tracking-[0.2em] font-bold">Your Message</label>
                  <textarea rows="5" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-cream focus:border-gold outline-none transition-all placeholder:text-white/10" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="group btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(242,201,76,0.3)]">
                  Send Message <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
            </motion.div>
          </div>
        </section>

        <div className="h-32 bg-navy" />
      </main>
    </>
  );
};

export default Contact;
