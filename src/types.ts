export interface Project {
    id: number;
    title: string;
    year: string;
    description: string;
    technologies: string[];
    demo: string;
    code?: string;
}

export interface SocialLink {
    name: string;
    handle: string;
    link: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    summary: string;
    highlights: string[];
    stack: string[];
}

export interface SkillGroup {
    label: string;
    items: string[];
}

export interface NavItem {
    title: string;
    target: string;
}
