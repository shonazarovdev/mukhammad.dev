import { Dict } from "./types";

export const en: Dict = {
    nav: {
        home: "Home",
        about: "About",
        experience: "Experience",
        works: "Works",
        contact: "Contact"
    },
    hero: {
        role: "Flutter Developer",
        tagline: "I craft cross-platform mobile experiences and motion-rich interfaces.",
        location: "Tashkent, Uzbekistan",
        scroll: "Scroll"
    },
    sections: {
        about: "About",
        experience: "Experience",
        works: "Selected Works",
        contact: "Contact"
    },
    about: {
        text:
            "I started as a frontend developer, building responsive web apps, complex animations and clean interfaces. " +
            "Today I build mobile products with Flutter — thoughtful, efficient code that ships to every platform from a single codebase. " +
            "I care about clean architecture, polished UX and the small details that make a product feel alive.",
        skillLabels: ["Mobile", "Web", "Tools"]
    },
    experience: {
        items: [
            {
                role: "Flutter Developer",
                period: "2024 — Present",
                summary:
                    "Building cross-platform mobile products with Flutter — one codebase shipping to Android and iOS, used daily by real businesses.",
                highlights: [
                    "Developing Avtomato, REVO Global's business automation suite for sales, payments and team control",
                    "Architecting features with BLoC / Cubit and clean architecture for testable, scalable code",
                    "Integrating REST APIs, push notifications and offline-first data flows",
                    "Owning the release cycle — flavors, signing and store delivery for both platforms"
                ]
            },
            {
                role: "Frontend Developer",
                period: "2023 — 2024",
                summary: "Built production web interfaces for client products as part of the Surfy team.",
                highlights: [
                    "Shipped responsive, pixel-perfect interfaces from Figma designs",
                    "Built fintech-grade UI for products like MilliyPay and Uyga",
                    "Implemented complex scroll, hover and page-transition animations",
                    "Collaborated with designers and backend developers in tight release cycles"
                ]
            },
            {
                role: "Frontend Developer",
                period: "2021 — 2023",
                summary: "Designed and built websites for businesses across Uzbekistan, end to end.",
                highlights: [
                    "Delivered production sites for Yancar Design, ORZU GROUP, Muhannad Sinov Service and more",
                    "Took projects from first brief to deployed product single-handedly",
                    "Worked across React, Vue, Next.js and Blade codebases",
                    "Handled SEO, performance budgets and cross-browser polish"
                ]
            }
        ]
    },
    works: {
        live: "Live",
        code: "Code",
        descriptions: {
            7: "Business automation platform by REVO Global — manage a whole business from one app.",
            6: "Website for an automotive design studio — products and services for your car.",
            5: "Product website for Uyga by MilliyPay — services and product information.",
            4: "Official website of the MilliyPay fintech company.",
            3: "Corporate website for the ORZU GROUP food company.",
            2: "Portfolio website for designer Javlon — a gallery of beautiful work.",
            1: "Website for a certification and testing services company."
        }
    },
    contact: {
        line1: "HAVE AN IDEA?",
        line2: "LET'S BUILD IT",
        cta: "Message me on Telegram"
    },
    menu: {
        availability: "Open for projects"
    },
    footer: {
        backToTop: "Back to top"
    }
};
