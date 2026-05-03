import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';

const Contact = () => {
  return (
    <>
      <SEO title="Get in Touch | Dhyanora Group" />
      <main className="relative min-h-screen bg-white">
        
        {/* CLEAN CONTACT HERO - White Background */}
        <section className="relative z-20 pt-40 pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-navy font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-40">Get in Touch</span>
              <h1 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase italic mb-8 leading-[0.9]">
                Let's Build <br /> <span className="text-gold-dark">Something.</span>
              </h1>
              <p className="text-xl text-navy/60 leading-relaxed font-bold mb-16 max-w-md">
                Have a question about our services or want to explore a partnership? We're here to help you grow.
              </p>

              <div className="space-y-10">
                {[
                  { icon: <Phone />, label: "Call Us", val: "+91 98765 43210", desc: "Mon-Sat, 9am - 7pm" },
                  { icon: <Mail />, label: "Email Us", val: "info@dhyanora.com", desc: "Online Support 24/7" },
                  { icon: <MapPin />, label: "Visit Us", val: "Ahmedabad, Gujarat", desc: "Dhyanora Group HQ" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-8 items-start group"
                  >
                    <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-gold shadow-2xl group-hover:bg-gold-dark group-hover:text-navy transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-navy/30 mb-2">{item.label}</div>
                      <div className="text-2xl font-heading font-black text-navy uppercase italic mb-1 transition-colors group-hover:text-gold-dark">{item.val}</div>
                      <div className="text-sm font-bold text-navy/40">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-off-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-navy/5 relative z-10"
            >
              <h3 className="text-3xl font-heading font-black text-navy uppercase mb-10 italic">Send a <span className="text-gold-dark">Message.</span></h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy/40 ml-4">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-8 py-5 bg-white border-0 rounded-3xl focus:ring-2 focus:ring-gold-dark transition-all text-navy font-bold shadow-sm" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy/40 ml-4">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-8 py-5 bg-white border-0 rounded-3xl focus:ring-2 focus:ring-gold-dark transition-all text-navy font-bold shadow-sm" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy/40 ml-4">Subject</label>
                  <select className="w-full px-8 py-5 bg-white border-0 rounded-3xl focus:ring-2 focus:ring-gold-dark transition-all text-navy font-bold appearance-none shadow-sm">
                    <option>General Inquiry</option>
                    <option>Business Partnership</option>
                    <option>Product Support</option>
                    <option>Career Opportunities</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy/40 ml-4">Your Message</label>
                  <textarea rows="6" placeholder="How can we help you?" className="w-full px-8 py-5 bg-white border-0 rounded-3xl focus:ring-2 focus:ring-gold-dark transition-all text-navy font-bold resize-none shadow-sm"></textarea>
                </div>
                <button className="w-full py-6 bg-navy text-white rounded-3xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-gold-dark hover:text-navy transition-all flex items-center justify-center gap-4 text-sm">
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6 bg-white border-t border-navy/5">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
              <div className="flex-1">
                 <span className="text-navy font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-30">Questions</span>
                 <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase italic mb-8 leading-tight">Common <br /><span className="text-gold-dark">Inquiries.</span></h2>
                 <p className="text-xl text-navy/40 font-bold mb-12 leading-relaxed">Find quick answers to common questions about Dhyanora Group operations and partnerships.</p>
                 <div className="p-10 bg-off-white rounded-[3rem] shadow-xl border border-navy/5 flex items-center gap-8">
                    <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-gold shadow-xl"><MessageSquare size={32} /></div>
                    <div>
                       <div className="font-black text-navy text-lg uppercase italic mb-1">Support Desk</div>
                       <div className="text-navy/40 font-bold text-[10px] uppercase tracking-widest">Avg response time: 2 hours</div>
                    </div>
                 </div>
              </div>
              <div className="flex-[1.5] space-y-6">
                 {[
                   { q: "What is Dhyanora Group?", a: "Dhyanora is a diversified conglomerate based in Ahmedabad, managing businesses across metal trading, retail, and infrastructure." },
                   { q: "How can I partner with you?", a: "Please use the contact form above to reach out to our business development team with your proposal." },
                   { q: "Where are you located?", a: "Our primary operations are centered in Ahmedabad, with a footprint across major industrial zones in Gujarat." },
                   { q: "Do you offer industrial consulting?", a: "While we operate our own parks, we do offer strategic procurement and supply chain consulting for industrial clients." }
                 ].map((faq, i) => (
                    <div key={i} className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-navy/5 hover:border-gold-dark transition-all group">
                       <h4 className="text-xl font-heading font-black text-navy uppercase mb-4 tracking-wide group-hover:text-gold-dark transition-colors">{faq.q}</h4>
                       <p className="text-base text-navy/50 font-bold leading-relaxed">{faq.a}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>
        <FooterCTA />

      </main>
    </>
  );
};

export default Contact;
