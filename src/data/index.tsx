import { Layout, Code, Palette } from 'lucide-react';
import { PersonalInfo, Skill, ExperienceItem, BlogPost } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Tarun Luthra",
  title: "Software Engineer",
  bio: "Software engineer specializing in creating exceptional user experiences with modern web technologies. Passionate about responsive design, component architecture, and building performant web applications using React, TypeScript, and modern CSS.",
  github: "https://github.com/tarunluthra123",
  linkedin: "https://www.linkedin.com/in/andromedus/",
  email: "tluthra987@gmail.com",
  resume: "/path-to-your-resume.pdf",
};

export const skills: Skill[] = [
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Robust products",
    description: "Expert in building scalable and well-tested systems"
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Fullstack builder",
    description: "React, TypeScript, Django, Ruby on Rails, SQL, Mongo"
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
      "Leading frontend development initiatives in Custom Objects team. Building new features to enable developer-ecosystem and custom apps. Writing unit and e2e tests for reliability.",
    tech: ["React", "TypeScript", "React-Query", "Django", "MongoDB"],
    companyLink: "https://www.rippling.com/",
  },
  {
    company: "Scaler by Interviewbit",
    position: "Software Engineer",
    period: "2021 - 2024",
    description:
      "Developed and maintained internal career portal and recruiter dashboard, built reusable UI components, and implemented complex interactive features. Improved application performance by implementing efficient rendering strategies.",
    tech: ["React", "JavaScript", "SCSS", "Redux", "Ruby on Rails", "SQL"],
    companyLink: "https://www.scaler.com/",
  },
  {
    company: "LevelAI",
    position: "Software Engineer",
    period: "2021",
    description:
      "Enhanced in-house annotation tool, improved performance, integrated Level app to Talkdesk, and built features to improve AI/ML engineering team's productivity.",
    tech: ["React", "JavaScript", "Django", "SQL"],
    companyLink: "https://thelevel.ai/",
  },
];

export const blogs: BlogPost[] = [
  {
    title: "useFirstRender() - Building a custom React hook",
    description:
      "Building a custom React hook which allows us to check whether the component is currently on the first render.",
    link: "https://tarunluthra.hashnode.dev/usefirstrender-building-a-custom-react-hook",
  },
  {
    title: "JS Proxy for Beginners",
    description:
      "A powerful inbuilt utility to control your JavaScript objects",
    link: "https://tarunluthra.hashnode.dev/js-proxy-for-beginners",
  },
  {
    title: "Pros and Cons of JWTs (JSON Web Tokens)",
    description:
      "Benefits & Drawbacks of JWTs and when & when not to use them.",
    link: "https://tarunluthra.hashnode.dev/pros-and-cons-of-jwts-json-web-tokens",
  },
  {
    title: "How to lock/freeze a Javascript Object ? 🔓",
    description: "Learn how to create truly immutable objects in Javascript.",
    link: "https://tarunluthra.hashnode.dev/how-to-lock-freeze-a-javascript-object-ef180eea9cab",
  },
  {
    title: "JWT Authentication with Django REST Framework— The easy way",
    description: "Learn how to use JWT Authentication with Django REST API.",
    link: "https://tarunluthra.hashnode.dev/jwt-authentication-with-django-rest-framework-the-easy-way-f1c8583aac29",
  },
  {
    title: "Stop using boolean type in your code",
    description: "Why you shouldn't always use booleans in your contracts and what else is better ?",
    link: "https://tarunluthra.hashnode.dev/stop-using-boolean-type-in-your-code",
  },
];