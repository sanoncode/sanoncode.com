export interface Project {
  slug: string;
  title: string;
  period: string;
  summary: string;
  description: string[];
  stack: string[];
  url?: string;
  repo?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "vocca",
    title: "Vocca",
    period: "2025",
    summary:
      "Real-time multilingual chat platform that lets people speaking different languages talk to each other seamlessly.",
    description: [
      "Built a real-time chat application with automatic translation so users speaking different languages can communicate seamlessly.",
      "Implemented authentication, chat rooms, real-time messaging, and live user presence.",
      "Designed responsive, user-friendly interfaces optimized for both desktop and mobile.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Zustand", "Tailwind CSS"],
    url: "https://vocca.id",
    featured: true,
  },
  {
    slug: "kiakia",
    title: "KiaKia",
    period: "2025",
    summary:
      "AI-powered travel planner that generates personalized itineraries in seconds.",
    description: [
      "Developed an AI travel planning app that generates personalized itineraries based on user preferences.",
      "Integrated AI workflows and backend logic using serverless functions.",
      "Built fast, responsive interfaces focused on usability and quick interactions.",
    ],
    stack: ["React", "Vite", "Supabase", "Zustand", "Vercel Functions"],
    url: "https://kiakia-seven.vercel.app",
    featured: true,
  },
  {
    slug: "importplus",
    title: "Importplus",
    period: "2024",
    summary:
      "Import request management platform with dashboard and form workflows for a forwarding company.",
    description: [
      "Built a request management dashboard and form system for a freight forwarding company.",
      "Designed modern data-entry workflows and administrative interfaces.",
      "Focused on maintainability, scalability, and a clean user experience.",
    ],
    stack: ["Next.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    url: "https://importplus.id",
    featured: true,
  },
  {
    slug: "fujibox-custom",
    title: "Fujibox Custom Platform",
    period: "2023",
    summary:
      "Semi-custom packaging platform where customers configure and request custom packaging products.",
    description: [
      "Built a platform allowing customers to configure and request semi-custom packaging products.",
      "Implemented product catalog management and customer inquiry workflows.",
    ],
    stack: ["Remix.js", "GraphQL", "React", "Tailwind CSS"],
    url: "https://pesanankhusus.fujiboxglobal.com",
  },
  {
    slug: "fujibox-legacy",
    title: "Fujibox Legacy",
    period: "2023",
    summary:
      "Semi e-commerce platform for a packaging manufacturing company.",
    description: [
      "Developed a semi e-commerce platform for a packaging manufacturing company.",
      "Built reusable frontend components and optimized customer-facing experiences.",
    ],
    stack: ["Remix.js", "GraphQL", "React", "Tailwind CSS"],
    url: "https://legacy.fujiboxglobal.com",
  },
];
