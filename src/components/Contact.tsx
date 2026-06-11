import { useEffect, useRef } from "react";
import { site, socialLinks } from "../data/content";
import { gsap, SplitText } from "../lib/gsap";

export function Contact() {
    const rootRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        let ctx: gsap.Context | undefined;
        let cancelled = false;

        document.fonts.ready.then(() => {
            if (cancelled) return;

            ctx = gsap.context(() => {
                const splits: SplitText[] = [];
                root.querySelectorAll<HTMLElement>(".contact__line").forEach((line) => {
                    splits.push(new SplitText(line, { type: "chars" }));
                });

                gsap.from(
                    splits.flatMap((s) => s.chars),
                    {
                        yPercent: 110,
                        stagger: 0.015,
                        duration: 0.9,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".contact__heading",
                            start: "top 80%"
                        }
                    }
                );

                gsap.from(".contact__socials li", {
                    y: 30,
                    autoAlpha: 0,
                    stagger: 0.06,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".contact__socials",
                        start: "top 88%"
                    }
                });
            }, root);
        });

        return () => {
            cancelled = true;
            ctx?.revert();
        };
    }, []);

    return (
        <section ref={rootRef} id="contact" className="section contact">
            <div className="section__head">
                <span className="section__index">04</span>
                <h2 className="section__title">Contact</h2>
            </div>
            <div className="contact__heading">
                <span className="contact__line">HAVE AN IDEA?</span>
                <span className="contact__line contact__line--accent">LET&apos;S BUILD IT</span>
            </div>
            <a className="contact__cta" href={site.telegram} target="_blank" rel="noreferrer" data-hover>
                Message me on Telegram ↗
            </a>
            <ul className="contact__socials">
                {socialLinks.map((social) => (
                    <li key={social.name}>
                        <a href={social.link} target="_blank" rel="noreferrer" data-hover>
                            <span className="contact__social-name">{social.name}</span>
                            <span className="contact__social-handle">{social.handle}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
