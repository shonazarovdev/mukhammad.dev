export interface Project {
    id: number;
    title: string;
    year: string;
    technologies: string[];
    demo: string;
    code?: string;
}

export interface SocialLink {
    name: string;
    handle: string;
    link: string;
}

export interface ExperienceStatic {
    company: string;
    stack: string[];
}

export interface NavItem {
    key: "home" | "about" | "experience" | "works" | "contact";
    target: string;
}
