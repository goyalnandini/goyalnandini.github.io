import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Sun, 
  BrainCircuit, 
  Sparkles, 
  CheckCircle2, 
  Calendar,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { internships } from '../data';

export default function ExperienceTab() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Helper mapping icon based on company - Clean theme
  const getIcon = (company: string) => {
    if (company.includes("Reliance")) return <Sun className="h-5 w-5 text-neutral-800" />;
    if (company.includes("OpenCubicles")) return <BrainCircuit className="h-5 w-5 text-neutral-800" />;
    return <Sparkles className="h-5 w-5 text-neutral-800" />;
  };

  const getBadges = (company: string) => {
    if (company.includes("Reliance")) return ['ASPEN Simulations', 'Crank-Nicolson', 'Thermal Energy', 'Python'];
    if (company.includes("OpenCubicles")) return ['LLM Evaluation', 'Automated QA', 'UI/UX Improvement', 'Memli.app'];
    return ['Social Strategies', 'Competitive Analysis', 'User Personas', 'LinkedIn/Instagram'];
  };

  const getAccentColor = (company: string, isHovered: boolean) => {
    if (isHovered) return 'border-l-2 border-neutral-950';
    return 'border-l border-neutral-200';
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
      id="experience-tab-pane"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <div>
          <h2 className="text-xl font-display font-semibold text-neutral-900 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-neutral-900" />
            Professional Internship Term
          </h2>
          <p className="text-xs text-neutral-500 mt-1 italic font-light">
            Real-world impact across chemical optimization and cognitive EdTech product analysis.
          </p>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-700 bg-white border border-neutral-300 px-3 py-1.5 rounded w-max font-bold">
          <TrendingUp className="h-3.5 w-3.5" />
          <span>Verified Accomplishments</span>
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-neutral-200 pl-6 ml-4 space-y-8">
        {internships.map((intern, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div 
              key={idx}
              id={`experience-node-${idx}`}
              className="relative group transition-all"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Timeline bubble locator */}
              <div 
                className={`absolute -left-[35px] top-1.5 p-1 rounded-full border bg-white transition-all duration-300 ${
                  isHovered ? 'scale-110 border-neutral-950 ring-4 ring-neutral-100' : 'border-neutral-200'
                }`}
              >
                {getIcon(intern.company)}
              </div>

              {/* Work Details card */}
              <div 
                className={`rounded-xl border border-neutral-200 bg-white p-5 md:p-6 shadow-none transition-all duration-350 ${getAccentColor(intern.company, isHovered)} ${
                  isHovered ? 'translate-x-1 border-neutral-300' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3 mb-4">
                  <div>
                    <h3 className="text-base font-display font-semibold text-neutral-900 leading-tight">
                      {intern.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-neutral-600 mt-1 flex-wrap font-light">
                      <span className="font-semibold text-neutral-850">{intern.company}</span>
                      <span className="text-neutral-300">•</span>
                      <span className="inline-flex items-center gap-1 text-neutral-400 font-mono">
                        <Calendar className="h-3 w-3" />
                        {intern.period}
                      </span>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 text-[9px] font-mono tracking-widest uppercase rounded bg-neutral-100 text-neutral-500 border border-neutral-200 self-start sm:self-center">
                    SUMMER BLOCK
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-neutral-650 leading-relaxed italic bg-neutral-50 p-4 rounded border border-neutral-150">
                    "{intern.description}"
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-1.5 border-b border-neutral-100 pb-1">
                      <Cpu className="h-3.5 w-3.5 text-neutral-400" /> Deliverables & Metrics
                    </h4>
                    
                    <ul className="space-y-2">
                      {intern.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="h-3.5 w-3.5 text-neutral-900 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-neutral-600 leading-relaxed italic">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags category */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {getBadges(intern.company).map((badge, bIdx) => (
                      <span 
                        key={bIdx}
                        className="px-2 py-0.5 text-[10px] font-mono uppercase text-neutral-600 bg-neutral-50 border border-neutral-200 rounded hover:border-neutral-400 transition"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
