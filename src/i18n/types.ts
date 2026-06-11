export interface ExperienceText {
    role: string;
    period: string;
    summary: string;
    highlights: string[];
}

export interface Dict {
    nav: {
        home: string;
        about: string;
        experience: string;
        works: string;
        contact: string;
    };
    hero: {
        role: string;
        tagline: string;
        location: string;
        scroll: string;
    };
    sections: {
        about: string;
        experience: string;
        works: string;
        contact: string;
    };
    about: {
        text: string;
        skillLabels: string[];
    };
    experience: {
        items: ExperienceText[];
    };
    works: {
        live: string;
        code: string;
        descriptions: Record<number, string>;
    };
    contact: {
        line1: string;
        line2: string;
        cta: string;
    };
    menu: {
        availability: string;
    };
    footer: {
        backToTop: string;
    };
}

export type Lang = "en" | "ru" | "uz";
