import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Terminal, 
  Settings, 
  Bookmark, 
  Binary, 
  Atom, 
  BookmarkCheck,
  TrendingUp,
  FlaskConical,
  Activity
} from 'lucide-react';
import { technicalSkillGroups } from '../data';

export default function SkillsTab() {
  // Mapping categories to specific icons - Clean theme
  const getGroupIcon = (category: string) => {
    if (category.includes("Programming")) return <Terminal className="h-5 w-5 text-neutral-800" />;
    if (category.includes("Tools")) return <Settings className="h-5 w-5 text-neutral-800" />;
    return <FlaskConical className="h-5 w-5 text-neutral-800" />;
  };

  const getSubTitleText = (category: string) => {
    if (category.includes("Programming")) return "Computational languages & numerical analysis libraries used in simulations";
    if (category.includes("Tools")) return "CAD software, bioinformatic docking platforms, and scheduling tools";
    return "Core metallurgical, basic sciences, and math qualifications completed at IIT Bombay";
  };

  // Divide the massive list of 15 coursework courses into clear branches
  const getCourseworkSubGroups = (courses: string[]) => {
    const materialsScience = courses.filter(c => 
      c.includes("Thermodynamics") || 
      c.includes("Phenomena") || 
      c.includes("Electrochemistry") || 
      c.includes("Corrosion") || 
      c.includes("Structure of Materials")
    );

    const foundationMathPhysics = courses.filter(c => 
      c.includes("Physics") || 
      c.includes("Algebra") || 
      c.includes("Calculus") || 
      c.includes("Chemistry") || 
      c.includes("Equations")
    );

    const computationalAndMisc = courses.filter(c => 
      !materialsScience.includes(c) && !foundationMathPhysics.includes(c)
    );

    return [
      { name: 'Materials Science & Kinetics', list: materialsScience, icon: <Atom className="h-4 w-4 text-neutral-700" /> },
      { name: 'Mathematics & Basic Sciences', list: foundationMathPhysics, icon: <Binary className="h-4 w-4 text-neutral-750" /> },
      { name: 'Multimodal Cores (Robotics/Econ)', list: computationalAndMisc, icon: <Activity className="h-4 w-4 text-neutral-700" /> }
    ];
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
      id="skills-tab-pane"
    >
      <div className="border-b border-neutral-200 pb-4">
        <h2 className="text-xl font-display font-semibold text-neutral-900 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-neutral-900" />
          Technical Skillset & Coursework Directory
        </h2>
        <p className="text-xs text-neutral-500 mt-1 italic font-light">
          Explore her toolbox comprising programming models, engineering design kits, and advanced academic syllabus completed at IIT Bombay.
        </p>
      </div>

      {/* Main Grid for groups */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Programming and Tools stack in columns */}
        <div className="col-span-1 lg:col-span-1 space-y-6 flex flex-col">
          {technicalSkillGroups.slice(0, 2).map((group, idx) => (
            <div 
              key={idx}
              className="rounded-xl border border-neutral-200 bg-white p-5 shadow-none space-y-4 flex-1 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-neutral-100 rounded border border-neutral-200">
                    {getGroupIcon(group.category)}
                  </div>
                  <h3 className="text-sm font-display font-bold text-neutral-900 uppercase tracking-tight">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-neutral-500 italic leading-normal">
                  {getSubTitleText(group.category)}
                </p>
              </div>

              {/* Skills Tag grid */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2.5 py-1 text-[10px] font-mono uppercase text-neutral-800 bg-neutral-50 border border-neutral-200 hover:border-neutral-950 hover:bg-neutral-100 transition duration-150 cursor-default rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Coursework Subgroups */}
        <div className="col-span-1 lg:col-span-2 rounded-xl border border-neutral-200 bg-white p-5 md:p-6 shadow-none space-y-5">
          <div className="space-y-1.5 border-b border-neutral-150 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-neutral-100 rounded border border-neutral-200 text-neutral-800">
                <FlaskConical className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-display font-bold text-neutral-900 uppercase tracking-tight">
                Elite Academic Coursework
              </h3>
            </div>
            <p className="text-xs text-neutral-400 italic">
              {getSubTitleText("Academic Coursework")}
            </p>
          </div>

          {/* Subordinated Course lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans text-xs">
            {getCourseworkSubGroups(technicalSkillGroups[2].skills).map((subGroup, sIdx) => (
              <div 
                key={sIdx}
                className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/20 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <h4 className="font-bold text-neutral-900 text-[10px] uppercase tracking-wider flex items-center gap-1.5 border-b border-neutral-200 pb-1.5">
                    {subGroup.icon}
                    {subGroup.name}
                  </h4>
                  <ul className="space-y-2">
                    {subGroup.list.map((course) => (
                      <li key={course} className="flex gap-2 items-start text-xs text-neutral-600 italic leading-relaxed">
                        <BookmarkCheck className="h-3.5 w-3.5 text-neutral-850 flex-shrink-0 mt-0.5" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
