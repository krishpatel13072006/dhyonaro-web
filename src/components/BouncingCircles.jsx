import React, { useState, useEffect } from 'react';

const BouncingCircles = () => {
  const [circles, setCircles] = useState([
    { id: 1, x: 15, y: 20, vx: 0.1, vy: 0.12, size: 256 },
    { id: 2, x: 85, y: 30, vx: -0.12, vy: 0.08, size: 256 },
    { id: 3, x: 25, y: 75, vx: 0.08, vy: -0.1, size: 256 },
    { id: 4, x: 75, y: 80, vx: -0.1, vy: -0.12, size: 256 },
  ]);

  useEffect(() => {
    let animationFrame;
    const update = () => {
      setCircles(prev => {
        const next = prev.map(c => ({
          ...c,
          x: c.x + c.vx,
          y: c.y + c.vy
        }));

        const padding = 10; 
        next.forEach(c => {
          if (c.x < padding || c.x > 100 - padding) c.vx *= -1;
          if (c.y < padding || c.y > 100 - padding) c.vy *= -1;
          c.x = Math.max(padding, Math.min(100 - padding, c.x));
          c.y = Math.max(padding, Math.min(100 - padding, c.y));
        });

        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            const dx = next[i].x - next[j].x;
            const dy = next[i].y - next[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = 20;

            if (distance < minDistance) {
              const tvx = next[i].vx;
              const tvy = next[i].vy;
              next[i].vx = next[j].vx;
              next[i].vy = next[j].vy;
              next[j].vx = tvx;
              next[j].vy = tvy;

              const overlap = minDistance - distance;
              const nx = dx / (distance || 1);
              const ny = dy / (distance || 1);
              next[i].x += nx * overlap / 2;
              next[i].y += ny * overlap / 2;
              next[j].x -= nx * overlap / 2;
              next[j].y -= ny * overlap / 2;
            }
          }
        }
        return next;
      });
      animationFrame = requestAnimationFrame(update);
    };
    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="absolute inset-0">
      {circles.map(c => (
        <div
          key={c.id}
          className="absolute w-48 h-48 md:w-64 md:h-64 border-2 border-slate-400/20 bg-slate-200/10 rounded-full -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px] shadow-inner transition-transform duration-[16ms] ease-linear"
          style={{ 
            left: `${c.x}%`, 
            top: `${c.y}%`,
            willChange: 'left, top'
          }}
        />
      ))}
    </div>
  );
};

export default BouncingCircles;
