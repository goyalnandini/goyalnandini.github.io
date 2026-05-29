import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  HeartHandshake, 
  Rocket, 
  CheckCircle2, 
  Award,
  Sparkles,
  Users
} from 'lucide-react';
import { extracurriculars } from '../data';
import { Extracurricular } from '../types';

export default function ExtracurricularsTab() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Competitions', 'Social', 'Mentor', 'Others'];

  const getIcon = (category: string) => {
    switch (category) {
      case 'Competitions':
        return <Rocket className="h-5 w-5 text-neutral-800" />;
      case 'Social':
        return <HeartHandshake className="h-5 w-5 text-neutral-850" />;
      case 'Mentor':
        return <Users className="h-5 w-5 text-neutral-800" />;
      default:
        return <Compass className="h-5 w-5 text-neutral-800" />;
    }
  };

  const getAccentColor = (category: string) => {
    return 'border-t-2 border-t-neutral-900';
  };

  const filteredExtra = selectedCategory === 'All' 
    ? extracurriculars 
    : extracurriculars.filter(e => e.category === selectedCategory);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
      id="extra-tab-pane"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
        <div>
          <h2 className="text-xl font-display font-semibold text-neutral-900 flex items-center gap-2">
            <Compass className="h-5 w-5 text-neutral-900" />
            Extra-Curricular Highlights
          </h2>
          <p className="text-xs text-neutral-500 mt-1 italic font-light">
            Explore her initiatives spanning Martian Soil habitats, community teaching, canine/feline welfare books, and military cadet training.
          </p>
        </div>

        {/* Categories HUD */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all duration-150 select-none cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-neutral-900 text-white' 
                  : 'bg-white text-neutral-500 hover:text-neutral-950 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout of Extra Accomplishments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main List Column */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredExtra.map((item: Extracurricular, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                key={item.category}
                id={`extra-card-${idx}`}
                className={`rounded-xl border border-neutral-200 bg-white p-5 space-y-3.5 transition-all duration-150 ${getAccentColor(item.category)}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-neutral-50 rounded border border-neutral-200">
                    {getIcon(item.category)}
                  </div>
                  <h3 className="font-display font-semibold text-neutral-900 text-sm italic">
                    {item.category} Achievements
                  </h3>
                </div>

                <ul className="space-y-3">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3 items-start text-xs text-neutral-600 leading-relaxed italic">
                      <CheckCircle2 className="h-4 w-4 text-neutral-900 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Unique Feature Sidebar Card: Kindle Book Spotlight Mockup (Clean Minimalism) */}
        <div className="col-span-1 space-y-6">
          <div 
            id="book-spotlight-card"
            className="rounded-xl border border-neutral-200 bg-white p-6 text-neutral-900 text-center space-y-5"
          >
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-800 bg-neutral-100 border border-neutral-200 block w-max mx-auto">
                Co-authored Publication
              </span>
              <h3 className="text-xs font-mono font-bold text-neutral-400 mt-2 uppercase tracking-widest">Kindle eBook</h3>
            </div>

            {/* Simulated Kindle eBook Mockup graphic - Minimalist Monograph Style */}
            <div className="relative mx-auto w-36 h-48 bg-neutral-50 rounded border border-neutral-300 p-4 flex flex-col justify-between overflow-hidden shadow-none">
              <div className="space-y-1 text-left relative z-10">
                <span className="text-[7px] uppercase font-mono font-bold tracking-widest text-neutral-400">Survival Guide</span>
                <h4 className="text-xs font-display font-light text-neutral-900 leading-tight uppercase tracking-wide mt-1">
                  Stray Souls
                </h4>
                <p className="text-[7px] text-neutral-500 font-sans tracking-wide italic mt-1 leading-normal">
                  An Unconventional Guide to Caring for Street Animals
                </p>
              </div>

              <div className="text-left border-t border-neutral-200 pt-2 flex items-center justify-between z-10">
                <span className="text-[6.5px] font-sans font-light tracking-wide text-neutral-400">Goyal et al.</span>
                <span className="text-[6px] font-mono px-1 py-0.2 bg-neutral-950 text-white rounded font-semibold uppercase tracking-wider">Kindle</span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-neutral-600 text-left">
              <p className="leading-relaxed italic">
                Nandini is deep-seated in animal care. She co-authored and launched **"Stray Souls: An Unconventional Guide to Caring for Street Animals"** on Amazon Kindle.
              </p>
              <p className="leading-relaxed text-neutral-500 border-t border-neutral-150 pt-2 flex items-center gap-1.5 font-sans italic text-[11px]">
                <Sparkles className="h-3.5 w-3.5 text-neutral-900" />
                Available worldwide for stray rescue organizations.
              </p>
            </div>
          </div>

          {/* National Cadets Corps Spotlight card */}
          <div 
            id="ncc-military-spotlight"
            className="rounded-xl border border-neutral-200 bg-white p-5 space-y-3 shadow-none"
          >
            <div className="flex items-center gap-2 border-b border-neutral-150 pb-2.5">
              <Award className="h-5 w-5 text-neutral-900" />
              <h3 className="text-xs font-mono font-bold text-neutral-800 uppercase tracking-widest">
                NCC Cadet Training
              </h3>
            </div>
            <p className="text-xs text-neutral-500 italic leading-relaxed">
              Enlisted in the National Cadet Corps (NCC) for 1 full year, enduring hard exercises, physical routines, and social drills. Validated qualifications to sit for the nation-wide designated **'B' Certificate Exam**.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
