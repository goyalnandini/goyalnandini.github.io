import { 
  ScholasticAchievement, 
  Internship, 
  PositionOfResponsibility, 
  AcademicProject, 
  Extracurricular,
  TechnicalSkillGroup 
} from './types';

export const personalInfo = {
  name: 'Nandini Goyal',
  rollNumber: '23B2486',
  program: 'B.Tech. in Metallurgical Engineering and Materials Science',
  minor: 'Minor degree in Management from Shailesh J. Mehta School of Management, IIT Bombay',
  institution: 'Indian Institute of Technology Bombay (IIT Bombay)',
  gpa: '8.66 / 10',
  graduationYear: '2027',
  gender: 'Female',
  dob: '14/08/2005',
  email: 'dkritarth@gmail.com', // User email
  address: 'IIT Bombay, Powai, Mumbai, Maharashtra 400076, India',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com/in',
    emailLink: 'mailto:dkritarth@gmail.com',
  },
  educationHistory: [
    {
      examination: 'Graduation',
      university: 'IIT Bombay',
      institute: 'IIT Bombay',
      year: '2027',
      cpi: '8.66 / 10'
    },
    {
      examination: 'Intermediate (12th / ISC)',
      university: 'ISC',
      institute: 'Hiranandani Foundation School, Thane',
      year: '2023',
      cpi: '95.40%'
    },
    {
      examination: 'Matriculation (10th / CBSE)',
      university: 'CBSE',
      institute: 'Amity International School, Sector 46, Gurgaon',
      year: '2021',
      cpi: '99.60%'
    }
  ]
};

export const scholasticAchievements: ScholasticAchievement[] = [
  {
    title: 'AA Grades in Exemplary Semesters',
    year: '2025',
    detail: 'Awarded AA grades for exemplary performance in 7 courses at IIT Bombay, with an SPI of 9.70/10 in the 4th Semester.'
  },
  {
    title: 'Organizational Behavior Research',
    year: '2025',
    detail: 'Pursuing a research project in Organizational Behavior under Prof. Sudhanshu Maheshwari at the Indian Institute of Management (IIM) Kozhikode.'
  },
  {
    title: 'Top Percentile in JEE Advanced',
    year: '2023',
    detail: 'Ranked among the top 4.5% in the prestigious Joint Entrance Examination (JEE) Advanced out of over 180,000 highly competitive appearing candidates.'
  },
  {
    title: 'Elite Score in JEE Mains',
    year: '2023',
    detail: 'Achieved an outstanding 99.50 percentile score in the JEE Mains Examination, attempted by over 1.3 Million+ candidates nationwide.'
  }
];

export const internships: Internship[] = [
  {
    role: 'Polysilicon Project Intern',
    company: 'Reliance Solar PV',
    period: 'May 2025 - Jul 2025',
    description: 'Supported India’s largest upcoming solar supply chain by enabling the modern paradigm shift from electronic-grade to solar-grade polysilicon production.',
    bulletPoints: [
      'Optimized chemical production plants using multiple complex ASPEN simulations, modifying bypass hardware configurations to conserve over 18 MMkcal/hr thermal energy in solar raw material conversion.',
      'Simulated active impurity diffusion in refining polysilicon structures using Crank-Nicolson numerical methods in Python, greatly optimizing purity yields and reactor lifetime reliability.'
    ]
  },
  {
    role: 'Product Management Intern',
    company: 'OpenCubicles Technologies',
    period: 'May 2024 - Jun 2024',
    description: 'Fast-growing AI-driven EdTech startup behind Memli.app—a customized vocabulary platform utilizing Large Language Models and cognitive science to improve exam preparations.',
    bulletPoints: [
      'Evaluated and benchmarked 10+ Large Language Models (LLMs) across critical metrics of scalability, reasoning latency, and output accuracy to find the supreme learner model for Memli.app.',
      'Conducted extensive automated QA and rigorous product benchmarking, detecting 15+ high-priority software bugs and guiding UI/UX enhancements used in active platform releases.'
    ]
  },
  {
    role: 'Marketing Intern',
    company: 'Thinkingstone AI',
    period: 'Jun 2025 - Jul 2025',
    description: 'Innovative AI startup building advanced voice recognition applications tailored for the global hospitality sector to minimize operational friction.',
    bulletPoints: [
      'Engineered multi-channel content rollout strategies for LinkedIn and Instagram, driving measurable increases in inbound organic audience engagement and overall brand reach.',
      'Analyzed competitive landscapes and marketing architectures of 5+ industry competitors to craft highly reliable data-driven user personas and target market segmentations.'
    ]
  }
];

export const positionsOfResponsibility: PositionOfResponsibility[] = [
  {
    role: 'Dry Lab Subsystem Head',
    organization: 'Team iGEM, IIT Bombay',
    period: 'Dec 2024 - Present',
    teamSize: '20+',
    description: 'Co-leading a premier 20+ member cross-functional team engineering biofilm-targeted protease therapeutics, representing IIT Bombay globally at the iGEM Competition in Paris, France.',
    categories: [
      {
        title: 'Outreach & Funding',
        bullets: [
          'Engaged with 5+ elite principal researchers from Bhabha Atomic Research Centre (BARC) and Department of Biotechnology (DBT) to experimentally validate clinical biofilm treatment targeting pathways.',
          'Secured over INR 1.2M in funding through competitive Institute of Eminence (IoE) and WRCB research grants to build out computational dry lab equipment and run test pipelines.'
        ]
      },
      {
        title: 'Management & Event Leadership',
        bullets: [
          'Organized BioQuest, a massive synthetic biology challenge pulling in 1,000+ pan-India registrations translating to over 250+ hours of continuous content delivery.',
          'Led local community science outreach, delivering interactive hands-on banana DNA extraction workshops to over 500+ school children in school districts across Mumbai.'
        ]
      },
      {
        title: 'Technical Contributions',
        bullets: [
          'Engineered ESP protease computational models to selectively degrade S. aureus biofilm matrices while dynamically preserving critical host extra-cellular matrix (ECM) structures.',
          'Utilized HADDOCK structural docking and ThermoMPNN models to reduce ESP off-target interaction on critical blood proteins such as fibrinogen.',
          'Successfully modeled thermodynamic IL-33 cytokine molecular bindings to map inflammatory responses in Atopic Dermatitis, a condition affecting 20% of the target population.'
        ]
      }
    ]
  },
  {
    role: 'Institute Student Mentor & Academic Mentor',
    organization: 'Student Mentorship Program, IIT Bombay',
    period: 'Jun 2025 - Present',
    description: 'Earned distinction within a competitive 2-tier institute mentorship framework aiming to shepherd the academic and personal integration of junior students.',
    categories: [
      {
        title: 'Institute Student Mentorship',
        bullets: [
          'Selected as one of only 25 elite third-year ISMP mentors from a huge cohort of 1,400+ eligible candidates through peer reviews, academic audits, and intensive interviews.',
          'Entrusted with driving transitional guidance, professional planning, and soft-skill development as an energetic peer advisor.'
        ]
      },
      {
        title: 'Department Academic Mentorship',
        bullets: [
          'Represented Shailesh J. Mehta structures and MEMS mentorship programs, offering direct one-on-one academic, behavioral, and curriculum consulting for 6 sophomores.',
          'Co-managed the official MEMS D-AMP outreach media assets, curating educational content for an audience of 500+ students on Instagram.'
        ]
      }
    ]
  },
  {
    role: 'Institute BioX Convenor',
    organization: 'BioX, Institute Technical Council, IIT Bombay',
    period: 'Apr 2024 - Mar 2025',
    description: 'One of just 5 executive student leaders elected to manage the professional academic portfolio of the premier biotechnology student branch of the Technical Council.',
    categories: [
      {
        title: 'Academic Program Design',
        bullets: [
          'Designed and deployed 2 full technical courses ("Introduction to Protein Engineering" and "Immunology and Vaccinology") to 100+ students as part of IIT Bombay’s Learners\' Space initiative.',
          'Curated and hosted expert-led public forums, including an interactive seminar on "AI Transformations in Healthcare" featuring keynotes from 5+ active doctoral scholars.'
        ]
      }
    ]
  }
];

export const academicProjects: AcademicProject[] = [
  {
    title: 'Advitya Project Risk & Cost Analysis',
    type: 'Course Project',
    mentor: 'Prof. Karuna Jain',
    period: 'Aug 2024 - Nov 2024',
    category: 'Finance & Analytics',
    bullets: [
      'Reduced simulated project risks by 25% and overall budget costs by 15% on a real-world scale INR 10 Million capital infrastructure plan utilizing contingency planning and Earned Value Management (EVM) parameters.',
      'Achieved strict cost optimizations and compressed milestone scheduling timelines by 20% through rigorous critical path analysis, resource balancing, and modeling in ProjectLibre.'
    ]
  },
  {
    title: 'Energy Storage Case Challenge',
    type: 'Competition Case Study',
    mentor: 'Dept. of Energy Science and Engg.',
    period: 'Mar 2025 - Apr 2025',
    category: 'Finance & Analytics',
    bullets: [
      'Placed 3rd out of 150+ teams by proposing a comprehensive, financially viable national expansion roadmap for INA Solar’s energy storage business lines.',
      'Proposed key target allocations into Commercial & Industrial (C&I) and utility-scale Battery Energy Storage Systems (BESS), backed by deep feasibility metrics on Sodium-ion battery localized manufacturing.'
    ]
  },
  {
    title: 'ConsultX Case Analysis',
    type: 'Consulting Club Project',
    mentor: 'Consult Club, IIT Bombay',
    period: 'Sep 2024 - Nov 2024',
    category: 'Finance & Analytics',
    bullets: [
      'Collaborated in a focused 3-member team analyzing massive court delays contributing to the 50 Million+ pending court caseload bottleneck across current Indian legal systems.',
      'Designed and wireframed a "Court Case Tracker" platform to provide automated, transparent status updates to citizens while decreasing overall operational friction.',
      'Mapped and analyzed 20+ intricate legal steps to define system-wide administrative delays and propose key policy corrections.'
    ]
  },
  {
    title: 'Semi-Infinite Slab Heat Analysis',
    type: 'Course Project',
    mentor: 'Prof. Depoo Kumar',
    period: 'Jan 2025 - May 2025',
    category: 'Tech & Engineering',
    bullets: [
      'Examined transient heat transfer inside semi-infinite metallurgical slabs by solving the 2D heat equation across complex real-time spatial and temporal boundaries.',
      'Developed a robust finite-difference numerical solver program in Python using dynamic programming techniques to plot temperature gradients.',
      'Calculated Biot and Fourier dimensionless numbers to predict heat conduction velocities and thermal saturation metrics during rapid cooling phases.'
    ]
  },
  {
    title: 'Robotic Arm Control System',
    type: 'Course Project',
    mentor: 'Prof. Abhishek Gupta',
    period: 'Jan 2025 - May 2025',
    category: 'Tech & Engineering',
    bullets: [
      'Built a fully functional 5-axis robotic arm system controlled remotely via flex sensors and Inertial Measurement Units (IMUs) fitted onto a human tracking glove.',
      'Implemented inverse kinematics equations and real-time noise-filtering data processors on an ESP32 microcontroller to translate hand coordinate gestures to servo motors.',
      'Calibrated and synchronized motion profiles to showcase smooth, low-latency, and high-accuracy physical operator replicate-positioning.'
    ]
  },
  {
    title: 'PID Self-Stabilizing Quadcopter',
    type: 'Course Project',
    mentor: 'Prof. Joseph John, Prof. S.V. Prabhu',
    period: 'Jan 2024 - Apr 2024',
    category: 'Tech & Engineering',
    bullets: [
      'Designed and engineered a quadcopter flight platform featuring proportional-integral-derivative (PID) control feedbacks to satisfy real-time self-stabilization requirements.',
      'Programmed NodeMCU modules to enable wireless telemetry, allowing direct, reliable command controls from a remote mobile interface over Wi-Fi channels.',
      'Integrated physical gyroscopes, accelerometers, and Arduino boards to gather spatial state values and prevent sudden rollover drifts.'
    ]
  },
  {
    title: 'Programmable LED Array Wheel',
    type: 'Course Project',
    mentor: 'Prof. Tanushree Choudhary',
    period: 'Aug 2024 - Nov 2024',
    category: 'Tech & Engineering',
    bullets: [
      'Engineered an persistence-of-vision (POV) rotating LED display wheel driven by a DC servo motor and calibrated with an Arduino Nano system.',
      'Generated custom multiplexing scripts applying trigonometric speed offsets to project alphanumeric messages, decorative geometric shapes, and stars.',
      'Implemented smooth pulse-width modulation (PWM) transitions to enable fine dimming and shadowless movement profiles.'
    ]
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    type: 'Summer of Science Project',
    mentor: 'Maths and Physics Club, IIT Bombay',
    period: 'May 2024 - Jul 2024',
    category: 'AI & ML & Software',
    bullets: [
      'Gained deep foundational knowledge of core artificial intelligence paradigms, including supervised, unsupervised, and reinforcement learning strategies.',
      'Constructed and benchmarked diverse learning models (Linear/Logistic Regression, KNNs, Decision Trees, and Naive Bayes) to touch 90% accuracy on standard tabular datasets.',
      'Tuned Deep Learning architectures—including Convolutional Nueral Networks (CNNs) for image detection and Recurrent Neural Networks (RNNs) for sequential text analysis—yielding 95% training validation.'
    ]
  },
  {
    title: 'Equity Research Analysis',
    type: 'Finance Club Competition',
    mentor: 'Finance Club, IIT Bombay',
    period: 'Sep 2024 - Nov 2024',
    category: 'Finance & Analytics',
    bullets: [
      'Evaluated stock fundamentals and financial ratios (P/E, Return on Equity, Asset Turnovers, and EPS growth rates) to determine underpriced public candidates.',
      'Prepared a $1.2 Billion valuation report on Honasa Consumer (Mamaearth) during a phase of rising direct-to-consumer competition, evaluating corporate risks via rigorous SWOT.',
      'Projected 20% CAGR potential by assessing historical balance sheets, capital requirements, and leverage trends.'
    ]
  },
  {
    title: 'Portfolio Management Optimization',
    type: 'Finance Club Competition',
    mentor: 'Finance Club, IIT Bombay',
    period: 'May 2025 - Jun 2025',
    category: 'Finance & Analytics',
    bullets: [
      'Engineered an INR 8 Million+ virtual asset investment portfolio distributed across multi-asset categories to target INR 70 Million in target milestones over an 8-year horizon.',
      'Screened potential growth equities utilizing strict criteria, including ROE > 15% and Low Debt-to-Equity, investing in secular trends like EVs and energy transition infrastructure.',
      'Allocated 25% to gold ETFs and Sovereign Gold Bonds (SGBs) for volatility hedging, optimizing tax-efficient annual withdrawals.'
    ]
  }
];

export const extracurriculars: Extracurricular[] = [
  {
    category: 'Finance',
    bullets: [
      'Designed and backtested quantitative, algorithmic value investing strategies utilizing Python pandas and historical stock datasets.',
      'Completed a comprehensive 30+ hour "Financial Markets" certification course offered by Yale University (via Coursera).'
    ]
  },
  {
    category: 'Competitions',
    bullets: [
      'Secured 1st Place in the National Space Day Competition for designing Martian Soil agricultural plant habitats, providing biological support systems for Martian colonists.',
      'Represented in the IIT Bombay Code Wars tournament, writing real-time competitive logic scripts against opposing players inside a custom automated game engine.',
      'Placed 3rd in the national Energy Case Challenge, designing storage-optimized market entry solutions for solar developers.'
    ]
  },
  {
    category: 'Social',
    bullets: [
      'Actively cleaned up local shorelines, participating in the Versova Beach Cleanup community drives that successfully extracted 3,000+ kgs of maritime plastics.',
      'Conducted educational ABO blood testing and immunology demonstrations for 40+ underprivileged regional students in collaboration with the INYAS Foundation.',
      'Co-authored the published book "Stray Souls: An Unconventional Guide to Caring for Street Animals"—available globally on Kindle to assist rescue networks.'
    ]
  },
  {
    category: 'Mentor',
    bullets: [
      'Mentored a 3-member sophomore team in the Entrepreneurship & Business (EnB) Competition to mature an airship-based modern advertising startup deck.',
      'Instructed and guided 2 teams of underprivileged youths in building innovative mobile applications addressing local community constraints of hygiene and waste disposal.'
    ]
  },
  {
    category: 'Others',
    bullets: [
      'Committed to 1 full year of intensive training under the National Cadet Corps (NCC) and qualified to sit for the nation-wide recognized "B" Certificate Examination.',
      'Elected to host the prestigious Indigo-Saga Competition under IIT Bombay’s signature cultural festival Mood Indigo, presenting before a crowd of 500+ attendees.',
      'Studied French as a foreign language for 3 years, building conversational speed, read-write familiarity, and structural comprehension.'
    ]
  }
];

export const technicalSkillGroups: TechnicalSkillGroup[] = [
  {
    category: 'Programming Languages & Core Libraries',
    skills: ['Python', 'C++', 'HTML', 'NumPy', 'Pandas', 'Matplotlib', 'Git', 'LaTeX']
  },
  {
    category: 'Engineering & Modeling Tools',
    skills: ['ASPEN', 'SolidWorks', 'MATLAB', 'AutoCAD', 'HADDOCK Docking', 'ThermoMPNN', 'LTspice', 'Figma', 'Canva', 'ProjectLibre', 'Visual Studio']
  },
  {
    category: 'Advanced Academic Coursework',
    skills: [
      'Thermodynamics of Materials',
      'Transport Phenomena and Chemical Kinetics',
      'Electro-chemistry and Corrosion',
      'Structure of Materials',
      'Quantum Physics',
      'Classical Physics',
      'Organic & Inorganic Chemistry',
      'Physical Chemistry',
      'Differential & Multi-variable Calculus',
      'Linear Algebra',
      'Differential Equations',
      'Molecular Biophysics',
      'Robotics & Motion Kinematics',
      'Managerial Economics',
      'Computer Programming & Spatial Structures'
    ]
  }
];
