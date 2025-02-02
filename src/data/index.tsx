import { Layout, Code, Palette } from 'lucide-react';
import { PersonalInfo, Skill, ExperienceItem, BlogPost } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Tarun Luthra",
  title: "Software Engineer",
  bio: "Frontend-focused software engineer specializing in creating exceptional user experiences with modern web technologies. Passionate about responsive design, component architecture, and building performant web applications using React, TypeScript, and modern CSS.",
  github: "https://github.com/tarunluthra123",
  linkedin: "https://www.linkedin.com/in/tarunluthra123/",
  email: "tluthra987@gmail.com",
  resume: "/path-to-your-resume.pdf",
};

export const skills: Skill[] = [
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Frontend Architecture",
    description: "Expert in building scalable component systems and micro-frontends"
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Modern Stack",
    description: "React, TypeScript, Next.js, Tailwind CSS"
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "UI/UX Focus",
    description: "Strong eye for design and commitment to pixel-perfect implementation"
  }
];

export const experiences: ExperienceItem[] = [
  {
    company: "Rippling",
    position: "Software Engineer II",
    period: "2024 - Present",
    description:
      "Leading frontend development initiatives, architecting component libraries, and implementing responsive web applications. Reduced bundle size by 45% through code splitting and lazy loading strategies. Mentoring junior developers in React best practices.",
    tech: ["React", "TypeScript", "React-Query", "Django", "MongoDB"],
    companyLink: "https://www.rippling.com/",
  },
  {
    company: "Scaler by Interviewbit",
    position: "Software Engineer",
    period: "2021 - 2024",
    description:
      "Developed and maintained the company's design system, built reusable UI components, and implemented complex interactive features. Improved application performance by implementing efficient rendering strategies.",
    tech: ["React", "JavaScript", "SCSS", "Redux", "Ruby on Rails", "SQL"],
    companyLink: "https://www.scaler.com/",
  },
  {
    company: "LevelAI",
    position: "Software Engineer",
    period: "2021",
    description:
      "Developed and maintained the company's design system, built reusable UI components, and implemented complex interactive features. Improved application performance by implementing efficient rendering strategies.",
    tech: ["React", "JavaScript", "SCSS", "Webpack"],
    companyLink: "https://thelevel.ai/",
  },
];

export const blogs: BlogPost[] = [
  {
    title: "Building a Scalable Component Library",
    date: "Mar 2024",
    description: "A deep dive into creating maintainable and reusable React components with TypeScript.",
    link: "#"
  },
  {
    title: "Modern CSS Best Practices",
    date: "Feb 2024",
    description: "Exploring CSS architecture, custom properties, and modern layout techniques.",
    link: "#"
  }
];