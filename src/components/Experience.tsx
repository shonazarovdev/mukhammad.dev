import { useEffect, useRef } from "react";
import { experienceStatic } from "../data/content";
import { useI18n } from "../i18n";
import { gsap } from "../lib/gsap";
import { ArrowRightIcon } from "./icons";

export function Experience() {
    const rootRef = useRef<HTMLElement>(null);
    const { lang, t } = useI18n();

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".exp-row").forEach((row) => {
                gsap.from(row, {
                    y: 50,
                    autoAlpha: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 85%"
                    }
                });

                const highlights = row.querySelectorAll(".exp-row__highlights li");
                gsap.from(highlights, {
                    x: -24,
                    autoAlpha: 0,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 75%"
                    }
                });
            });
        }, root);

        return () => ctx.revert();
    }, [lang]);

    return (
        <section ref={rootRef} id="experience" className="section experience">
            <div className="section__head">
                <span className="section__index">02</span>
                <h2 className="section__title">{t.sections.experience}</h2>
            </div>
            <div className="experience__list">
                {experienceStatic.map((item, index) => {
                    const text = t.experience.items[index];
                    if (!text) return null;

                    return (
                        <article key={item.company} className="exp-row">
                            <div className="exp-row__left">
                                <h3 className="exp-row__role">{text.role}</h3>
                                <span className="exp-row__company">{item.company}</span>
                                <span className="exp-row__period">{text.period}</span>
                            </div>
                            <div className="exp-row__right">
                                <p className="exp-row__summary">{text.summary}</p>
                                <ul className="exp-row__highlights">
                                    {text.highlights.map((highlight) => (
                                        <li key={highlight}>
                                            <ArrowRightIcon size={14} className="exp-row__bullet" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                                <ul className="exp-row__stack">
                                    {item.stack.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
