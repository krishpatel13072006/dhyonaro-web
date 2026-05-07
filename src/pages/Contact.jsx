import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Plus, Minus, Instagram, Twitter, Linkedin, Globe } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import contactVisualImg from '../images/pramukh infratech main.avif';
import bottomPhonesImg from '../images/focused vision.jpg';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }}
      className={cn(
        "border-b border-[#172451]/5 last:border-0 transition-colors duration-300 rounded-2xl px-6",
        isOpen ? "bg-gray-50" : ""
      )}
    >
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-all duration-300"
      >
        <span className={cn(
          "text-lg md:text-xl font-heading font-black uppercase tracking-tight transition-colors duration-300",
          isOpen ? "text-[#172451]" : "text-[#172451] group-hover:text-blue-500"
        )}>
          {question}
        </span>
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300",
          isOpen ? "bg-[#172451] border-[#172451] text-white" : "border-[#172451]/10 text-[#172451] group-hover:border-blue-500 group-hover:text-blue-500"
        )}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-[#172451]/50 text-base leading-relaxed max-w-2xl font-sans">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      q: "What industrial sectors do you specialize in?",
      a: "Dhyanora Group specializes in strategic metal trading (ferrous and non-ferrous), authorized electronics retail, and large-scale industrial park development through Shreeji Infra."
    },
    {
      q: "How can we explore a business partnership?",
      a: "We are always looking for synergy. You can reach out via the form above or email us directly at partners@Dhyanora.com. Our strategic team reviews all proposals within 48 hours."
    },
    {
      q: "Where are your primary industrial parks located?",
      a: "Our flagship assets, like the Mahantam Industrial Park, are located in the Sanand industrial corridor, providing strategic connectivity to major logistics hubs in Gujarat."
    },
    {
      q: "Do you provide global sourcing services?",
      a: "Yes, Pramukh Import Export leverages a vast international network to source high-grade industrial materials for manufacturers across India and beyond."
    }
  ];

  const socialLinks = [
    { Icon: Instagram, link: '#', color: '#E4405F', name: 'Instagram' },
    { Icon: Twitter, link: '#', color: '#1DA1F2', name: 'Twitter' },
    { Icon: Linkedin, link: '#', color: '#0077B5', name: 'LinkedIn' },
    { Icon: Globe, link: '#', color: '#172451', name: 'Website' },
  ];

  return (
    <>
      <SEO title="Contact Us | Dhyanora Group" description="Get in touch with Dhyanora Group for business partnerships, industrial inquiries, and strategic collaborations." />
      
      <main className="bg-white text-[#172451] overflow-hidden">
        
        {/* ════ HERO SECTION ════ */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
          {/* Subtle Background Glows for White Theme */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#172451]/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#172451]/5 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-start">
              
              {/* Left Column: Text & Image */}
              <div className="lg:col-span-7 space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-7xl font-heading font-black uppercase leading-[0.9] tracking-tighter mb-8 italic text-[#172451]">
                    Let's Talk About <br />
                    <span className="text-[#fad77e]">Strategic Growth</span>
                  </h1>
                  <p className="text-lg md:text-xl text-[#172451]/40 max-w-lg font-sans leading-relaxed font-medium">
                    Whether you're exploring partnerships, industrial space, or global sourcing, our team is ready to help you scale.
                  </p>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative aspect-video lg:aspect-auto lg:h-[450px] rounded-[3rem] overflow-hidden border border-[#172451]/5 group shadow-2xl"
                >
                  <img src={contactVisualImg} alt="Dhyanora Operations" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                  
                  {/* Floating Social Icons with REAL COLORS */}
                  <div className="absolute left-6 bottom-8 flex flex-col gap-4">
                    {socialLinks.map(({ Icon, link, color }, i) => (
                      <motion.a
                        key={i}
                        href={link}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-100 group/social"
                      >
                        <Icon size={20} style={{ color: color }} className="transition-transform duration-300 group-hover/social:scale-110" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Form (White Theme) */}
              <div className="lg:col-span-5 relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-10"
                >
                  <form className="space-y-8">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#172451]/30 ml-1">Full Name</label>
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="w-full bg-gray-50 border border-[#172451]/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451] placeholder:text-[#172451]/20" />
                        <input type="text" placeholder="Last Name" className="w-full bg-gray-50 border border-[#172451]/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451] placeholder:text-[#172451]/20" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#172451]/30 ml-1">Email Address</label>
                      <input type="email" placeholder="email@company.com" className="w-full bg-gray-50 border border-[#172451]/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451] placeholder:text-[#172451]/20" />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#172451]/30 ml-1">Phone Number</label>
                      <div className="flex gap-4">
                        <select className="w-28 bg-gray-50 border border-[#172451]/5 rounded-2xl px-3 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451]">
                          <option>🇮🇳 +91</option>
                        </select>
                        <input type="tel" placeholder="Mobile Number" className="flex-1 bg-gray-50 border border-[#172451]/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451] placeholder:text-[#172451]/20" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#172451]/30 ml-1">Sector of Interest</label>
                      <select className="w-full bg-gray-50 border border-[#172451]/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451] appearance-none cursor-pointer">
                        <option>General Inquiry</option>
                        <option>Industrial Space (Shreeji Infra)</option>
                        <option>Metal Trading (Pramukh)</option>
                        <option>Tech Venture</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#172451]/30 ml-1">Your Message</label>
                      <textarea rows="4" placeholder="How can we help your business?" className="w-full bg-gray-50 border border-[#172451]/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451] placeholder:text-[#172451]/20 resize-none" />
                    </div>

                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="consent" className="w-4 h-4 rounded border-[#172451]/10 text-[#172451] focus:ring-[#172451]" />
                      <label htmlFor="consent" className="text-[11px] text-[#172451]/40 font-bold tracking-wide">I agree to be contacted regarding this inquiry.</label>
                    </div>

                    <div className="flex justify-start pt-4">
                      <button className="px-10 py-4 bg-[#172451] text-white rounded-full font-heading font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl transition-all flex items-center gap-5 group hover:bg-[#172451] hover:scale-105 active:scale-95">
                        Send Message
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#172451]">
                          <Send size={14} className="ml-0.5" />
                        </div>
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════ DETAILS / FAQ SECTION ════ */}
        <section className="py-24 md:py-36 px-6 relative bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-heading font-black uppercase mb-6 italic text-[#172451] leading-tight">
                  The Details <br />
                  <span className="text-[#172451]">Behind Dhyanora</span>
                </h2>
                <p className="text-[#172451]/30 font-heading tracking-widest uppercase text-[10px] font-black tracking-[0.4em]">A closer look at the questions that matter most.</p>
              </motion.div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFAQ === index}
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ════ BOTTOM VISUAL SECTION ════ */}
        <section className="relative pt-24 pb-48 px-6">
          <div className="relative max-w-5xl mx-auto px-4">
             <motion.div
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
               className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 min-h-[400px] md:min-h-[600px] flex items-center justify-center"
             >
                <img 
                  src={bottomPhonesImg} 
                  alt="Dhyanora Ecosystem" 
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172451] via-[#172451]/40 to-transparent opacity-90" />
                
                {/* Content Overlaid on Image */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center p-8 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="space-y-6 md:space-y-10"
                  >
                    <h2 className="text-4xl md:text-8xl font-heading font-black uppercase leading-[0.9] italic text-white tracking-tighter drop-shadow-2xl">
                      See Our Vision.<br />
                      <span className="text-[#fad77e]">Shape Your Future.</span>
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto font-sans text-base md:text-2xl font-medium leading-relaxed drop-shadow-lg">
                      Our infrastructure and strategic frameworks are built for scale, efficiency, and unwavering ethics.
                    </p>
                    <div className="pt-6">
                      <Link to="/companies" className="px-12 py-6 bg-[#fad77e] text-[#172451] rounded-full font-heading font-black uppercase tracking-widest text-xs md:text-sm flex items-center gap-4 mx-auto hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(250,215,126,0.4)] w-fit">
                        Explore Companies
                        <Globe size={20} />
                      </Link>
                    </div>
                  </motion.div>
                </div>
             </motion.div>
             
             {/* Bottom Giant Text */}
             <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none overflow-hidden">
                <h3 className="text-[10vw] md:text-[14vw] font-heading font-black italic uppercase leading-none opacity-[0.03] whitespace-nowrap text-center text-[#172451] tracking-[0.2em]">
                  Dhyanora
                </h3>
             </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Contact;


