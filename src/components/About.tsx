import { useEffect, useRef } from "react";
import { skillGroupItems } from "../data/content";
import { useI18n } from "../i18n";
import { gsap, SplitText } from "../lib/gsap";

export function About() {
    const rootRef = useRef<HTMLElement>(null);
    const { lang, t } = useI18n();

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        let ctx: gsap.Context | undefined;
        let cancelled = false;

        document.fonts.ready.then(() => {
            if (cancelled) return;

            ctx = gsap.context(() => {
                const para = root.querySelector<HTMLElement>(".about__text");
                if (para) {
                    const split = new SplitText(para, { type: "lines" });
                    gsap.from(split.lines, {
                        yPercent: 100,
                        autoAlpha: 0,
                        stagger: 0.07,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: para,
                            start: "top 82%"
                        }
                    });
                }

                gsap.from(".skill-group", {
                    y: 40,
                    autoAlpha: 0,
                    stagger: 0.12,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".about__skills",
                        start: "top 85%"
                    }
                });
            }, root);
        });

        return () => {
            cancelled = true;
            ctx?.revert();
        };
    }, [lang]);

    return (
        <section ref={rootRef} id="about" className="section about">
            <div className="section__head">
                <span className="section__index">01</span>
                <h2 className="section__title">{t.sections.about}</h2>
            </div>
            <p className="about__text" key={lang}>
                {t.about.text}
            </p>
            <div className="about__skills">
                {skillGroupItems.map((items, groupIndex) => (
                    <div key={t.about.skillLabels[groupIndex]} className="skill-group">
                        <h3 className="skill-group__label">{t.about.skillLabels[groupIndex]}</h3>
                        <ul className="skill-group__list">
                            {items.map((item) => (
                                <li key={item} className="skill-group__item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
