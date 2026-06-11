import { ExperienceItem, NavItem, Project, SkillGroup, SocialLink } from "../types";

export const site = {
    name: "Muhammad Shonazarov",
    firstName: "MUHAMMAD",
    lastName: "SHONAZAROV",
    role: "Flutter Developer",
    tagline: "I craft cross-platform mobile experiences and motion-rich interfaces.",
    location: "Tashkent, Uzbekistan",
    telegram: "https://t.me/Muhammad_Shonazarov",
    availability: "Open for projects"
};

export const navItems: NavItem[] = [
    { title: "Home", target: "#home" },
    { title: "About", target: "#about" },
    { title: "Experience", target: "#experience" },
    { title: "Works", target: "#works" },
    { title: "Contact", target: "#contact" }
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

export const aboutText =
    "I started as a frontend developer, building responsive web apps, complex animations and clean interfaces. " +
    "Today I build mobile products with Flutter — thoughtful, efficient code that ships to every platform from a single codebase. " +
    "I care about clean architecture, polished UX and the small details that make a product feel alive.";

export const skillGroups: SkillGroup[] = [
    {
        label: "Mobile",
        items: ["Flutter", "Dart", "BLoC / Cubit", "Firebase", "REST APIs", "Clean Architecture"]
    },
    {
        label: "Web",
        items: ["React", "TypeScript", "Next.js", "Vue", "SCSS", "Tailwind", "GraphQL"]
    },
    {
        label: "Tools",
        items: ["Git", "Figma", "Vite", "CI / CD"]
    }
];

export const experienceList: ExperienceItem[] = [
    {
        role: "Flutter Developer",
        company: "Revolution Global LLC",
        period: "2024 — Present",
        summary:
            "Building cross-platform mobile products with Flutter — one codebase shipping to Android and iOS, used daily by real businesses.",
        highlights: [
            "Developing Avtomato, REVO Global's business automation suite for sales, payments and team control",
            "Architecting features with BLoC / Cubit and clean architecture for testable, scalable code",
            "Integrating REST APIs, push notifications and offline-first data flows",
            "Owning the release cycle — flavors, signing and store delivery for both platforms"
        ],
        stack: ["Flutter", "Dart", "BLoC", "Firebase", "REST"]
    },
    {
        role: "Frontend Developer",
        company: "Surfy°",
        period: "2023 — 2024",
        summary:
            "Built production web interfaces for client products as part of the Surfy team.",
        highlights: [
            "Shipped responsive, pixel-perfect interfaces from Figma designs",
            "Built fintech-grade UI for products like MilliyPay and Uyga",
            "Implemented complex scroll, hover and page-transition animations",
            "Collaborated with designers and backend developers in tight release cycles"
        ],
        stack: ["React", "TypeScript", "Vue", "Blade", "SCSS", "Tailwind"]
    },
    {
        role: "Frontend Developer",
        company: "Freelance",
        period: "2021 — 2023",
        summary:
            "Designed and built websites for businesses across Uzbekistan, end to end.",
        highlights: [
            "Delivered production sites for Yancar Design, ORZU GROUP, Muhannad Sinov Service and more",
            "Took projects from first brief to deployed product single-handedly",
            "Worked across React, Vue, Next.js and Blade codebases",
            "Handled SEO, performance budgets and cross-browser polish"
        ],
        stack: ["React", "Next.js", "Vue", "SCSS", "JavaScript"]
    }
];

export const projectsList: Project[] = [
    {
        id: 7,
        title: "Avtomato",
        year: "2025",
        description: "Business automation platform by REVO Global — manage a whole business from one app.",
        technologies: ["Blade", "Tailwind", "JavaScript"],
        demo: "https://avtomato.uz/"
    },
    {
        id: 6,
        title: "Yancar Design",
        year: "2025",
        description: "Website for an automotive design studio — products and services for your car.",
        technologies: ["React", "Tailwind", "JavaScript"],
        demo: "https://yancar.uz/"
    },
    {
        id: 5,
        title: "Uyga",
        year: "2024",
        description: "Product website for Uyga by MilliyPay — services and product information.",
        technologies: ["Blade", "Tailwind", "jQuery"],
        demo: "https://uyga.pro/"
    },
    {
        id: 4,
        title: "MilliyPay",
        year: "2024",
        description: "Official website of the MilliyPay fintech company.",
        technologies: ["Blade", "Tailwind", "jQuery"],
        demo: "https://milliypay.uz/"
    },
    {
        id: 3,
        title: "ORZU GROUP",
        year: "2023",
        description: "Corporate website for the ORZU GROUP food company.",
        technologies: ["Blade", "Tailwind", "jQuery"],
        demo: "https://milliypay.uz/"
    },
    {
        id: 2,
        title: "Jony Portfolio",
        year: "2023",
        description: "Portfolio website for designer Javlon — a gallery of beautiful work.",
        technologies: ["Vite", "SCSS", "TypeScript"],
        demo: "https://jony.vercel.app/",
        code: "https://github.com/shonazarovdev/javlon-vite"
    },
    {
        id: 1,
        title: "Muhannad Sinov Service",
        year: "2022",
        description: "Website for a certification and testing services company.",
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
