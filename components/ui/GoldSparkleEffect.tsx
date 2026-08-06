'use client';

import { useState, useCallback } from 'react';
import { Sparkles } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function GoldSparkleEffect({
  children,
  className = ''
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const triggerSparkles = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const newParticles: Particle[] = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x: clickX + (Math.random() * 40 - 20),
      y: clickY + (Math.random() * 20 - 10),
      size: Math.random() * 8 + 10
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, 900);
  }, []);

  return (
    <div
      onClick={triggerSparkles}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      {children}

      {/* Floating Sparkle Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute pointer-events-none text-[#D4AF37] animate-sparkle-particle z-30 drop-shadow-[0_0_8px_#D4AF37]"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            fontSize: `${p.size}px`
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
