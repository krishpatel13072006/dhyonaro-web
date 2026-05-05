import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * ScrollReveal — wraps children in a fade-and-slide animation
 * that triggers once when the element enters the viewport.
 *
 * Props:
 *  - delay    : animation delay in seconds (default 0)
 *  - duration : animation duration in seconds (default 0.7)
 *  - x        : starting X offset in px (default 0)
 *  - y        : starting Y offset in px (default 48)
 *  - threshold: fraction of element visible before trigger (0–1, default 0.15)
 *  - className: forwarded to the motion div
 *  - children : content to animate
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
 *
 * Props:
 *  - staggerDelay : seconds between each child (default 0.12)
 *  - baseDelay    : initial delay before first child (default 0)
 *  - duration     : per-child duration (default 0.7)
 *  - x            : starting X offset (default 0)
 *  - y            : starting Y offset (default 48)
 *  - className    : forwarded to the wrapper div
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
        // This is crucial for CSS Grid (col-span, row-span) which only works on direct children
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
