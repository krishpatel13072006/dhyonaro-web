import React from 'react';
import SEO from '../../components/SEO';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

const BricsContact = () => {
  return (
    <>
      <SEO title="Contact Us | Bricks Trading Division" description="Get in touch with the Bricks Trading Division." />
      
      <main className="bg-white pt-20">
        <section className="py-24 px-6 min-h-[85vh] flex flex-col justify-center bg-white">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-24">
            {/* Contact Info */}
            <div className="flex-1">
              <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-black text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Open for Business
              </div>
              <h1 className="text-6xl md:text-8xl font-heading font-black text-black uppercase italic mb-10 leading-[0.9]">
                Start <br /><span className="text-gold-dark">Building.</span>
              </h1>
              <p className="text-xl text-black/40 mb-16 max-w-md font-bold leading-relaxed">
                Reach out to our trading team for bulk pricing, material specifications, and professional delivery schedules.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-black flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-2">Corporate Office</h4>
                    <p className="text-black font-black text-lg">Dhyanora Group HQ, Gujarat, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-black flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-2">Call Us</h4>
                    <p className="text-black font-black text-lg">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-black flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-2">Email</h4>
                    <p className="text-black font-black text-lg">bricks@dhyanora.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex-1 bg-gray-50 p-12 rounded-[3rem] shadow-xl border border-gray-100">
              <h3 className="text-3xl font-heading font-black text-black uppercase mb-10 tracking-wide">Send an <span className="text-gold-dark">Enquiry.</span></h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Full Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Company Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold transition-all" placeholder="Acme Builders" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Email Address</label>
                    <input type="email" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Phone Number</label>
                    <input type="tel" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold transition-all" placeholder="+91 ..." />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Requirement Details</label>
                  <textarea rows="5" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold transition-all resize-none" placeholder="Tell us about the materials and volume you need..."></textarea>
                </div>
                <button type="button" className="bg-black text-white w-full py-6 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.3em] mt-6 group rounded-2xl shadow-xl hover:bg-gray-900 transition-all">
                  Submit Enquiry <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BricsContact;
