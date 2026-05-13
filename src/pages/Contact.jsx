import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Plus, Minus, Instagram, Twitter, Linkedin, Globe, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import BouncingCircles from '../components/BouncingCircles';

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
          "text-lg md:text-xl font-heading font-black uppercase transition-colors duration-300",
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

const CompanyCard = ({ name, address, tel, internalLink, externalLink }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full group"
  >
    <div className="flex-1">
      <h3 className="text-xl md:text-2xl font-heading font-black text-[#172451] uppercase mb-6 leading-tight group-hover:text-blue-600 transition-colors">
        {name}
      </h3>
      <div className="space-y-4 text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-8">
        <div className="flex gap-3">
          <MapPin size={18} className="text-blue-600 shrink-0 mt-1" />
          <p>{address}</p>
        </div>
        {tel && (
          <div className="flex gap-3">
            <Phone size={18} className="text-blue-600 shrink-0 mt-0.5" />
            <p>{tel}</p>
          </div>
        )}
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-3 pt-8 mt-auto border-t border-gray-50">
      <Link 
        to={internalLink} 
        className="flex items-center justify-center gap-2 px-4 py-3 bg-[#172451] text-white rounded-xl text-[9px] font-black uppercase tracking-wider hover:bg-[#fad77e] hover:text-[#172451] transition-all duration-300 shadow-lg shadow-blue-900/10 hover:shadow-[#fad77e]/20"
      >
        View Details <ArrowRight size={12} />
      </Link>
      <a 
        href={externalLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-[#172451] text-[#172451] rounded-xl text-[9px] font-black uppercase tracking-wider hover:bg-[#172451] hover:text-white transition-all duration-300 shadow-sm"
      >
        Visit Website <Globe size={12} />
      </a>
    </div>
  </motion.div>
);

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

  const companies = [
    {
      name: "Pramukh Import Export & Brics Trading",
      address: "For: Scrap import-export inquiries, bulk material sourcing, and wholesale bricks trading.",
      tel: "+91 95106 63030",
      internalLink: "/companies/import-export",
      externalLink: "mailto:trade@dhyanora.com"
    },
    {
      name: "Shreeji Infra",
      address: "For: Commercial building projects, industrial estates, and real estate partnerships.",
      tel: "+91 95106 63030",
      internalLink: "/companies/shreeji-infra",
      externalLink: "mailto:infra@dhyanora.com"
    },
    {
      name: "Pramukh Techventure",
      address: "For: Authorized agency details, home appliances, and showroom inquiries.",
      tel: "+91 95106 63030",
      internalLink: "/companies/tech-venture",
      externalLink: "mailto:retail@dhyanora.com"
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
      <SEO 
        title="Contact Dhyanora Group | Reach Out to Our Business Hub" 
        description="Contact Dhyanora Group for business inquiries. Connect with our divisions: Pramukh Import Export, Shreeji Infra, Brics Trading, and Pramukh Techventure."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' }
        ]} 
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </Helmet>
      
      <main className="bg-white text-[#172451] overflow-hidden">
        
        {/* ════ HERO SECTION ════ */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#172451]/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#172451]/5 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-start">
              
              <div className="lg:col-span-7 space-y-12">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase leading-[1.2] mb-8 text-[#172451]">
                    Get in Touch With <br />
                    <span className="text-[#fad77e]">Dhyanora Group</span>
                  </h1>
                  <p className="text-lg md:text-xl text-[#172451]/40 max-w-lg font-sans leading-relaxed font-medium">
                    Whether you are looking for strategic business partnerships, global trade solutions, premium commercial real estate, or retail inquiries, our team is ready to assist you.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="relative aspect-video lg:aspect-auto lg:h-[450px] rounded-[3rem] overflow-hidden border border-[#172451]/5 group shadow-2xl">
                  <img src={contactVisualImg} alt="Dhyanora Group Strategic Operations and Industrial Management" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                  
                  <div className="absolute left-6 bottom-8 flex flex-row lg:flex-col gap-3 md:gap-4">
                    {socialLinks.map(({ Icon, link, color }, i) => (
                      <motion.a key={i} href={link} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-100 group/social">
                        <Icon style={{ color: color }} className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/social:scale-110" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-5 relative">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-10">
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-3xl border border-[#172451]/5">
                      <h2 className="text-xl font-heading font-black text-[#172451] uppercase mb-4">Corporate Headquarters</h2>
                      <p className="text-[#172451]/50 text-sm mb-6 leading-relaxed">Visit our main office or reach out to us via phone or email for any general corporate inquiries.</p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin size={18} className="text-[#172451] shrink-0 mt-1" />
                          <div>
                            <p className="text-[#172451] font-bold text-xs uppercase tracking-wider">Address</p>
                            <p className="text-gray-500 text-sm font-medium">Ahmedabad, Gujarat, India</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone size={18} className="text-[#172451] shrink-0 mt-1" />
                          <div>
                            <p className="text-[#172451] font-bold text-xs uppercase tracking-wider">Phone</p>
                            <p className="text-gray-500 text-sm font-medium">+91 95106 63030</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail size={18} className="text-[#172451] shrink-0 mt-1" />
                          <div>
                            <p className="text-[#172451] font-bold text-xs uppercase tracking-wider">Email</p>
                            <p className="text-gray-500 text-sm font-medium">info@dhyanora.com</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Send size={18} className="text-[#172451] shrink-0 mt-1" />
                          <div>
                            <p className="text-[#172451] font-bold text-xs uppercase tracking-wider">Hours</p>
                            <p className="text-gray-500 text-sm font-medium">Monday to Saturday | 9:00 AM - 6:30 PM (IST)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-xl font-heading font-black text-[#172451] uppercase">Send Us a Message</h2>
                      <p className="text-[#172451]/50 text-sm mb-4">Please fill out the form below, and our respective team will get back to you promptly.</p>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-[#172451]/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451] placeholder:text-[#172451]/20" />
                          <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-[#172451]/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451] placeholder:text-[#172451]/20" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-[#172451]/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451] placeholder:text-[#172451]/20" />
                          <select className="w-full bg-gray-50 border border-[#172451]/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451] appearance-none cursor-pointer">
                            <option>Interested In:</option>
                            <option>General Inquiry (Dhyanora Group)</option>
                            <option>Scrap Import/Export (Pramukh)</option>
                            <option>Bricks & Building Materials (Brics Trading)</option>
                            <option>Commercial Real Estate (Shreeji Infra)</option>
                            <option>Electronics & Home Appliances (Pramukh Techventure)</option>
                          </select>
                        </div>
                        <textarea rows="4" placeholder="Your Message" className="w-full bg-gray-50 border border-[#172451]/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#172451] focus:bg-white transition-all font-sans text-sm text-[#172451] placeholder:text-[#172451]/20 resize-none" />
                        <button className="w-full md:w-auto px-10 py-4 bg-[#172451] text-white rounded-full font-heading font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 active:scale-95 transition-all">
                          Submit Inquiry
                        </button>
                      </form>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════ COMPANIES & FRANCHISES SECTION ════ */}
        <section className="py-24 md:py-36 px-6 relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <BouncingCircles />
            <div className="absolute inset-0 opacity-[0.25]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="contact-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#172451" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#contact-grid)" />
              </svg>
            </div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20 md:mb-28">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Our Specialized Divisions</span>
                <h2 className="text-4xl md:text-7xl font-heading font-black text-[#172451] uppercase leading-tight mb-8">
                  Connect With <br />
                  <span className="text-[#fad77e]">Our Companies.</span>
                </h2>
                <p className="text-[#172451]/50 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                  Have a specific requirement? Reach out directly to our specialized divisions for efficient service.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {companies.map((company, idx) => (
                <CompanyCard key={idx} {...company} />
              ))}
            </div>
          </div>
        </section>

        {/* ════ DETAILS / FAQ SECTION ════ */}
        <section className="py-24 md:py-36 px-6 relative bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-6xl font-heading font-black uppercase mb-6 text-[#172451] leading-tight">
                  The Details <br />
                  <span className="text-[#172451]">Behind Dhyanora</span>
                </h2>
                <p className="text-[#172451]/30 font-heading tracking-widest uppercase text-[10px] font-black tracking-[0.4em]">A closer look at the questions that matter most.</p>
              </motion.div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.q} answer={faq.a} isOpen={openFAQ === index} onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)} />
              ))}
            </div>
          </div>
        </section>

        {/* ════ BOTTOM VISUAL SECTION ════ */}
        <section className="relative pt-24 pb-48 px-6">
          <div className="relative max-w-5xl mx-auto px-4">
             <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 min-h-[400px] md:min-h-[600px] flex items-center justify-center">
                <img src={bottomPhonesImg} alt="Dhyanora Group Ecosystem and Strategic Future Vision" className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172451] via-[#172451]/40 to-transparent opacity-90" />
                
                <div className="relative z-20 flex flex-col items-center justify-center text-center p-8 max-w-4xl mx-auto">
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-6 md:space-y-10">
                    <h2 className="text-3xl md:text-6xl font-heading font-black uppercase leading-[1.2] text-white drop-shadow-2xl">
                      See Our Vision.<br />
                      <span className="text-[#fad77e]">Shape Your Future.</span>
                    </h2>
                    <p className="text-white/70 max-w-xl mx-auto font-sans text-sm md:text-lg font-medium leading-relaxed drop-shadow-lg">
                      Our infrastructure and strategic frameworks are built for scale, efficiency, and unwavering ethics.
                    </p>
                    <div className="pt-4">
                      <Link to="/companies" className="px-10 py-5 bg-[#fad77e] text-[#172451] rounded-full font-heading font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-3 mx-auto hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(250,215,126,0.3)] w-fit">
                        Explore Companies <Globe size={18} />
                      </Link>
                    </div>
                  </motion.div>
                </div>
             </motion.div>
             
             <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none overflow-hidden">
                <h3 className="text-[10vw] md:text-[14vw] font-heading font-black uppercase leading-none opacity-[0.03] whitespace-nowrap text-center text-[#172451] tracking-[0.2em]">Dhyanora</h3>
             </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
