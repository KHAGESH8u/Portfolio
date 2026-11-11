import { ProjectItem, SkillCategory, TimelineItem, AchievementItem } from '../types';

export const HERO_DATA = {
  systemTag: "SYSTEM STATUS: OPERATIONAL // V4.9.2_PRODUCTION",
  name: "ALEXANDER VANCE",
  role: "AI & DATA SCIENCE ENGINEER",
  subRole: "NEURAL ARCHITECTURE & DISTRIBUTED SYSTEMS",
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ctaPrimary: "EXPLORE MATRIX",
  ctaSecondary: "INITIATE TRANSMISSION"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "core-competencies",
    title: "Core Competencies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    iconName: "Cpu",
    skills: [
      { name: "Distributed Computing", level: 95, highlight: true },
      { name: "High-Performance Systems", level: 92, highlight: true },
      { name: "Cloud Architecture", level: 90 },
      { name: "Algorithm Optimization", level: 88 },
      { name: "Microservices", level: 86 }
    ]
  },
  {
    id: "tech-frameworks",
    title: "Technical Frameworks",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "Layers",
    skills: [
      { name: "React & Three.js", level: 96, highlight: true },
      { name: "TypeScript", level: 94, highlight: true },
      { name: "Python / FastAPI", level: 90 },
      { name: "Node.js & Go", level: 85 },
      { name: "Docker & Kubernetes", level: 88 }
    ]
  },
  {
    id: "ml-tools",
    title: "Machine Learning Tools",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    iconName: "BrainCircuit",
    skills: [
      { name: "PyTorch & TensorRT", level: 94, highlight: true },
      { name: "Transformer Architectures", level: 91, highlight: true },
      { name: "Vector Databases", level: 89 },
      { name: "CUDA Acceleration", level: 84 },
      { name: "MLOps Pipelines", level: 87 }
    ]
  },
  {
    id: "soft-skills",
    title: "Operational Leadership",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    iconName: "ShieldCheck",
    skills: [
      { name: "Cross-Functional Leadership", level: 92 },
      { name: "Technical Strategy", level: 95, highlight: true },
      { name: "Systemic Problem Solving", level: 94 },
      { name: "Engineering Mentorship", level: 88 }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "neural-synthesizer",
    title: "PROJECT: SYNTHEX-01",
    subtitle: "Real-Time Neural Audio & Spectral Synthesizer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque euismod venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi integer interdum.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["PyTorch", "WebGL", "Rust", "WebAudio API", "FastAPI"],
    metrics: [
      { label: "Latency", value: "< 4.2ms" },
      { label: "Throughput", value: "100k req/s" },
      { label: "Inference", value: "16x Speedup" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "quantum-graph-core",
    title: "PROJECT: VORTEX-GRAPH",
    subtitle: "Distributed Knowledge Tensor Visualizer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere lectus at risus sodales sollicitudin. Proin ut sem sed magna convallis feugiat a eu elit. Curabitur vel turpis ac velit consequat auctor.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Three.js", "TypeScript", "gRPC", "Neo4j", "Docker"],
    metrics: [
      { label: "Node Capacity", value: "10M+ Vertices" },
      { label: "FPS Stability", value: "60 FPS Fixed" },
      { label: "Memory Footprint", value: "-45% Overhead" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "autonomous-swarm-engine",
    title: "PROJECT: AEGIS-SWARM",
    subtitle: "Autonomous Multi-Agent Consensus Protocol",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    tags: ["Go", "Kubernetes", "Raft Consensus", "Kafka", "Prometheus"],
    metrics: [
      { label: "Agent Capacity", value: "50,000 Nodes" },
      { label: "Fault Recovery", value: "< 120ms" },
      { label: "Consensus SLA", value: "99.999%" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "hyper-dimensional-vault",
    title: "PROJECT: KRONOS-SIM",
    subtitle: "High-Dimensional Simulation & Vector Clustering Engine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id dui. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    tags: ["CUDA", "C++20", "Python", "Ray", "Triton"],
    metrics: [
      { label: "Embedding Dim", value: "4096-D" },
      { label: "Batch Scale", value: "2.5M vectors" },
      { label: "Precision Rate", value: "99.8% Recall" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "exp-1",
    period: "2024 - PRESENT",
    role: "Lead Machine Learning Architect",
    organization: "NEURAL DYNAMICS LABS",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nunc eros. Proin vel convallis neque, a elementum sapien. Vivamus a magna nec lorem efficitur vehicula.",
    type: "experience",
    highlights: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      "Mauris luctus felis eu velit viverra, id dapibus eros lacinia.",
      "Curabitur dictum odio vel ante accumsan dictum."
    ]
  },
  {
    id: "exp-2",
    period: "2022 - 2024",
    role: "Senior Distributed Systems Engineer",
    organization: "QUANTUM COMPUTING INITIATIVE",
    location: "Boston, MA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus vitae felis pellentesque, luctus eros non, congue turpis.",
    type: "experience",
    highlights: [
      "Quisque bibendum leo eu urna molestie tempus.",
      "Nullam a nisl at elit accumsan aliquet non a nisi.",
      "Donec porta augue eu ante elementum porttitor."
    ]
  },
  {
    id: "exp-3",
    period: "2020 - 2022",
    role: "AI Research Engineer",
    organization: "SYNAPSE COMPUTATIONAL LAB",
    location: "Austin, TX",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
    type: "experience",
    highlights: [
      "In hac habitasse platea dictumst vestibulum rhoncus.",
      "Pellentesque habitant morbi tristique senectus.",
      "Aenean auctor wisi et urna aliquam erat volutpat."
    ]
  },
  {
    id: "edu-1",
    period: "2018 - 2020",
    role: "Master of Science in Computer Science & AI",
    organization: "INSTITUTE OF ADVANCED TECHNOLOGY",
    location: "Cambridge, MA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Thesis focused on high-dimensional vector representations and sparse neural network topologies.",
    type: "education",
    highlights: [
      "Graduated with Highest Distinction Honors.",
      "Published two papers on Tensor Decomposition in NeurIPS workshops.",
      "Department Fellowship for Distributed Systems Research."
    ]
  },
  {
    id: "edu-2",
    period: "2014 - 2018",
    role: "Bachelor of Science in Mathematics & Computing",
    organization: "STATE POLYTECHNIC UNIVERSITY",
    location: "Atlanta, GA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dual concentration in Linear Algebra, Numerical Optimization, and Parallel Programming.",
    type: "education",
    highlights: [
      "Summa Cum Laude Honors.",
      "President of High-Performance Computing Society.",
      "Undergraduate Research Excellence Award."
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Global AI Engineering Fellowship",
    organization: "International Artificial Intelligence Consortium",
    year: "2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus neque id cursus faucibus.",
    badge: "FELLOW // TIER 1"
  },
  {
    id: "ach-2",
    title: "Excellence in Distributed Architecture",
    organization: "Systems Scalability Summit",
    year: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero cursus.",
    badge: "GOLD RECOGNITION"
  },
  {
    id: "ach-3",
    title: "Best Open Source Infrastructure Project",
    organization: "Open Compute & Cloud Foundation",
    year: "2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi nulla quis sem at nibh elementum.",
    badge: "INNOVATION PRIZE"
  },
  {
    id: "ach-4",
    title: "First Place: Autonomous Agent Grand Prix",
    organization: "Robotics & Multi-Agent Conference",
    year: "2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum praesent mauris.",
    badge: "CHAMPION"
  }
];
