import React from 'react';
import SEO from '../../components/SEO';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

const PramukhContact = () => {
  return (
    <>
      <SEO title="Contact Us | Pramukh Import Export" description="Get in touch with Pramukh Import Export for your bulk metal scrap requirements." />
      
      <section className="py-20 px-6 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="flex-1">
            <span className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-cream uppercase italic mb-8">
              Let's Talk <span className="text-gold">Trade.</span>
            </h1>
            <p className="text-xl text-gray-light/60 mb-12 max-w-md">
              Ready for bulk procurement? Reach out to our team to discuss your requirements. We handle large-scale orders and long-term supply contracts.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-cream mb-1">Corporate Office</h4>
                  <p className="text-gray-light/60 text-sm">Dhyanora Group HQ, Gujarat, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-cream mb-1">Call Us</h4>
                  <p className="text-gray-light/60 text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-cream mb-1">Email</h4>
                  <p className="text-gray-light/60 text-sm">trade@dhyanora.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 bg-white/[0.02] border border-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-heading font-bold text-cream uppercase mb-8">Send an Enquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-light/60">Full Name</label>
                  <input type="text" className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-light/60">Company Name</label>
                  <input type="text" className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors" placeholder="Acme Corp" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-light/60">Email</label>
                  <input type="email" className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-light/60">Phone</label>
                  <input type="tel" className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors" placeholder="+91 ..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-light/60">Requirement Details</label>
                <textarea rows="4" className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors" placeholder="Tell us about the scrap types and volume you need..."></textarea>
              </div>
              <button type="button" className="btn-primary w-full py-4 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest mt-4">
                Submit Enquiry <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PramukhContact;
