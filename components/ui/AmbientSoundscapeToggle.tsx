'use client';

import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/lib/store/useStore';
import { Music, Volume2, VolumeX, Sparkles, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AmbientSoundscapeToggle() {
  const { isAudioPlaying, toggleAudio, audioPreset, setAudioPreset, showToast } = useStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Stop current audio oscillators
  const stopAudio = () => {
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {}
    });
    oscillatorsRef.current = [];
  };

  // Web Audio API procedural heritage soundscape synthesizer
  const startAudio = () => {
    stopAudio();

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Frequencies for royal Indian scales (Raag Yaman / Bhairavi tones)
      let frequencies: number[] = [];
      if (audioPreset === 'sitar') {
        // Tanpura & Sitar drone frequencies (D1, A1, D2, F#2)
        frequencies = [146.83, 220.0, 293.66, 369.99];
      } else if (audioPreset === 'flute') {
        // Kashmiri Bansuri flute frequencies (A2, C#3, E3, A3)
        frequencies = [220.0, 277.18, 329.63, 440.0];
      } else {
        // Sacred Temple Chimes (High harmonic crystal tones)
        frequencies = [528.0, 659.25, 783.99, 1056.0];
      }

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm sine / triangle acoustic timbre
        osc.type = audioPreset === 'sitar' ? 'sawtooth' : audioPreset === 'flute' ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Lowpass filter for smooth organic warmth
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(audioPreset === 'chimes' ? 2400 : 800 + idx * 200, ctx.currentTime);

        // Gentle LFO modulation for subtle organic breathing sound
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.15 + idx * 0.05, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.03, ctx.currentTime);
        lfo.connect(lfoGain.gain);
        lfo.start();

        gain.gain.setValueAtTime(0.04, ctx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        osc.start();
        oscillatorsRef.current.push(osc);
      });
    } catch {
      // Fallback if browser audio is restricted
    }
  };

  useEffect(() => {
    if (isAudioPlaying) {
      startAudio();
    } else {
      stopAudio();
    }
    return () => {
      stopAudio();
    };
  }, [isAudioPlaying, audioPreset]);

  const handleToggle = () => {
    if (!isAudioPlaying) {
      showToast(`🎵 Playing Heritage Soundscape: ${audioPreset.toUpperCase()}`);
    }
    toggleAudio();
  };

  const presets = [
    { id: 'sitar', title: 'Royal Sitar & Tanpura Drone', desc: 'Warm 24K Sitar Harmonic Drone' },
    { id: 'flute', title: 'Kashmiri Bamboo Flute', desc: 'Soothing Himalayan Bansuri Frequencies' },
    { id: 'chimes', title: 'Sacred Temple Chimes', desc: '528Hz Solfeggio Crystal Bells' }
  ];

  return (
    <div className="relative inline-block text-left">
      {/* Soundscape Control Button */}
      <div className="flex items-center gap-1 bg-[#1E1A18]/90 border border-[#D4AF37]/40 rounded-full px-3 py-1.5 shadow-md">
        <button
          onClick={handleToggle}
          aria-label="Toggle ambient soundscape"
          className="flex items-center gap-2 text-xs font-semibold text-[#E6D2A8] hover:text-[#D4AF37] transition-colors cursor-pointer"
        >
          {isAudioPlaying ? (
            <>
              {/* Equalizer Visualizer Bars */}
              <div className="flex items-end gap-0.5 h-3.5 w-4">
                <span className="w-1 bg-[#D4AF37] rounded-full animate-[bounce_0.6s_infinite_ease-in-out]" />
                <span className="w-1 bg-[#D4AF37] rounded-full animate-[bounce_0.8s_infinite_ease-in-out_0.2s]" />
                <span className="w-1 bg-[#D4AF37] rounded-full animate-[bounce_0.5s_infinite_ease-in-out_0.4s]" />
              </div>
              <Volume2 className="w-4 h-4 text-[#D4AF37]" />
            </>
          ) : (
            <>
              <Music className="w-4 h-4 text-[#D4AF37]/70" />
              <VolumeX className="w-4 h-4 text-gray-400" />
            </>
          )}
          <span className="hidden lg:inline text-[11px] uppercase tracking-wider font-bold">
            {isAudioPlaying ? 'Soundscape On' : 'Ambient Audio'}
          </span>
        </button>

        {/* Dropdown Preset Arrow */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-[#D4AF37] hover:text-white p-0.5 rounded-full transition-colors cursor-pointer"
          aria-label="Soundscape options"
        >
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Preset Selector Dropdown */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 bg-[#1E1A18] border border-[#D4AF37]/50 rounded-2xl shadow-2xl p-2 z-50 text-[#FCFAF7]"
          >
            <div className="px-3 py-2 border-b border-[#D4AF37]/20 flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#E6D2A8] uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Ambient Audio Presets
              </span>
              <button
                onClick={() => setDropdownOpen(false)}
                className="text-xs text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="py-1 space-y-1">
              {presets.map((p) => {
                const isSelected = audioPreset === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setAudioPreset(p.id as 'sitar' | 'flute' | 'chimes');
                      if (!isAudioPlaying) toggleAudio();
                      setDropdownOpen(false);
                      showToast(`Switched soundscape to ${p.title}`);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/60 text-[#E6D2A8]'
                        : 'hover:bg-white/5 text-gray-300'
                    }`}
                  >
                    <div>
                      <div className="font-bold flex items-center gap-1.5">
                        {p.title}
                      </div>
                      <span className="text-[10px] text-gray-400 font-light block">{p.desc}</span>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#D4AF37]" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
