import useWindowSize from '@/hooks/useWindowSize';
import clsx from 'clsx';
import React, { FC, useState } from 'react';

interface IHeader {
    data: {
        id: number;
        title: string;
        link: string;
    }[];
}

export const Header: FC<IHeader> = ({ data }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const { width } = useWindowSize();
    const isLarge = width && width >= 1440;

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    const pageUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                                            className="menu__item"
                                            key={item.id}
                                            onClick={() => setOpenMenu(false)}>
                                            <a
                                                href={item.link}
                                                className="menu__link">
                                                {item.title}
                                            </a>
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
