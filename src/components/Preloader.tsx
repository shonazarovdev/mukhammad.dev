import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { site } from "../data/content";

interface PreloaderProps {
    onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const firedRef = useRef(false);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const counter = root.querySelector<HTMLElement>(".preloader__count");
        const progress = { value: 0 };

        const fire = () => {
            if (!firedRef.current) {
                firedRef.current = true;
                onComplete();
            }
        };

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.to(progress, {
                value: 100,
                duration: 1.7,
                ease: "power2.inOut",
                onUpdate: () => {
                    if (counter) counter.textContent = String(Math.round(progress.value)).padStart(3, "0");
                }
            })
                .to(".preloader__inner", {
                    yPercent: -40,
                    autoAlpha: 0,
                    duration: 0.5,
                    ease: "power3.in"
                })
                .call(fire)
                .to(root, {
                    yPercent: -100,
                    duration: 0.9,
                    ease: "power4.inOut"
                }, "<")
                .set(root, { display: "none" });
        }, root);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div ref={rootRef} className="preloader" aria-hidden="true">
            <div className="preloader__inner">
                <span className="preloader__name">{site.name}</span>
                <span className="preloader__count">000</span>
            </div>
        </div>
    );
}
