import { ebAsset } from "./eb-asset";

export type CourseLesson = {
  id: string;
  title: string;
  duration: string;
  subItems?: string[];
};

export type CourseData = {
  slug: string;
  tag: string;
  headline: string;
  /** Part of headline shown in primary (black) color — scroll-paint first segment. */
  headlinePrimary?: string;
  /** Part of headline shown in muted (gray) color — scroll-paint second segment. */
  headlineMuted?: string;
  image: string;
  price: string;
  rating: string;
  reviewCount: string;
  cardTitle: string;
  shortDescription: string;
  lessons: CourseLesson[];
  includes: string[];
  overview: string;
  teacher: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
};

export const COURSES: CourseData[] = [
  {
    slug: "no-code-ai",
    tag: "No-Code AI",
    headline:
      "Learn to create powerful AI applications effortlessly, using no-code tools, step-by-step tutorials, and practical projects, making AI accessible",
    headlinePrimary: "Learn to create powerful AI applications effortlessly, ",
    headlineMuted: "using no-code tools, step-by-step tutorials, and practical projects, making AI accessible",
    image: ebAsset("fd726f2b-6c68-42ec-978f-1cd5f6c50fc7"),
    price: "$105",
    rating: "4.9",
    reviewCount: "(12K+ Reviews)",
    cardTitle: "Build Powerful AI Without Coding",
    shortDescription:
      "Get hands-on with no-code AI tools, create real projects, automate tasks, and launch applications without any programming knowledge.",
    includes: [
      "Step-by-step no-code AI tutorials",
      "Hands-on AI project building",
      "Access to popular AI tools",
      "Practical real-world use cases",
      "Automation and workflow integration",
      "Beginner-friendly, no programming required",
    ],
    lessons: [
      { id: "intro", title: "Introduction to AI and No-Code Tools", duration: "15 Min", subItems: ["What is Artificial Intelligence (AI)?", "Understanding No-Code Tools", "AI + No-Code: How They Work Together?", "What You'll Build & Learn in This Course?"] },
      { id: "understanding", title: "Understanding AI Concepts Without Any Programming Knowledge", duration: "20 Min" },
      { id: "setup", title: "Setting Up Your No-Code AI Development Environment", duration: "25 Min" },
      { id: "data", title: "Data Preparation Techniques for AI Applications", duration: "30 Min" },
      { id: "building", title: "Building Your First AI Model Step by Step", duration: "35 Min" },
      { id: "automation", title: "Automating Tasks with AI Tools Efficiently", duration: "30 Min" },
      { id: "integration", title: "Integrating AI Into Real-World Projects Successfully", duration: "35 Min" },
      { id: "testing", title: "Testing and Debugging Your AI Applications", duration: "25 Min" },
      { id: "deployment", title: "Deploying AI Models Without Writing Any Code", duration: "30 Min" },
      { id: "advanced", title: "Advanced AI Features Using No-Code Platforms", duration: "25 Min" },
    ],
    overview:
      "This course teaches you to build powerful AI applications using no-code tools. Learn step-by-step, work on real projects, automate tasks, and gain practical skills to create AI solutions without any programming experience.",
    teacher: {
      name: "Cameron Williamson",
      role: "No-Code AI Expert",
      avatar: ebAsset("7424fe88-b571-41c2-9c3b-c26ff3505ccd"),
      bio: "Our instructor is a no-code AI expert with extensive experience in building practical AI applications. They guide learners step-by-step, simplifying complex concepts, sharing real-world projects, and empowering students to create impactful AI solutions confidently.",
    },
  },
  {
    slug: "startup-playbook",
    tag: "Startup Playbook",
    headline:
      "Master the art of launching and scaling a startup from idea to revenue, with proven frameworks, real-world strategies, and actionable growth playbooks",
    headlinePrimary: "Master the art of launching and scaling a startup from idea to revenue, ",
    headlineMuted: "with proven frameworks, real-world strategies, and actionable growth playbooks",
    image: ebAsset("e057858d-076d-4cdf-9217-181f03209bb4"),
    price: "$110",
    rating: "4.8",
    reviewCount: "(8K+ Reviews)",
    cardTitle: "Launch & Scale Your Startup Fast",
    shortDescription:
      "Learn how to validate ideas, build an MVP, attract investors, and grow your startup from zero to your first $100K in revenue.",
    includes: [
      "Startup ideation and validation frameworks",
      "MVP building strategies",
      "Fundraising and investor pitch decks",
      "Growth hacking techniques",
      "Team building and culture",
      "Real founder case studies",
    ],
    lessons: [
      { id: "ideation", title: "Finding and Validating Your Startup Idea", duration: "20 Min", subItems: ["Identifying market gaps", "Lean validation methods", "Talking to customers", "Building an idea scorecard"] },
      { id: "mvp", title: "Building Your Minimum Viable Product Quickly", duration: "25 Min" },
      { id: "market", title: "Understanding Your Target Market and Competitors", duration: "20 Min" },
      { id: "pitch", title: "Crafting a Winning Investor Pitch Deck", duration: "30 Min" },
      { id: "fundraising", title: "Fundraising Strategies for Early-Stage Startups", duration: "35 Min" },
      { id: "growth", title: "Growth Hacking Your Way to First 1000 Users", duration: "30 Min" },
      { id: "revenue", title: "Building Sustainable Revenue Streams", duration: "25 Min" },
      { id: "team", title: "Hiring and Managing Your First Team", duration: "30 Min" },
      { id: "scaling", title: "Scaling Operations Without Breaking Things", duration: "35 Min" },
      { id: "exit", title: "Exit Strategies and Long-Term Vision Planning", duration: "20 Min" },
    ],
    overview:
      "This course equips aspiring entrepreneurs with everything they need to launch a successful startup. From finding the right idea to scaling for growth, each module is packed with actionable insights, real case studies, and frameworks used by successful founders.",
    teacher: {
      name: "Marcus Johnson",
      role: "Serial Entrepreneur & Startup Coach",
      avatar: ebAsset("fbf33c8c-a52d-4288-8f64-d14a0e04af42"),
      bio: "Marcus has founded three successful startups and has mentored over 500 entrepreneurs worldwide. He brings real-world experience in fundraising, growth hacking, and scaling teams to every lesson, making complex startup concepts simple and actionable.",
    },
  },
  {
    slug: "figma-mastery",
    tag: "Figma Mastery",
    headline:
      "Become a professional UI/UX designer using Figma, from wireframes to interactive prototypes, design systems, and handoff-ready production assets",
    headlinePrimary: "Become a professional UI/UX designer using Figma, ",
    headlineMuted: "from wireframes to interactive prototypes, design systems, and handoff-ready production assets",
    image: ebAsset("a3eb7ef4-1270-4fca-a0ab-5dd914121cb0"),
    price: "$120",
    rating: "4.9",
    reviewCount: "(15K+ Reviews)",
    cardTitle: "Complete Figma Mastery",
    shortDescription:
      "Master modern UI design workflows using Figma from scratch — components, auto layout, variables, prototyping, and real client projects.",
    includes: [
      "Full Figma interface walkthrough",
      "Component and design system creation",
      "Auto layout and responsive design",
      "Interactive prototyping",
      "Developer handoff and specs",
      "Real-world client project workflows",
    ],
    lessons: [
      { id: "intro", title: "Getting Started with Figma Interface and Tools", duration: "20 Min", subItems: ["Figma workspace overview", "Essential tools and shortcuts", "Frames and groups", "Layers panel deep dive"] },
      { id: "shapes", title: "Shapes, Typography and Color Systems", duration: "25 Min" },
      { id: "components", title: "Building Reusable Components and Variants", duration: "35 Min" },
      { id: "autolayout", title: "Auto Layout for Responsive Design", duration: "30 Min" },
      { id: "designsystem", title: "Creating a Complete Design System", duration: "40 Min" },
      { id: "variables", title: "Figma Variables and Theming", duration: "25 Min" },
      { id: "prototyping", title: "Interactive Prototyping and Animations", duration: "35 Min" },
      { id: "userflows", title: "Designing Complete User Flows", duration: "30 Min" },
      { id: "handoff", title: "Developer Handoff and Design Specs", duration: "20 Min" },
      { id: "project", title: "End-to-End Real Client Project Walkthrough", duration: "45 Min" },
    ],
    overview:
      "This comprehensive Figma course takes you from zero to professional UI/UX designer. You'll learn every feature of Figma — from basic shapes to advanced design systems and prototyping — while working on real-world projects that build your portfolio.",
    teacher: {
      name: "Sophia Hart",
      role: "Senior UI/UX Designer",
      avatar: ebAsset("ae6bac5b-07c1-4430-9285-962fa1a7e58d"),
      bio: "Sophia is a senior designer with 8+ years of experience working with top tech companies. She specialises in design systems and has trained over 10,000 designers through her courses. Her teaching style focuses on practical, project-based learning.",
    },
  },
  {
    slug: "spoken-english",
    tag: "Spoken English",
    headline:
      "Build confidence and fluency in spoken English through immersive practice, real-world conversations, pronunciation coaching, and daily speaking habits",
    headlinePrimary: "Build confidence and fluency in spoken English through immersive practice, ",
    headlineMuted: "real-world conversations, pronunciation coaching, and daily speaking habits",
    image: ebAsset("302c268b-d809-43a8-b8dc-0d434c5c8f89"),
    price: "$0",
    rating: "4.7",
    reviewCount: "(20K+ Reviews)",
    cardTitle: "Spoken English Mastery",
    shortDescription:
      "Improve your spoken English from beginner to confident speaker with structured lessons, live conversation practice, and pronunciation drills.",
    includes: [
      "Daily speaking practice exercises",
      "Pronunciation and accent coaching",
      "Business English communication",
      "Real-world conversation scenarios",
      "Grammar in context (not textbook)",
      "Certificate of completion",
    ],
    lessons: [
      { id: "basics", title: "English Pronunciation Fundamentals", duration: "15 Min", subItems: ["Vowel sounds", "Consonant sounds", "Word stress", "Sentence rhythm"] },
      { id: "greetings", title: "Everyday Greetings and Introductions", duration: "20 Min" },
      { id: "workplace", title: "Professional Workplace Communication", duration: "25 Min" },
      { id: "presentations", title: "Giving Confident Presentations in English", duration: "30 Min" },
      { id: "meetings", title: "Participating in Meetings and Discussions", duration: "25 Min" },
      { id: "writing", title: "Writing Professional Emails and Messages", duration: "20 Min" },
      { id: "idioms", title: "Common Idioms and Phrases in Context", duration: "25 Min" },
      { id: "storytelling", title: "Storytelling and Narrative Techniques", duration: "20 Min" },
      { id: "interviews", title: "Job Interview English Practice", duration: "30 Min" },
      { id: "advanced", title: "Advanced Conversation and Debate Skills", duration: "25 Min" },
    ],
    overview:
      "This free course helps you build genuine English fluency through structured practice and real conversation. You'll move beyond textbook grammar to develop natural spoken English skills used in professional and everyday situations worldwide.",
    teacher: {
      name: "Liam Carter",
      role: "English Language Coach",
      avatar: ebAsset("7424fe88-b571-41c2-9c3b-c26ff3505ccd"),
      bio: "Liam is a certified English language coach with 10 years of experience teaching professionals in over 30 countries. His immersive, conversation-first approach has helped thousands of non-native speakers communicate confidently in global business settings.",
    },
  },
  {
    slug: "data-analytics",
    tag: "Data Analytics",
    headline:
      "Transform raw data into meaningful insights using modern analytics tools, statistical thinking, dashboards, and data storytelling for business decisions",
    headlinePrimary: "Transform raw data into meaningful insights using modern analytics tools, ",
    headlineMuted: "statistical thinking, dashboards, and data storytelling for business decisions",
    image: ebAsset("b2c4228b-1812-4a0b-8a5d-0d6108c00f2c"),
    price: "$0",
    rating: "4.8",
    reviewCount: "(11K+ Reviews)",
    cardTitle: "Data Analytics Career Foundations",
    shortDescription:
      "Learn data analysis from scratch using Excel, SQL, and Tableau. Build dashboards, analyze real datasets, and tell compelling data stories.",
    includes: [
      "Excel, SQL, and Tableau walkthroughs",
      "Real business dataset projects",
      "Data cleaning and transformation",
      "Interactive dashboard creation",
      "Statistical analysis fundamentals",
      "Data storytelling techniques",
    ],
    lessons: [
      { id: "intro", title: "Introduction to Data Analytics and Tools", duration: "20 Min", subItems: ["What is data analytics?", "Excel for analysts", "SQL basics", "Tableau overview"] },
      { id: "excel", title: "Advanced Excel for Data Analysis", duration: "30 Min" },
      { id: "sql", title: "SQL Queries and Database Fundamentals", duration: "35 Min" },
      { id: "cleaning", title: "Data Cleaning and Preparation Techniques", duration: "25 Min" },
      { id: "stats", title: "Statistical Thinking for Business Analysts", duration: "30 Min" },
      { id: "visualization", title: "Data Visualization Principles and Best Practices", duration: "25 Min" },
      { id: "tableau", title: "Building Interactive Dashboards in Tableau", duration: "40 Min" },
      { id: "storytelling", title: "Data Storytelling for Business Stakeholders", duration: "25 Min" },
      { id: "project1", title: "Real-World Project: Sales Performance Analysis", duration: "35 Min" },
      { id: "career", title: "Career Paths and Job Hunting in Data Analytics", duration: "20 Min" },
    ],
    overview:
      "This course gives you a solid foundation in data analytics using the tools that employers actually use. Through hands-on projects with real datasets, you'll develop the skills to clean, analyze, visualize, and present data insights that drive business decisions.",
    teacher: {
      name: "Ethan Brooks",
      role: "Senior Data Analyst",
      avatar: ebAsset("fbf33c8c-a52d-4288-8f64-d14a0e04af42"),
      bio: "Ethan is a senior data analyst with experience at Fortune 500 companies. He simplifies complex analytical concepts and focuses on the practical tools and workflows that help students land their first data role quickly and confidently.",
    },
  },
  {
    slug: "financial-planning",
    tag: "Financial Planning",
    headline:
      "Take full control of your financial future with budgeting, investing, debt management, and wealth-building strategies designed for real-world success",
    headlinePrimary: "Take full control of your financial future with budgeting, investing, ",
    headlineMuted: "debt management, and wealth-building strategies designed for real-world success",
    image: ebAsset("479891dc-6a8c-486c-a8ff-b0c0e542d0cb"),
    price: "$140",
    rating: "4.9",
    reviewCount: "(9K+ Reviews)",
    cardTitle: "Financial Planning Career",
    shortDescription:
      "Master personal and professional financial planning — from budgeting and saving to investing and building long-term wealth.",
    includes: [
      "Personal budgeting and cash flow management",
      "Investment strategies for beginners",
      "Debt elimination frameworks",
      "Retirement and savings planning",
      "Tax efficiency basics",
      "Financial planning for businesses",
    ],
    lessons: [
      { id: "foundations", title: "Financial Planning Foundations and Mindset", duration: "20 Min", subItems: ["Money mindset reset", "Net worth calculation", "Financial goals framework", "Building your financial roadmap"] },
      { id: "budgeting", title: "Budgeting Systems That Actually Work", duration: "25 Min" },
      { id: "debt", title: "Debt Avalanche and Snowball Strategies", duration: "20 Min" },
      { id: "emergency", title: "Building Your Emergency Fund Step by Step", duration: "15 Min" },
      { id: "investing", title: "Introduction to Investing and Asset Classes", duration: "35 Min" },
      { id: "stocks", title: "Stock Market Fundamentals for Beginners", duration: "30 Min" },
      { id: "retirement", title: "Retirement Planning and Pension Strategies", duration: "30 Min" },
      { id: "tax", title: "Tax Efficiency and Legal Tax Reduction", duration: "25 Min" },
      { id: "insurance", title: "Insurance and Risk Management Essentials", duration: "20 Min" },
      { id: "wealth", title: "Wealth Building and Long-Term Passive Income", duration: "35 Min" },
    ],
    overview:
      "This course gives you a complete financial education — from eliminating debt and building an emergency fund to investing and creating long-term wealth. Each lesson is practical and applicable, helping you make smarter financial decisions starting today.",
    teacher: {
      name: "Diana Chen",
      role: "Certified Financial Planner",
      avatar: ebAsset("ae6bac5b-07c1-4430-9285-962fa1a7e58d"),
      bio: "Diana is a Certified Financial Planner with 12 years of experience helping individuals and businesses achieve financial freedom. She breaks down complex financial concepts into clear, actionable steps that anyone can follow regardless of their current situation.",
    },
  },
];

export function getCourse(slug: string): CourseData | undefined {
  return COURSES.find((c) => c.slug === slug);
}
