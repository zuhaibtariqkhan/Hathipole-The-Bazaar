'use client';

import { useStore } from '@/lib/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function ToastNotification() {
  const { toastMessage } = useStore();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1E1A18] text-[#FCFAF7] border-2 border-[#CDA45A] px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          {/* Animated Gold Particle Explosion Accent */}
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute -left-2 -top-2 w-12 h-12 rounded-full bg-[#CDA45A]/40 pointer-events-none"
          />

          <div className="w-8 h-8 rounded-full bg-[#CDA45A]/20 border border-[#CDA45A] flex items-center justify-center text-[#CDA45A] shrink-0">
            <Sparkles className="w-4 h-4 text-[#CDA45A] animate-pulse" />
          </div>

          <span className="text-xs sm:text-sm font-bold tracking-wide text-[#E6D2A8]">
            {toastMessage}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
