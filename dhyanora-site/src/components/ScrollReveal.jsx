'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * ScrollReveal — wraps children in a fade-and-slide animation
 * that triggers once when the element enters the viewport.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.9,
  x = 0,
  y = 48,
  threshold = 0.25,
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold, margin: "-10% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealGroup — stagger-wraps multiple children,
 * each child gets progressively longer delay.
 */
export function ScrollRevealGroup({
  children,
  staggerDelay = 0.12,
  baseDelay = 0,
  duration = 0.9,
  x = 0,
  y = 48,
  threshold = 0.2,
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold || 0.2, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return child;

        // Extract layout-related classes from the child to apply to the motion wrapper
        const childClasses = child.props.className || '';
        const layoutClasses = childClasses.split(' ').filter(cls => 
          /^(col-|row-|sm:col-|sm:row-|md:col-|md:row-|lg:col-|lg:row-|xl:col-|xl:row-|2xl:col-|2xl:row-|h-|w-|flex-|basis-|order-|shadow-)/.test(cls)
        ).join(' ');

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x, y }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
            transition={{
              duration,
              delay: baseDelay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={layoutClasses}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
