import { useEffect, useRef } from "react";
import { experienceList } from "../data/content";
import { gsap } from "../lib/gsap";

export function Experience() {
    const rootRef = useRef<HTMLElement>(null);

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
    }, []);

    return (
        <section ref={rootRef} id="experience" className="section experience">
            <div className="section__head">
                <span className="section__index">02</span>
                <h2 className="section__title">Experience</h2>
            </div>
            <div className="experience__list">
                {experienceList.map((item) => (
                    <article key={`${item.role}-${item.company}`} className="exp-row">
                        <div className="exp-row__left">
                            <h3 className="exp-row__role">{item.role}</h3>
                            <span className="exp-row__company">{item.company}</span>
                            <span className="exp-row__period">{item.period}</span>
                        </div>
                        <div className="exp-row__right">
                            <p className="exp-row__summary">{item.summary}</p>
                            <ul className="exp-row__highlights">
                                {item.highlights.map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>
                            <ul className="exp-row__stack">
                                {item.stack.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
