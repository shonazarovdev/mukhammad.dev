import { site } from "../data/content";
import { scrollToSection } from "../lib/scroll";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <span className="footer__copy">
                © {year} {site.name}
            </span>
            <span className="footer__credits">React · GSAP · Three.js</span>
            <button type="button" className="footer__top" onClick={() => scrollToSection("#home")} data-hover>
                Back to top ↑
            </button>
        </footer>
    );
}
