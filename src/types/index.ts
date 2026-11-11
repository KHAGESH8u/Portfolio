export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  liveUrl: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: number;
    highlight?: boolean;
  }[];
  iconName: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  type: 'experience' | 'education';
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
}
