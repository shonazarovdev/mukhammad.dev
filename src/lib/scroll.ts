import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

let lenis: Lenis | null = null;
let tickerFn: ((time: number) => void) | null = null;

export function initSmoothScroll(): Lenis {
    if (lenis) return lenis;

    lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true
    });

    lenis.on("scroll", ScrollTrigger.update);

    tickerFn = (time: number) => {
        lenis?.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return lenis;
}

export function getLenis(): Lenis | null {
    return lenis;
}

export function scrollToSection(selector: string): void {
    lenis?.scrollTo(selector, { duration: 1.4 });
}

export function destroySmoothScroll(): void {
    if (tickerFn) {
        gsap.ticker.remove(tickerFn);
        tickerFn = null;
    }
    lenis?.destroy();
    lenis = null;
}
