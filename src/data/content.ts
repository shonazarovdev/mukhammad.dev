import { ExperienceStatic, NavItem, Project, SocialLink } from "../types";

export const site = {
    name: "Muhammad Shonazarov",
    firstName: "MUHAMMAD",
    lastName: "SHONAZAROV",
    telegram: "https://t.me/Muhammad_Shonazarov"
};

export const navItems: NavItem[] = [
    { key: "home", target: "#home" },
    { key: "about", target: "#about" },
    { key: "experience", target: "#experience" },
    { key: "works", target: "#works" },
    { key: "contact", target: "#contact" }
];

export const marqueeItems: string[] = [
    "Flutter",
    "Dart",
    "BLoC",
    "Firebase",
    "React",
    "TypeScript",
    "GSAP",
    "Three.js",
    "UI / UX"
];

export const skillGroupItems: string[][] = [
    ["Flutter", "Dart", "BLoC / Cubit", "Firebase", "REST APIs", "Clean Architecture"],
    ["React", "TypeScript", "Next.js", "Vue", "SCSS", "Tailwind", "GraphQL"],
    ["Git", "Figma", "Vite", "CI / CD"]
];

export const experienceStatic: ExperienceStatic[] = [
    {
        company: "Revolution Global LLC",
        stack: ["Flutter", "Dart", "BLoC", "Firebase", "REST"]
    },
    {
        company: "Surfy°",
        stack: ["React", "TypeScript", "Vue", "Blade", "SCSS", "Tailwind"]
    },
    {
        company: "Freelance",
        stack: ["React", "Next.js", "Vue", "SCSS", "JavaScript"]
    }
];

export const projectsList: Project[] = [
    {
        id: 7,
        title: "Avtomato",
        year: "2025",
        technologies: ["Blade", "Tailwind", "JavaScript"],
        demo: "https://avtomato.uz/"
    },
    {
        id: 6,
        title: "Yancar Design",
        year: "2025",
        technologies: ["React", "Tailwind", "JavaScript"],
        demo: "https://yancar.uz/"
    },
    {
        id: 5,
        title: "Uyga",
        year: "2024",
        technologies: ["Blade", "Tailwind", "jQuery"],
        demo: "https://uyga.pro/"
    },
    {
        id: 4,
        title: "MilliyPay",
        year: "2024",
        technologies: ["Blade", "Tailwind", "jQuery"],
        demo: "https://milliypay.uz/"
    },
    {
        id: 3,
        title: "ORZU GROUP",
        year: "2023",
        technologies: ["Blade", "Tailwind", "jQuery"],
        demo: "https://milliypay.uz/"
    },
    {
        id: 2,
        title: "Jony Portfolio",
        year: "2023",
        technologies: ["Vite", "SCSS", "TypeScript"],
        demo: "https://jony.vercel.app/",
        code: "https://github.com/shonazarovdev/javlon-vite"
    },
    {
        id: 1,
        title: "Muhannad Sinov Service",
        year: "2022",
        technologies: ["Next.js", "SCSS"],
        demo: "https://mss-sert.uz/",
        code: "https://github.com/shonazarovdev/muhannad-next"
    }
];

export const socialLinks: SocialLink[] = [
    { name: "Telegram", handle: "@Muhammad_Shonazarov", link: "https://t.me/Muhammad_Shonazarov" },
    { name: "LinkedIn", handle: "muhammad-shonazarov", link: "https://www.linkedin.com/in/muhammad-shonazarov" },
    { name: "GitHub", handle: "shonazarovdev", link: "https://github.com/shonazarovdev" },
    { name: "Instagram", handle: "@shonazarov_mx", link: "https://instagram.com/shonazarov_mx" },
    { name: "X / Twitter", handle: "@mukhammaddev", link: "https://x.com/mukhammaddev" },
    { name: "Facebook", handle: "shonazarovmuhammad", link: "https://facebook.com/shonazarovmuhammad" }
];
