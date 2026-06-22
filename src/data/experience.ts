export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Tech in Asia",
    role: "Frontend Engineer",
    period: "May 2017 – Jul 2018",
    points: [
      "Developed new user-facing features using React.js.",
      "Built reusable frontend components and libraries.",
      "Ensured technical feasibility of UI/UX designs.",
      "Optimized applications for performance and scalability.",
      "Validated user inputs before backend submission.",
      "Collaborated closely with designers, engineers, and stakeholders.",
    ],
  },
  {
    company: "Prologic",
    role: "Software Engineer",
    period: "Aug 2014 – Aug 2015",
    points: [
      "Developed frontend and backend features for client web applications.",
      "Participated in application architecture, implementation, and maintenance.",
      "Created technical documentation and project deliverables.",
      "Performed debugging, testing, and issue resolution.",
    ],
  },
  {
    company: "Computesta",
    role: "Quality Assurance",
    period: "Jun 2013 – Jul 2014",
    points: [
      "Created testing documentation and test cases.",
      "Performed application testing and quality validation.",
      "Assisted development teams with bug identification and verification.",
      "Participated in backend-related support activities.",
    ],
  },
];

export interface EducationItem {
  school: string;
  program: string;
  period: string;
}

export const EDUCATION: EducationItem[] = [
  {
    school: "Hacktiv8",
    program: "Full Stack Web Development Bootcamp",
    period: "2017",
  },
  {
    school: "Binus University",
    program: "Bachelor of Information Systems",
    period: "2010 – 2014",
  },
];

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const SKILLS: SkillGroup[] = [
  { label: "Frontend", skills: ["React.js", "Next.js", "Vite", "Remix", "TypeScript", "JavaScript"] },
  { label: "State Management", skills: ["Zustand"] },
  { label: "Styling", skills: ["Tailwind CSS"] },
  { label: "Backend & API", skills: ["REST API", "GraphQL", "Supabase", "Firebase"] },
  { label: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL"] },
  { label: "ORM", skills: ["Prisma", "Drizzle ORM"] },
  { label: "Deployment", skills: ["Vercel", "Heroku"] },
];
