import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import { scrollToSection } from "../helpers/helpers";
import useWindowSize from "../hooks/useWindowSize";
import { TMenuList } from "../helpers/types";

interface IHeader {
    data: TMenuList[];
}

export const Header: FC<IHeader> = ({ data }) => {
    const { width } = useWindowSize();
    const [activeSection, setActiveSection] = useState("home");
    const [openMenu, setOpenMenu] = useState(false);
    const isLarge = width && width >= 1440;

    const handleOpenMenu = () => {
        // Is Mobile
        if (width <= 768) {
            setOpenMenu(prev => !prev);
            if (!openMenu) {
                window.document.body.style.overflow = "hidden";
                window.document.body.style.height = "100vh";
            } else {
                window.document.body.style.removeProperty("overflow");
                window.document.body.style.removeProperty("height");
            }
        }
    };

    const pageUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="header">
            <div className="header__wrapper">
                <div className={clsx("header__body", isLarge && "container")}>
                    <div className="header__main">
                        <h3 className="header__logo fadeIn" onClick={pageUp}>
                            Mukhammad.dev
                        </h3>
                        <div className="header__menu menu fadeIn">
                            <nav
                                className={clsx(
                                    "menu__body",
                                    openMenu && "_active"
                                )}
                            >
                                <ul className="menu__list">
                                    {data.map((item) => (
                                        <li
                                            className={clsx(
                                                "menu__item",
                                                activeSection === item.name
                                                    ? "active"
                                                    : ""
                                            )}
                                            key={item.id}
                                            onClick={() => handleOpenMenu()}
                                        >
                                            <p
                                                className="menu__link"
                                                onClick={() =>
                                                    scrollToSection(item.name)
                                                }
                                            >
                                                {item.title}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <button
                            type="button"
                            className={clsx(
                                "menu__icon icon-menu",
                                openMenu && "_active"
                            )}
                            onClick={handleOpenMenu}
                            title="Open menu"
                        >
                            {[1, 2, 3].map((_, key) => (
                                <span key={key}></span>
                            ))}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
