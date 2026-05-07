import React from 'react';

const SectionTag = ({ children, light, color, className = "" }) => (
  <div className={`inline-flex items-center gap-2.5 mb-4 ${className}`}>
    <div className="w-7 h-0.5" style={{ backgroundColor: color || (light ? 'var(--color-blue-light)' : 'var(--color-blue)') }} />
    <span className="text-xs font-heading font-black uppercase tracking-wider" style={{ color: color || (light ? 'var(--color-blue-light)' : 'var(--color-blue)') }}>
      {children}
    </span>
  </div>
);

export default SectionTag;
