import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    
    const clickables = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mousePos.x - 16, springConfig);
  const cursorY = useSpring(mousePos.y - 16, springConfig);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary-500 pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1 h-1 bg-primary-500 rounded-full" />
      </div>
    </motion.div>
  );
};

export default CustomCursor;
