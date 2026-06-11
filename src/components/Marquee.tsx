import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

interface MarqueeProps {
    items: string[];
    reversed?: boolean;
}

export function Marquee({ items, reversed = false }: MarqueeProps) {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ctx = gsap.context(() => {
            gsap.to(".marquee__track", {
                xPercent: reversed ? 50 : -50,
                ease: "none",
                duration: 24,
                repeat: -1
            });
        }, root);

        return () => ctx.revert();
    }, [reversed]);

    const group = (
        <>
            {items.map((item) => (
                <span key={item} className="marquee__item">
                    {item}
                    <span className="marquee__dot">•</span>
                </span>
            ))}
        </>
    );

    return (
        <div ref={rootRef} className="marquee" aria-hidden="true">
            <div className="marquee__track">
                <div className="marquee__group">{group}</div>
                <div className="marquee__group">{group}</div>
            </div>
        </div>
    );
}
