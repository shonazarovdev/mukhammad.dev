import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { ScrollTrigger } from "../lib/gsap";
import { en } from "./en";
import { ru } from "./ru";
import { uz } from "./uz";
import { Dict, Lang } from "./types";

const dicts: Record<Lang, Dict> = { en, ru, uz };

export const languages: Lang[] = ["en", "ru", "uz"];

const STORAGE_KEY = "lang";

interface I18nContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: Dict;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLang(): Lang {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "en" || stored === "ru" || stored === "uz") return stored;
    } catch {
        // localStorage unavailable (private mode) — fall through to default
    }
    return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(readStoredLang);

    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            // ignore storage failures
        }
        document.documentElement.lang = lang;

        const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => cancelAnimationFrame(raf);
    }, [lang]);

    const value = useMemo(() => ({ lang, setLang, t: dicts[lang] }), [lang]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
    const ctx = useContext(I18nContext);
    if (!ctx) {
        throw new Error("useI18n must be used inside LanguageProvider");
    }
    return ctx;
}
