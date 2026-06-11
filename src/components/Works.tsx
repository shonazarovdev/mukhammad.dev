import { useEffect, useRef } from "react";
import { projectsList } from "../data/content";
import { gsap } from "../lib/gsap";

export function Works() {
    const rootRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".work-row").forEach((row) => {
                gsap.from(row, {
                    y: 50,
                    autoAlpha: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 90%"
                    }
                });
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={rootRef} id="works" className="section works">
            <div className="section__head">
                <span className="section__index">03</span>
                <h2 className="section__title">Selected Works</h2>
            </div>
            <div className="works__list">
                {projectsList.map((project, index) => (
                    <article key={project.id} className="work-row">
                        <span className="work-row__index">{String(index + 1).padStart(2, "0")}</span>
                        <div className="work-row__main">
                            <a
                                className="work-row__title"
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                data-hover
                            >
                                {project.title}
                                <span className="work-row__arrow">↗</span>
                            </a>
                            <p className="work-row__desc">{project.description}</p>
                            <ul className="work-row__tags">
                                {project.technologies.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="work-row__meta">
                            <span className="work-row__year">{project.year}</span>
                            <div className="work-row__links">
                                <a href={project.demo} target="_blank" rel="noreferrer" data-hover>
                                    Live ↗
                                </a>
                                {project.code && (
                                    <a href={project.code} target="_blank" rel="noreferrer" data-hover>
                                        Code ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
