import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  DollarSign, 
  Users, 
  Wrench, 
  CheckCircle2, 
  Star,
  Layers
} from 'lucide-react';
import { positionsOfResponsibility } from '../data';

export default function PoRTab() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default expand the first one (iGEM)
  const [activeIgemSubCategory, setActiveIgemSubCategory] = useState<string>('Technical');

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  // Helper icons for categories - Clean theme
  const getSubCatIcon = (name: string) => {
    if (name.includes("Outreach")) return <DollarSign className="h-4 w-4 text-neutral-700" />;
    if (name.includes("Management")) return <Users className="h-4 w-4 text-neutral-750" />;
    return <Wrench className="h-4 w-4 text-neutral-700" />;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
      id="por-tab-pane"
    >
      <div className="border-b border-neutral-200 pb-4">
        <h2 className="text-xl font-display font-semibold text-neutral-900 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-neutral-900" />
          Positions of Responsibility & Leadership
        </h2>
        <p className="text-xs text-neutral-500 mt-1 italic font-light">
          Review her peer-vetted student leadership across iGEM Paris technical systems, institute mentorship programs, and BioX convenorships.
        </p>
      </div>

      <div className="space-y-4">
        {positionsOfResponsibility.map((por, idx) => {
          const isExpanded = expandedIndex === idx;
          const isiGEM = por.organization.toLowerCase().includes("igem");

          return (
            <div 
              key={idx}
              id={`por-card-${idx}`}
              className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-none"
            >
              {/* Accordion Header */}
              <button
                id={`por-toggle-btn-${idx}`}
                onClick={() => toggleExpand(idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-neutral-50/50 hover:bg-neutral-50/80 transition duration-150 cursor-pointer"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-neutral-100 rounded border border-neutral-200 text-neutral-800 flex-shrink-0 mt-0.5">
                    <Star className="h-4.5 w-4.5 font-bold" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-semibold text-neutral-900">
                      {por.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                      <span className="font-semibold text-neutral-700">{por.organization}</span>
                      <span>•</span>
                      <span>{por.period}</span>
                      {por.teamSize && (
                        <>
                          <span>•</span>
                          <span className="px-1.5 py-0.2 bg-neutral-100 border border-neutral-200 text-neutral-500 rounded text-[10px] font-mono">Team: {por.teamSize}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="hidden sm:inline-block text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                    {isExpanded ? 'Collapse' : 'Expand'}
                  </span>
                  {isExpanded ? <ChevronUp className="h-4 w-4 text-neutral-500" /> : <ChevronDown className="h-4 w-4 text-neutral-500" />}
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-neutral-150 p-5 md:p-6"
                  >
                    {/* General Summary */}
                    <div className="space-y-4">
                      <p className="text-xs text-neutral-600 leading-relaxed italic bg-neutral-50 p-4 rounded border border-neutral-150">
                        {por.description}
                      </p>

                      {/* If team iGEM, show specialized three subcategories menu! */}
                      {isiGEM ? (
                        <div id="igem-technical-subtabs" className="space-y-4 pt-2">
                          <div className="flex border-b border-neutral-200">
                            {por.categories.map((cat) => (
                              <button
                                key={cat.title}
                                id={`igem-subtag-${cat.title.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                                onClick={() => setActiveIgemSubCategory(cat.title.split(' ')[0])}
                                className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider select-none border-b-2 transition-all -mb-px flex items-center gap-1.5 cursor-pointer ${
                                  activeIgemSubCategory === cat.title.split(' ')[0]
                                    ? 'border-neutral-900 text-neutral-905 font-bold text-neutral-900'
                                    : 'border-transparent text-neutral-400 hover:text-neutral-800'
                                }`}
                              >
                                {getSubCatIcon(cat.title)}
                                {cat.title}
                              </button>
                            ))}
                          </div>

                          <div className="bg-neutral-50/20 rounded-xl p-4 border border-neutral-200 animate-fade-in">
                            {por.categories
                              .filter((c) => c.title.split(' ')[0] === activeIgemSubCategory)
                              .map((cat) => (
                                <div key={cat.title} className="space-y-3">
                                  <h4 className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5 border-b border-neutral-100 pb-1">
                                    <Layers className="h-3.5 w-3.5" /> Key Technical Focus
                                  </h4>
                                  <ul className="space-y-2">
                                    {cat.bullets.map((b, bIdx) => (
                                      <li key={bIdx} className="flex gap-2.5 items-start text-xs text-neutral-600 italic leading-relaxed">
                                        <CheckCircle2 className="h-4 w-4 text-neutral-900 mt-0.5 flex-shrink-0" />
                                        <span>{b}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                          </div>
                        </div>
                      ) : (
                        /* Standard layout showing categories sequentially */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          {por.categories.map((cat, catIdx) => (
                            <div 
                              key={catIdx}
                              className="rounded-xl border border-neutral-200 bg-neutral-50/30 p-4 space-y-3"
                            >
                              <h4 className="text-[10px] font-mono font-bold text-neutral-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-neutral-150 pb-2">
                                {getSubCatIcon(cat.title)}
                                {cat.title}
                              </h4>
                              <ul className="space-y-2">
                                {cat.bullets.map((b, bIdx) => (
                                  <li key={bIdx} className="flex gap-2.5 items-start text-xs text-neutral-550 italic leading-relaxed">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-neutral-900 mt-0.5 flex-shrink-0" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
