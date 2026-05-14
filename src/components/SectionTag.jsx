import React from 'react';

const SectionTag = ({ children, light, color, className = "" }) => (
  <div className={`inline-flex items-center gap-2.5 mb-4 ${className}`}>
    <div className="w-7 h-0.5" style={{ backgroundColor: color || (light ? '#4ca9ff' : '#172451') }} />
    <span className="text-xs font-heading font-black uppercase tracking-wider" style={{ color: color || (light ? '#4ca9ff' : '#172451') }}>
      {children}
    </span>
  </div>
);

export default SectionTag;
