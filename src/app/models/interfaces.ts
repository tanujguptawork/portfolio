// Hero Section
export interface HeroData {
  name: string;
  tagline: string;
  roles: string[];
  availability: {
    status: boolean;
    text: string;
  };
  cta: {
    primary: {
      text: string;
      link: string;
    };
    secondary: {
      text: string;
      link: string;
    };
    /** File name under `public/` (e.g. `resume.pdf` → copied to site root on build). */
    resume?: {
      text: string;
      file: string;
    };
  };
}

// Social Media
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// About Section
export interface AboutData {
  bio: string[];
  quickFacts: {
    location: string;
    experience: string;
    education: string;
    availability: {
      status: boolean;
      text: string;
    };
  };
  stats: Stat[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

// Skills Section
export interface SkillsData {
  categories: SkillCategory[];
  certifications: Certification[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface Certification {
  title: string;
  organization: string;
  year: string;
  emoji: string;
}

// Projects Section
export interface ProjectsData {
  projects: Project[];
  categories: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  featured: boolean;
  image: string;
  github: string;
  live: string;
}

// Experience Section
export interface ExperienceData {
  experiences: Experience[];
}

export interface Experience {
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  color: string;
}

// Contact Section
export interface ContactData {
  email: string;
  phone: string;
  location: string;
  availability: string;
  formFields: FormField[];
}

export interface FormField {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
}

// Navbar Section
export interface NavLink {
  href: string;
  label: string;
}
