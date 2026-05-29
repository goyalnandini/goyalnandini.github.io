import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  Compass, 
  ArrowRight,
  TrendingUp,
  User,
  Heart
} from 'lucide-react';
import { personalInfo, scholasticAchievements } from '../data';

interface OverviewTabProps {
  onNavigateToTab: (tabId: string) => void;
}

export default function OverviewTab({ onNavigateToTab }: OverviewTabProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-8"
      id="overview-tab-pane"
    >
      {/* Hero Intro Header - Clean Minimalism Style */}
      <div 
        id="hero-intro-card"
        className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 md:p-10 shadow-none"
      >
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-neutral-800 bg-neutral-100 border border-neutral-200">
              IIT Bombay Undergraduate
            </span>
            <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-neutral-500 bg-white border border-neutral-200">
              Class of 2027
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-neutral-900 italic">
              Hello, I'm {personalInfo.name}
            </h1>
            <p className="text-base text-neutral-500 leading-relaxed max-w-3xl italic">
              A driven researcher and team lead pursuing dual priorities: rigorous{' '}
              <strong className="text-neutral-950 font-normal underline decoration-neutral-300">Metallurgical Engineering and Materials Science</strong>{' '}
              academic curriculum combined with a robust{' '}
              <strong className="text-neutral-950 font-normal">Management Minor</strong> at Shailesh J. Mehta School of Management, IIT Bombay.
            </p>
          </div>

          {/* Quick Details Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-3">
            <div className="flex items-center gap-2.5 text-xs text-neutral-600 bg-neutral-50/50 p-3 rounded-lg border border-neutral-200">
              <GraduationCap className="h-4 w-4 text-neutral-700" />
              <span>CPI: <strong className="text-neutral-950 font-semibold">{personalInfo.gpa}</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-600 bg-neutral-50/50 p-3 rounded-lg border border-neutral-200">
              <MapPin className="h-4 w-4 text-neutral-700" />
              <span>{personalInfo.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-600 bg-neutral-50/50 p-3 rounded-lg border border-neutral-200">
              <Calendar className="h-4 w-4 text-neutral-700" />
              <span>DOB: {personalInfo.dob} | Female</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Spotlight Bento - Clean layout with thin gray borders */}
      <div 
        id="key-spotlight-bento"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          { label: 'Cumulative GPA', value: '8.66 CPI', desc: 'IIT Bombay Scale' },
          { label: 'iGEM Dry Lab', value: '20+ Members', desc: 'Subsystem Head, Paris' },
          { label: 'Tech Internships', value: '3 Projects', desc: 'Solar, LLMs, AI Voice' },
          { label: 'Published Book', value: 'Kindle Store', desc: 'Street Animal Welfare' },
        ].map((item, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-xl border border-neutral-200 bg-white flex flex-col justify-between group hover:border-neutral-400 transition-colors duration-150"
          >
            <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-widest">{item.label}</span>
            <div className="my-4">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-neutral-950 italic">{item.value}</span>
              <p className="text-[11px] text-neutral-400 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid: Education Matrix & Scholastic Honors */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* Education Timeline Matrix */}
        <div 
          id="education-academic-card"
          className="lg:col-span-3 rounded-xl border border-neutral-200 bg-white p-6 shadow-none space-y-4"
        >
          <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
            <GraduationCap className="h-5 w-5 text-neutral-800" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Academic Qualifications Matrix</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
                  <th className="py-2.5 px-3">Examination</th>
                  <th className="py-2.5 px-3">Institution</th>
                  <th className="py-2.5 px-3">Year</th>
                  <th className="py-2.5 px-3 text-right">Score / CPI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-xs text-neutral-600">
                {personalInfo.educationHistory.map((edu, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="py-3.5 px-3 font-medium text-neutral-900">{edu.examination}</td>
                    <td className="py-3.5 px-3 italic text-neutral-500">{edu.institute}</td>
                    <td className="py-3.5 px-3 font-mono text-neutral-400">{edu.year}</td>
                    <td className="py-3.5 px-3 text-right font-mono font-bold text-neutral-900">{edu.cpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-250/60 text-xs text-neutral-600 space-y-1">
            <span className="font-mono font-bold text-[9px] uppercase tracking-wider text-neutral-400 block">Minor Specialization:</span>
            <p className="italic">{personalInfo.minor}</p>
          </div>
        </div>

        {/* Scholastic Achievements list */}
        <div 
          id=" scholastic-honors-card"
          className="lg:col-span-2 rounded-xl border border-neutral-200 bg-white p-6 shadow-none space-y-4"
        >
          <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
            <Award className="h-5 w-5 text-neutral-800" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Scholastic Achievements</h2>
          </div>

          <div className="space-y-4">
            {scholasticAchievements.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start border-b border-neutral-100/60 pb-3 last:border-b-0 last:pb-0">
                <div className="mt-1 flex-shrink-0 p-1 bg-neutral-100 border border-neutral-200 rounded">
                  <CheckCircle2 className="h-3.5 w-3.5 text-neutral-800" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 flex items-center gap-2">
                    {item.title}
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 bg-neutral-100 text-neutral-500 border border-neutral-200 rounded">
                      {item.year}
                    </span>
                  </h4>
                  <p className="text-xs text-neutral-500 italic mt-1 leading-normal">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Featured Fast Tracks Panel - Clean White Strip with dashed borders */}
      <div 
        id="quick-explore-panel"
        className="rounded-xl border border-neutral-300 bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-1.5 text-center md:text-left">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-900 flex items-center gap-2 justify-center md:justify-start">
            <Compass className="h-4 w-4 text-neutral-750" />
            Career Directory Index
          </h3>
          <p className="text-xs text-neutral-500 max-w-xl italic leading-relaxed">
            Quickly jump to specialized domains of her academic roadmap. Use the side companion to consult authenticated resumes database.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button 
            id="btn-goto-intern"
            onClick={() => onNavigateToTab('experience')}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider text-neutral-700 bg-white hover:bg-neutral-950 hover:text-white border border-neutral-220 border-neutral-300 rounded transition duration-200 shadow-none cursor-pointer"
          >
            Internships <ArrowRight className="h-3 w-3" />
          </button>
          <button 
            id="btn-goto-projects"
            onClick={() => onNavigateToTab('projects')}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider text-neutral-700 bg-white hover:bg-neutral-950 hover:text-white border border-neutral-220 border-neutral-300 rounded transition duration-200 shadow-none cursor-pointer"
          >
            Projects <ArrowRight className="h-3 w-3" />
          </button>
          <button 
            id="btn-goto-skills"
            onClick={() => onNavigateToTab('skills')}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider text-neutral-700 bg-white hover:bg-neutral-950 hover:text-white border border-neutral-220 border-neutral-300 rounded transition duration-200 shadow-none cursor-pointer"
          >
            Syllabus <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
