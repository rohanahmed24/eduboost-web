import { ebAsset } from "./eb-asset";

export type TeacherSkill = {
  title: string;
};

export type TeacherArticle = {
  badge: string;
  text: string;
};

export type TeacherData = {
  slug: string;
  name: string;
  role: string;
  tag: string;
  image: string;
  headline: string;
  experience: string;
  rating: string;
  reviewCount: string;
  aboutTitle: string;
  aboutText: string;
  philosophyTitle: string;
  philosophyText: string;
  whyLearnTitle: string;
  whyLearnText: string;
  skills: string[];
  courses: string[];
};

export const TEACHERS: TeacherData[] = [
  {
    slug: "sophia-marie-hart",
    name: "Sophia Marie Hart",
    role: "Design Systems Expert",
    tag: "Design Systems",
    image: ebAsset("ae6bac5b-07c1-4430-9285-962fa1a7e58d"),
    headline: "Our instructor is a Design Systems Expert with extensive experience in creating efficient, scalable, and user-friendly design systems.",
    experience: "8+ Years",
    rating: "4.9",
    reviewCount: "(12K+ Reviews)",
    aboutTitle: "About Sophia Marie Hart",
    aboutText: "Meet Sophia Marie Hart, a seasoned educator and design system expert. She offers a selection of top-notch courses tailored to equip you with practical skills for career advancement. Explore her most sought-after classes and take your professional journey to the next level!",
    philosophyTitle: "Teaching Philosophy",
    philosophyText: "Explore carefully selected courses designed by experts to equip you with practical skills and boost your confidence in your career. Check out our top-rated courses!",
    whyLearnTitle: "Why Learn from Marie Hart",
    whyLearnText: "Discover a curated selection of courses taught by seasoned professionals, aimed at providing you with hands-on skills and enhancing your career confidence. Take a look at our highly-rated courses!",
    skills: [
      "UI Component Design.",
      "Creating a Style Guide.",
      "Managing Design Tokens.",
      "Discover selected design courses.",
      "Dive into essential design courses.",
      "Browse our exclusive design courses.",
      "Discover courses to enhance your design skills.",
      "Explore design courses for all levels.",
      "Find your next favorite design course.",
      "Check out design courses just for you.",
    ],
    courses: ["startup-playbook", "figma-mastery", "no-code-ai", "financial-planning"],
  },
  {
    slug: "liam-carter",
    name: "Liam Carter",
    role: "English Language Coach",
    tag: "Communication",
    image: ebAsset("7424fe88-b571-41c2-9c3b-c26ff3505ccd"),
    headline: "Our instructor is an English Language Coach with extensive experience in creating engaging, practical, and confidence-building language programs.",
    experience: "10+ Years",
    rating: "4.8",
    reviewCount: "(10K+ Reviews)",
    aboutTitle: "About Liam Carter",
    aboutText: "Liam Carter is a certified English language coach with a passion for helping professionals communicate with confidence. His interactive approach makes learning engaging and effective.",
    philosophyTitle: "Teaching Philosophy",
    philosophyText: "Focus on real-world conversation practice, cultural nuances, and practical vocabulary that professionals need in international business settings.",
    whyLearnTitle: "Why Learn from Liam",
    whyLearnText: "With 10+ years of experience teaching professionals worldwide, Liam brings authentic language learning methods that produce visible results quickly.",
    skills: [
      "Business English Communication.",
      "Presentation Skills.",
      "Meeting & Negotiation English.",
      "Email Writing Excellence.",
      "Cultural Communication Insights.",
      "Pronunciation & Accent Training.",
      "Interview Preparation.",
      "Networking Language Skills.",
      "Public Speaking Techniques.",
      "Confidence Building Methods.",
    ],
    courses: ["spoken-english", "startup-playbook", "no-code-ai"],
  },
  {
    slug: "ethan-brooks",
    name: "Ethan Brooks",
    role: "Senior Data Analyst",
    tag: "Data Analytics",
    image: ebAsset("fbf33c8c-a52d-4288-8f64-d14a0e04af42"),
    headline: "Our instructor is a Senior Data Analyst with extensive experience in creating actionable, data-driven insights for Fortune 500 companies.",
    experience: "8+ Years",
    rating: "4.9",
    reviewCount: "(8K+ Reviews)",
    aboutTitle: "About Ethan Brooks",
    aboutText: "Ethan Brooks brings 8+ years of data analytics experience from Fortune 500 companies. He specializes in transforming complex data concepts into practical, employable skills.",
    philosophyTitle: "Teaching Philosophy",
    philosophyText: "Learn by doing. Every module includes hands-on projects with real datasets, giving you a portfolio-ready learning experience.",
    whyLearnTitle: "Why Learn from Ethan",
    whyLearnText: "Ethan has helped hundreds of students transition into data careers. His practical, project-based approach ensures you're job-ready upon completion.",
    skills: [
      "Excel Advanced Formulas.",
      "SQL Database Queries.",
      "Tableau Dashboard Creation.",
      "Data Visualization Principles.",
      "Statistical Analysis Basics.",
      "Python for Data Analysis.",
      "Business Intelligence Tools.",
      "Real-World Project Workflows.",
      "Data Storytelling Techniques.",
      "Career Path Guidance.",
    ],
    courses: ["data-analytics", "financial-planning", "no-code-ai"],
  },
];

export function getTeacher(slug: string): TeacherData | undefined {
  return TEACHERS.find((t) => t.slug === slug);
}

export function getTeachers(): TeacherData[] {
  return TEACHERS;
}
