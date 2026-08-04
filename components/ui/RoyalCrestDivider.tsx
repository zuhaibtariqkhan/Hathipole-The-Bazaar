'use client';

import { Sparkles } from 'lucide-react';

interface RoyalCrestDividerProps {
  label?: string;
  className?: string;
}

export default function RoyalCrestDivider({ label, className = '' }: RoyalCrestDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 py-6 ${className}`}>
      {/* Left Gold Flourish Line */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#CDA45A]/40 to-[#CDA45A]" />

      {/* Center Royal Crest Diamond & Icon */}
      <div className="flex items-center gap-2 bg-[#FCFAF7] border border-[#CDA45A]/40 px-4 py-1.5 rounded-full shadow-sm text-[#CDA45A]">
        <span className="text-[10px] text-[#CDA45A]/60">❖</span>
        <Sparkles className="w-4 h-4 text-[#CDA45A] animate-pulse" />
        {label && (
          <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#1E1A18]">
            {label}
          </span>
        )}
        <span className="text-[10px] text-[#CDA45A]/60">❖</span>
      </div>

      {/* Right Gold Flourish Line */}
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#CDA45A]/40 to-[#CDA45A]" />
    </div>
  );
}
