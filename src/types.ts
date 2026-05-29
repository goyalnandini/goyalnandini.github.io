export interface ScholasticAchievement {
  title: string;
  year: string;
  detail: string;
}

export interface Internship {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  bulletPoints: string[];
}

export interface PositionOfResponsibility {
  role: string;
  organization: string;
  period: string;
  teamSize?: string;
  description: string;
  categories: {
    title: string;
    bullets: string[];
  }[];
}

export interface AcademicProject {
  title: string;
  type: string;
  mentor?: string;
  period: string;
  bullets: string[];
  category: 'Tech & Engineering' | 'Finance & Analytics' | 'AI & ML & Software';
}

export interface Extracurricular {
  category: 'Finance' | 'Competitions' | 'Social' | 'Mentor' | 'Others';
  bullets: string[];
}

export interface TechnicalSkillGroup {
  category: string;
  skills: string[];
}
