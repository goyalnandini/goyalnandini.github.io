import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  personalInfo 
} from './data';
import { 
  GraduationCap, 
  Briefcase, 
  Projector, 
  ShieldCheck, 
  Terminal, 
  Compass, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Calendar,
  Layers,
  Printer
} from 'lucide-react';

import OverviewTab from './components/OverviewTab';
import ExperienceTab from './components/ExperienceTab';
import ProjectsTab from './components/ProjectsTab';
import PoRTab from './components/PoRTab';
import SkillsTab from './components/SkillsTab';
import ExtracurricularsTab from './components/ExtracurricularsTab';

type TabType = 'overview' | 'experience' | 'projects' | 'por' | 'skills' | 'extracurriculars';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  // Nav configuration
  const tabsList = [
    { id: 'overview' as TabType, label: 'Dashboard Overview', icon: <Layers className="h-4 w-4" /> },
    { id: 'experience' as TabType, label: 'Work Experience', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'projects' as TabType, label: 'Key Projects', icon: <Projector className="h-4 w-4" /> },
    { id: 'por' as TabType, label: 'Leadership Roles', icon: <ShieldCheck className="h-4 w-4" /> },
    { id: 'skills' as TabType, label: 'Skills & Syllabus', icon: <Terminal className="h-4 w-4" /> },
    { id: 'extracurriculars' as TabType, label: 'Extracurriculars', icon: <Compass className="h-4 w-4" /> },
  ];

  // Callback to jump tabs from the overview page shortcuts
  const handleNavigateToTab = (tabId: string) => {
    setActiveTab(tabId as TabType);
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab onNavigateToTab={handleNavigateToTab} />;
      case 'experience':
        return <ExperienceTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'por':
        return <PoRTab />;
      case 'skills':
        return <SkillsTab />;
      case 'extracurriculars':
        return <ExtracurricularsTab />;
      default:
        return <OverviewTab onNavigateToTab={handleNavigateToTab} />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="portfolio-root-container"
      className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans selection:bg-neutral-100 selection:text-neutral-900"
    >

      {/* Main Responsive Grid container */}
      <div className="max-w-[1440px] mx-auto p-4 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Core Bio & Media coordinates [Col-Span-3] */}
          <header 
            id="bio-sidebar"
            className="lg:col-span-3 space-y-6"
          >
            {/* Main Badge Card */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-none space-y-5">
              
              {/* Profile Avatar Graphics - Clean Minimal Look */}
              <div className="relative mx-auto w-24 h-24 rounded-full bg-neutral-900 p-0.5 shadow-none flex items-center justify-center border border-neutral-200">
                <div className="w-full h-full bg-neutral-50 rounded-full flex flex-col items-center justify-center select-none border border-neutral-150">
                  {/* Display initials with minimalist styling */}
                  <span className="text-2xl font-display font-light text-neutral-900 tracking-widest uppercase">NG</span>
                  <span className="text-[7px] font-mono tracking-widest text-neutral-500 mt-1 uppercase">IIT Bombay</span>
                </div>
                {/* Micro Verified badge */}
                <span className="absolute bottom-1 right-1 p-1 bg-neutral-950 text-white rounded-full border border-white">
                  <ShieldCheck className="h-3 w-3 font-bold" />
                </span>
              </div>

              {/* General Description */}
              <div className="space-y-1.5">
                <h2 className="text-xl font-display font-bold text-neutral-900 tracking-tighter uppercase">{personalInfo.name}</h2>
                <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest font-semibold">Materials Scientist & Manager</p>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-[220px] mx-auto mt-2 italic font-light">
                  Metallurgical Engineering Undergraduate with Minor Specialization in Management is an explorer.
                </p>
              </div>

              {/* Coordinates List details */}
              <div className="border-t border-neutral-100 pt-4 text-left space-y-3 text-xs text-neutral-650">
                <div className="flex gap-2.5 items-center">
                  <GraduationCap className="h-4 w-4 text-neutral-400 flex-shrink-0" />
                  <span className="font-light">{personalInfo.program}</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <MapPin className="h-4 w-4 text-neutral-400 flex-shrink-0" />
                  <span className="font-light">Mumbai, India</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Calendar className="h-4 w-4 text-neutral-400 flex-shrink-0" />
                  <span className="font-light">DOB: {personalInfo.dob} | Female</span>
                </div>
              </div>

              {/* Social Channels row */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-center gap-2">
                <a 
                  id="link-linkedin"
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-neutral-200 hover:border-black hover:bg-neutral-50 rounded-lg text-neutral-500 hover:text-black transition-colors"
                  title="LinkedIn Account"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  id="link-github"
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-neutral-200 hover:border-black hover:bg-neutral-50 rounded-lg text-neutral-500 hover:text-black transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a 
                  id="link-email"
                  href={personalInfo.socials.emailLink}
                  className="p-2 border border-neutral-200 hover:border-black hover:bg-neutral-50 rounded-lg text-neutral-500 hover:text-black transition-colors"
                  title="Direct Mail"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="hidden lg:block rounded-xl border border-neutral-200 bg-white p-3 shadow-none space-y-1">
              <span className="block px-3 py-1.5 text-[9px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-2 font-mono">Portfolio Directory</span>
              {tabsList.map((tab) => (
                <button
                  key={tab.id}
                  id={`tab-btn-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-3 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-neutral-900 text-white shadow-none' 
                      : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50/80'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Resume Print Action */}
            <button
              id="resume-print-action-btn"
              onClick={handlePrint}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-neutral-900 hover:bg-neutral-900 hover:text-white rounded-lg text-neutral-900 font-semibold text-xs transition duration-200 cursor-pointer shadow-none uppercase tracking-wider font-mono"
            >
              <Printer className="h-4 w-4" />
              Print Portfolio CV
            </button>
          </header>

          {/* Sticky Tab Menu for Tablet and Mobile devices viewports */}
          <div className="lg:hidden col-span-1 bg-white border border-neutral-200 rounded-xl p-2 shadow-none flex overflow-x-auto gap-1 items-center scrollbar-none">
            {tabsList.map((tab) => (
              <button
                key={tab.id}
                id={`tab-mobile-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-neutral-900 text-white' 
                    : 'text-neutral-500 hover:text-neutral-900 border border-neutral-50 hover:bg-neutral-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label.split(' ').pop()}</span>
              </button>
            ))}
          </div>

          {/* Column 2: Dashboard central Canvas Viewport [Col-Span-9] */}
          <main 
            id="portfolio-viewport"
            className="lg:col-span-9 bg-transparent h-full"
          >
            <AnimatePresence mode="wait">
              {renderActiveTabContent()}
            </AnimatePresence>
          </main>

        </div>
      </div>
    </div>
  );
}
