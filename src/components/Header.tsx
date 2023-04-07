import React, { FC, useEffect, useState } from 'react';
import { scrollToSection } from '@/helpers/helpers';
import useWindowSize from '@/hooks/useWindowSize';
import clsx from 'clsx';

interface IHeader {
    data: {
        id: number;
        title: string;
        link: string;
        name: string;
    }[];
}

export const Header: FC<IHeader> = ({ data }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [openMenu, setOpenMenu] = useState(false);
    const { width } = useWindowSize();
    const isLarge = width && width >= 1440;

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    const pageUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="header">
            <div className="header__wrapper">
                <div className={clsx('header__body', isLarge && 'container')}>
                    <div className="header__main">
                        <h3 className="header__logo" onClick={pageUp}>
                            Mukhammad.dev
                        </h3>
                        <div className="header__menu menu">
                            <nav
                                className={clsx(
                                    'menu__body',
                                    openMenu && '_active',
                                )}>
                                <ul className="menu__list">
                                    {data.map((item) => (
                                        <li
                                            className={clsx(
                                                'menu__item',
                                                activeSection === item.name
                                                    ? 'active'
                                                    : '',
                                            )}
                                            key={item.id}
                                            onClick={() => setOpenMenu(false)}>
                                            <p
                                                className="menu__link"
                                                onClick={() =>
                                                    scrollToSection(item.name)
                                                }>
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
                                'menu__icon icon-menu',
                                openMenu && '_active',
                            )}
                            onClick={handleOpenMenu}>
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
