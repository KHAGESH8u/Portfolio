import { ProjectItem, SkillCategory, TimelineItem, AchievementItem } from '../types';

export interface AboutData {
  title: string;
  subtitle: string;
  bioParagraph1: string;
  bioParagraph2: string;
  quickFacts: {
    label: string;
    value: string;
  }[];
  focusAreas: string[];
}

export const HERO_DATA = {
  statusBadge: "Available for Senior & Advisory Opportunities",
  location: "San Francisco, CA & Global Remote",
  greeting: "Hello, my name is",
  name: "Alexander Vance",
  role: "AI & Full-Stack Systems Engineer",
  tagline: "Bridging complex artificial intelligence models with intuitive, high-performance web experiences.",
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  ctaPrimary: "View Projects",
  ctaSecondary: "Get in Touch"
};

export const ABOUT_DATA: AboutData = {
  title: "About Me",
  subtitle: "Engineer, Architect & Creative Developer",
  bioParagraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed felis ut arcu bibendum elementum. Ut fermentum sapien nec mauris dapibus, non sodales urna sagittis. Vivamus ac dolor ut justo cursus varius vitae non sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet est nec ipsum consequat auctor ac ac sapien.",
  bioParagraph2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque velit ac tellus finibus, vel dictum mauris pulvinar. Nullam et ex sit amet eros eleifend vulputate. Integer id nulla vel est suscipit bibendum. Fusce fermentum leo nec lectus facilisis, at commodo eros pharetra. Proin facilisis felis non dolor gravida cursus.",
  quickFacts: [
    { label: "Experience", value: "7+ Years" },
    { label: "Shipped Projects", value: "24+ Products" },
    { label: "Open Source", value: "12k+ Stars" },
    { label: "Global Users", value: "500k+ Active" }
  ],
  focusAreas: [
    "Full-Stack Web Architectures",
    "Real-time WebGL & Creative Coding",
    "Applied Machine Learning & LLMs",
    "Distributed Backend Infrastructure"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages-core",
    title: "Languages & Core Runtimes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fundamental programming languages and core runtime environments.",
    iconName: "Code2",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "Python", level: 92 },
      { name: "Rust", level: 85 },
      { name: "Go", level: 88 },
      { name: "JavaScript (ESNext)", level: 96 },
      { name: "SQL & PostgreSQL", level: 90 },
      { name: "C++", level: 82 }
    ]
  },
  {
    id: "frontend-creative",
    title: "Frontend & Creative Tech",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Modern UI frameworks, 3D graphics engines, and motion libraries.",
    iconName: "Palette",
    skills: [
      { name: "React 18 / Next.js", level: 96 },
      { name: "Three.js / React Three Fiber", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 94 },
      { name: "GLSL & Shaders", level: 84 },
      { name: "Web Audio API", level: 80 },
      { name: "Vite & Build Tooling", level: 90 }
    ]
  },
  {
    id: "ai-systems",
    title: "AI & Machine Learning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deep learning frameworks, embeddings, and intelligent agent workflows.",
    iconName: "Brain",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 86 },
      { name: "LangChain & LlamaIndex", level: 92 },
      { name: "Vector Databases", level: 91 },
      { name: "Hugging Face Models", level: 89 },
      { name: "Fine-Tuning & Quantization", level: 85 }
    ]
  },
  {
    id: "backend-cloud",
    title: "Backend & Cloud Infrastructure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scalable cloud architectures, container orchestration, and serverless.",
    iconName: "Cloud",
    skills: [
      { name: "Docker & Kubernetes", level: 89 },
      { name: "Amazon Web Services (AWS)", level: 91 },
      { name: "FastAPI & Express", level: 94 },
      { name: "Redis & Caching", level: 88 },
      { name: "GraphQL & RESTful APIs", level: 93 },
      { name: "CI/CD & GitHub Actions", level: 90 }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ai-workspace-platform",
    title: "AI WORKSPACE",
    subtitle: "Synapse: Real-Time Collaborative Canvas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A modern web application allowing cross-functional engineering teams to orchestrate AI workflows, draft architectures, and deploy intelligent assistance in real time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "TypeScript", "Python", "FastAPI", "WebSockets"],
    metrics: [
      { label: "Active Users", value: "45,000+" },
      { label: "Sync Latency", value: "< 16ms" },
      { label: "Productivity", value: "+42%" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "spatial-analytics-dashboard",
    title: "DATA ANALYTICS",
    subtitle: "Horizon: Spatial Observability & Metrics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. An interactive data observability platform featuring 3D dimensional cluster visualization, performance telemetry, and automated anomaly alerts.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Three.js", "Tailwind CSS", "Go", "PostgreSQL"],
    metrics: [
      { label: "Daily Events", value: "12M+" },
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Crash Rate", value: "< 0.01%" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "fintech-payments-app",
    title: "MODERN FINTECH",
    subtitle: "Aura: Digital Asset & Wealth Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A modern banking interface offering intelligent portfolio balancing, real-time transaction streaming, and institutional-grade biometric security.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    tags: ["React Native", "TypeScript", "Node.js", "Stripe API", "AWS"],
    metrics: [
      { label: "Volume Processed", value: "$80M+" },
      { label: "App Rating", value: "4.9 / 5.0" },
      { label: "Conversion", value: "+28%" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "creative-cloud-studio",
    title: "CREATIVE COMPUTING",
    subtitle: "Prism: Shader Studio & Asset Pipeline",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A browser-based creative coding suite allowing digital artists to build, preview, and export high-performance GLSL shader effects and 3D assets.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    tags: ["WebGL", "Three.js", "WebAssembly", "Rust", "Tailwind CSS"],
    metrics: [
      { label: "Community Shaders", value: "18,000+" },
      { label: "Export Speed", value: "Instant" },
      { label: "Satisfaction", value: "98%" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "exp-1",
    period: "2024 - Present",
    role: "Lead Machine Learning Architect",
    organization: "Neural Dynamics Labs",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leading full-stack architecture for enterprise generative AI workflows, scaling platform infrastructure from inception to hundreds of thousands of users.",
    type: "experience",
    highlights: [
      "Architected distributed agent workflows reducing model execution latency by 35%.",
      "Mentored a team of 8 frontend and machine learning engineers across two time zones.",
      "Collaborated with product leadership to ship the flagship generative canvas."
    ]
  },
  {
    id: "exp-2",
    period: "2022 - 2024",
    role: "Senior Full-Stack & Graphics Engineer",
    organization: "Quantum Computing Initiative",
    location: "Boston, MA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Built interactive WebGL simulation dashboards and distributed client-server applications for scientific computing teams.",
    type: "experience",
    highlights: [
      "Engineered real-time 3D simulation tools utilized daily by academic partners.",
      "Spearheaded transition to TypeScript and modern micro-frontend architecture.",
      "Reduced build and bundle deployment times by over 40%."
    ]
  },
  {
    id: "exp-3",
    period: "2020 - 2022",
    role: "Software Engineer",
    organization: "Synapse Computational Lab",
    location: "Austin, TX",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Designed frontend user interfaces and RESTful backend APIs for data visualization and client analytics.",
    type: "experience",
    highlights: [
      "Developed high-throughput data tables and interactive chart components.",
      "Authored extensive documentation and component design guidelines."
    ]
  },
  {
    id: "edu-1",
    period: "2018 - 2020",
    role: "Master of Science in Computer Science & AI",
    organization: "Institute of Advanced Technology",
    location: "Cambridge, MA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graduate studies in machine learning, distributed computing systems, and human-computer interaction.",
    type: "education",
    highlights: [
      "Graduated with Highest Academic Distinction.",
      "Graduate Research Assistant in Interactive Graphics and Computer Vision.",
      "Published research in premier academic symposiums."
    ]
  },
  {
    id: "edu-2",
    period: "2014 - 2018",
    role: "Bachelor of Science in Computer Science & Mathematics",
    organization: "State Polytechnic University",
    location: "Atlanta, GA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Core focus in algorithms, linear algebra, software engineering, and web development.",
    type: "education",
    highlights: [
      "Summa Cum Laude Honors.",
      "President of Student Software Development Organization."
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Outstanding Engineering Leadership",
    organization: "Tech Innovation Guild",
    year: "2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Awarded for driving high-impact technical initiatives and open engineering culture.",
    badge: "Leadership Award"
  },
  {
    id: "ach-2",
    title: "Best Web Application Design",
    organization: "Design & Developer Awards",
    year: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recognized for creative execution, WebGL interactions, and accessibility standards.",
    badge: "First Place"
  },
  {
    id: "ach-3",
    title: "Open Source Creator Grant",
    organization: "Open Software Foundation",
    year: "2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Funded grant for community contributions to 3D web tooling and developer ergonomics.",
    badge: "Grant Recipient"
  },
  {
    id: "ach-4",
    title: "Global Hackathon Winner",
    organization: "Autonomous Software Summit",
    year: "2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Built an automated collaborative workflow tool within a 48-hour challenge.",
    badge: "Champion"
  }
];
