'use client';

import { useEffect, useRef } from 'react';

export default function GoldCursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number | null = null;
    let latestX = -100;
    let latestY = -100;
    let isVisible = false;

    const updatePosition = () => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(450px circle at ${latestX}px ${latestY}px, rgba(212, 175, 55, 0.08), transparent 80%)`;
        glowRef.current.style.opacity = isVisible ? '1' : '0';
      }
      animationFrameId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      latestX = e.clientX;
      latestY = e.clientY;
      if (!isVisible) {
        isVisible = true;
      }
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (glowRef.current) {
        glowRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block opacity-0"
      style={{ willChange: 'background, opacity' }}
    />
  );
}

