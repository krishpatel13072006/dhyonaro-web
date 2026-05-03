import React from 'react';
import { motion } from 'framer-motion';

const segments = [
  {
    title: "Mobility",
    img: "https://images.unsplash.com/photo-1558389186-438424b00a32?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Health and wellness",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Realty",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Technology",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Lifestyle",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Food & Beverages",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Business Services",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Education",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Layout from Image */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="order-2 md:order-1">
             <span className="text-white/40 text-sm font-medium tracking-tight">Yearly Growth across Brands</span>
          </div>
          <div className="order-1 md:order-2 text-left md:text-right">
            <h2 className="text-4xl md:text-6xl font-heading font-black leading-none uppercase">
              Our Brand <br />
              <span className="text-white">Segments</span>
            </h2>
          </div>
        </div>

        {/* Grid Layout from Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {segments.map((segment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-zinc-900 rounded-sm">
                <img 
                  src={segment.img} 
                  alt={segment.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-white transition-colors group-hover:text-gold">
                {segment.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
