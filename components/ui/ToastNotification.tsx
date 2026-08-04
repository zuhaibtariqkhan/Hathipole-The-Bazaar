'use client';

import { useStore } from '@/lib/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function ToastNotification() {
  const { toastMessage } = useStore();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1E1A18] text-[#FCFAF7] border border-[#CDA45A]/40 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md"
        >
          <CheckCircle2 className="w-5 h-5 text-[#CDA45A] shrink-0" />
          <span className="text-sm font-medium tracking-wide">{toastMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
