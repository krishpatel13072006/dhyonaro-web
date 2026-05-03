import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FooterCTA() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section py-16 md:py-24 relative overflow-hidden bg-[#0B0B0C]">
      {/* ORANGE AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center translate-y-12">
        <div
          className="w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(226,74,43,0.45), transparent 70%)",
          }}
        />
      </div>

      {/* TOP FADE */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[80px] z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, #0B0B0C, rgba(11,11,12,0))",
        }}
      />

      {/* BOTTOM FADE */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[80px] z-[2]"
        style={{
          background:
            "linear-gradient(to top, #0B0B0C, rgba(11,11,12,0))",
        }}
      />

      {/* CONTENT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-6 px-6"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-heading font-bold text-[#FFE1C5]">
          READY TO <span className="text-orange-500">WORK WITH US?</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
          Whether you are a business partner, investor, or client — we would love to hear from you.
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4
                       rounded-full font-bold text-sm
                       bg-orange-500 text-black
                       shadow-[0_0_40px_rgba(226,74,43,0.6)]
                       transition-all duration-300
                       hover:-translate-y-1
                       hover:shadow-[0_0_60px_rgba(226,74,43,0.9)]
                       uppercase tracking-wider"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
