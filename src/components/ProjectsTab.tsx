import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Projector, 
  Search, 
  Cpu, 
  LineChart, 
  BrainCircuit, 
  User, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { academicProjects } from '../data';
import { AcademicProject } from '../types';

export default function ProjectsTab() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = ['All', 'Tech & Engineering', 'Finance & Analytics', 'AI & ML & Software'];

  // Helper to retrieve icons according to category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Tech & Engineering':
        return <Cpu className="h-4 w-4" />;
      case 'Finance & Analytics':
        return <LineChart className="h-4 w-4" />;
      case 'AI & ML & Software':
        return <BrainCircuit className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Tech & Engineering':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Finance & Analytics':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'AI & ML & Software':
        return 'bg-indigo-55 text-indigo-700 border-indigo-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  // Extract tools mapping based on title keywords
  const getToolsUsedInProject = (title: string): string[] => {
    const t = title.toLowerCase();
    if (t.includes("advitya")) return ["Earned Value Management", "Critical Path", "ProjectLibre"];
    if (t.includes("energy")) return ["Go-To-Market", "BESS Optimization", "Na-ion Batteries"];
    if (t.includes("consultx")) return ["Process Flows", "Wireframing", "Mural"];
    if (t.includes("heat")) return ["Python", "Dynamic Programming", "2D Finite-Difference"];
    if (t.includes("robotic")) return ["ESP32", "Inverse Kinematics", "IMU Calibration", "Flex Sensors"];
    if (t.includes("quadcopter")) return ["PID Control", "NodeMCU", "Wi-Fi Telemetry", "Arduino Nano"];
    if (t.includes("led")) return ["Arduino Nano", "POV Multiplexing", "PWM Dimming"];
    if (t.includes("artificial") || t.includes("machine")) return ["Python", "KNN & Linear Regression", "CNN & RNN (TensorFlow/Keras)"];
    if (t.includes("equity")) return ["P/E & EPS Ratio", "SWOT", "DCF Valuation"];
    if (t.includes("portfolio")) return ["ROE Screening", "Asset Allocation", "Volatility Hedging"];
    return ["Analytical Research", "MS Excel"];
  };

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return academicProjects.filter((project: AcademicProject) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesQuery = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.mentor && project.mentor.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
      id="projects-tab-pane"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xl font-display font-semibold text-slate-900 flex items-center gap-2">
            <Projector className="h-5 w-5 text-indigo-600" />
            Engineering & Strategic Research Portfolio
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Displaying coursework plans, computational modeling, hardware prototyping, and financial competition roadmaps.
          </p>
        </div>

        {/* Dynamic Project Counts */}
        <span className="text-[10px] font-mono tracking-widest uppercase text-white bg-neutral-950 px-2.5 py-1.5 rounded-lg w-max font-bold">
          Matches: <strong>{filteredProjects.length}</strong> Projects
        </span>
      </div>

      {/* Filter and Search HUD */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Horizontal Category Filters */}
        <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all duration-150 select-none cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-neutral-900 text-white shadow-none' 
                  : 'bg-white text-neutral-500 hover:text-neutral-950 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              {cat}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative md:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
          <input
            id="proj-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or key tools..."
            className="w-full pl-9 pr-3 py-2 text-xs text-neutral-800 bg-white border border-neutral-200 rounded focus:outline-hidden focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 shadow-none font-sans"
          />
        </div>
      </div>

      {/* Academic Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="project-cards-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                key={proj.title}
                id={`project-card-${idx}`}
                className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 hover:border-neutral-400 hover:shadow-none transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Category Badge & Duration */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 border border-neutral-200 bg-neutral-50 text-[9px] font-mono uppercase tracking-widest text-neutral-800 rounded">
                      {getCategoryIcon(proj.category)}
                      <span>{proj.category}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-neutral-400">
                      <Calendar className="h-3 w-3" />
                      {proj.period}
                    </span>
                  </div>

                  {/* Project Title */}
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-semibold text-neutral-900 leading-snug hover:text-neutral-950 transition">
                      {proj.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span className="bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider">{proj.type}</span>
                      {proj.mentor && (
                        <>
                          <span>•</span>
                          <span className="inline-flex items-center gap-0.5 italic">
                            <User className="h-3 w-3 text-neutral-450" />
                            {proj.mentor}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Core Accomplishment Bullets */}
                  <ul className="space-y-2 pt-2 border-t border-neutral-100">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2.5 items-start text-xs text-neutral-600 leading-relaxed italic">
                        <CheckCircle2 className="h-3.5 w-3.5 text-neutral-900 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Computational Tool Tags */}
                <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap gap-1">
                  {getToolsUsedInProject(proj.title).map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 text-[9px] font-mono uppercase text-neutral-600 bg-neutral-50 border border-neutral-200 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-1 md:col-span-2 text-center py-12 bg-neutral-50 rounded-xl border border-dashed border-neutral-300"
            >
              <Sparkles className="h-8 w-8 mx-auto text-neutral-400 mb-2" />
              <p className="text-sm font-medium text-neutral-500">No project results matched your search definition.</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-mono uppercase tracking-widest text-neutral-900 hover:underline font-bold"
              >
                Reset search queries & filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
