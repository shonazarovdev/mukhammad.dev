import { useEffect, useRef } from "react";
import { site } from "../data/content";
import { gsap, SplitText } from "../lib/gsap";
import { HeroCanvas } from "./HeroCanvas";
import { MapPinIcon } from "./icons";

interface HeroProps {
    started: boolean;
}

export function Hero({ started }: HeroProps) {
    const rootRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!started || !root) return;

        const ctx = gsap.context(() => {
            const splits: SplitText[] = [];
            root.querySelectorAll<HTMLElement>(".hero__title-line").forEach((line) => {
                splits.push(new SplitText(line, { type: "chars" }));
            });

            gsap.timeline()
                .from(
                    splits.flatMap((s) => s.chars),
                    {
                        yPercent: 115,
                        stagger: 0.022,
                        duration: 1.1,
                        ease: "power4.out"
                    }
                )
                .from(
                    ".hero__meta > *",
                    { y: 24, autoAlpha: 0, stagger: 0.08, duration: 0.7, ease: "power3.out" },
                    "-=0.55"
                )
                .from(".hero__scroll", { autoAlpha: 0, duration: 0.6 }, "-=0.3");

            gsap.to(".hero__inner", {
                yPercent: -14,
                autoAlpha: 0.15,
                ease: "none",
                scrollTrigger: {
                    trigger: root,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, root);

        return () => ctx.revert();
    }, [started]);

    return (
        <section ref={rootRef} id="home" className="hero">
            <HeroCanvas />
            <div className="hero__shade" aria-hidden="true" />
            <div className="hero__inner">
                <div className="hero__meta">
                    <span className="hero__role">{site.role}</span>
                    <span className="hero__tagline">{site.tagline}</span>
                    <span className="hero__location">
                        <MapPinIcon size={13} />
                        {site.location}
                    </span>
                </div>
                <h1 className="hero__title">
                    <span className="hero__title-line">{site.firstName}</span>
                    <span className="hero__title-line hero__title-line--accent">{site.lastName}</span>
                </h1>
            </div>
            <div className="hero__scroll">
                <span>Scroll</span>
                <span className="hero__scroll-line" />
            </div>
        </section>
    );
}
