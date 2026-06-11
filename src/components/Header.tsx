import { useEffect, useLayoutEffect, useRef, useState } from "react";
import clsx from "clsx";
import { navItems, site } from "../data/content";
import { gsap } from "../lib/gsap";
import { getLenis, scrollToSection } from "../lib/scroll";

export function Header() {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useLayoutEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const ctx = gsap.context(() => {
            gsap.set(".menu", { clipPath: "inset(0% 0% 100% 0%)" });

            tlRef.current = gsap
                .timeline({ paused: true })
                .to(".menu", {
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 0.8,
                    ease: "power4.inOut"
                })
                .fromTo(
                    ".menu__link-inner",
                    { yPercent: 120 },
                    { yPercent: 0, stagger: 0.07, duration: 0.7, ease: "power4.out" },
                    "-=0.35"
                )
                .fromTo(
                    ".menu__footer",
                    { autoAlpha: 0, y: 16 },
                    { autoAlpha: 1, y: 0, duration: 0.5 },
                    "-=0.4"
                );
        }, root);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const lenis = getLenis();
        if (open) {
            tlRef.current?.timeScale(1).play();
            lenis?.stop();
        } else {
            tlRef.current?.timeScale(1.5).reverse();
            lenis?.start();
        }
    }, [open]);

    const handleNavClick = (target: string) => {
        setOpen(false);
        window.setTimeout(() => scrollToSection(target), 600);
    };

    return (
        <div ref={rootRef}>
            <header className="header">
                <button
                    type="button"
                    className="header__logo"
                    onClick={() => handleNavClick("#home")}
                    data-hover
                >
                    M.SH<span>©</span>
                </button>
                <span className="header__location">{site.location}</span>
                <button
                    type="button"
                    className={clsx("header__burger", { "is-open": open })}
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    data-hover
                >
                    <span />
                    <span />
                </button>
            </header>

            <nav className={clsx("menu", { "is-open": open })} aria-hidden={!open}>
                <ul className="menu__list">
                    {navItems.map((item, index) => (
                        <li key={item.target} className="menu__item">
                            <button
                                type="button"
                                className="menu__link"
                                onClick={() => handleNavClick(item.target)}
                                data-hover
                            >
                                <span className="menu__link-inner">
                                    <span className="menu__index">0{index + 1}</span>
                                    {item.title}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="menu__footer">
                    <span>{site.availability}</span>
                    <a href={site.telegram} target="_blank" rel="noreferrer" data-hover>
                        Telegram ↗
                    </a>
                </div>
            </nav>
        </div>
    );
}
