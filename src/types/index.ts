export interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  tech: string[];
  companyLink: string;
}

export interface BlogPost {
  title: string;
  date?: string;
  description: string;
  link: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}