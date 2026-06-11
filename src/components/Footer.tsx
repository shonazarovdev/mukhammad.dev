import { site } from "../data/content";
import { useI18n } from "../i18n";
import { scrollToSection } from "../lib/scroll";
import { ArrowUpIcon } from "./icons";

export function Footer() {
    const { t } = useI18n();
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <span className="footer__copy">
                © {year} {site.name}
            </span>
            <span className="footer__credits">React · GSAP · Three.js</span>
            <button type="button" className="footer__top" onClick={() => scrollToSection("#home")} data-hover>
                {t.footer.backToTop}
                <ArrowUpIcon size={12} />
            </button>
        </footer>
    );
}
