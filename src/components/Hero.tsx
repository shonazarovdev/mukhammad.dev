import clsx from 'clsx';
import React, { FC } from 'react';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';

interface IHero {
    social: {
        id: number;
        name: string;
        title: string;
        link: string;
    }[];
    title: string;
    titleIcon: string;
    desc: string;
    descIcon: string;
}

export const Hero: FC<IHero> = ({
    title,
    titleIcon,
    desc,
    descIcon,
    social,
}) => {
    type TIcons = {
        BsTelegram: JSX.Element;
        BsGithub: JSX.Element;
        BsLinkedin: JSX.Element;
    };
    const icons: TIcons = {
        BsTelegram: <BsTelegram className="social-icon" />,
        BsGithub: <BsGithub className="social-icon" />,
        BsLinkedin: <BsLinkedin className="social-icon" />,
    };

    return (
        <section id="home" className="hero">
            <div className="hero__wrapper">
                <div className="hero__container">
                    <div className="hero__body">
                        <div className="hero__main">
                            <h1 className="title">
                                {title}
                                <span className="waving-icon">{titleIcon}</span>
                            </h1>
                            <p className="subtitle">
                                {desc}
                                {descIcon}
                            </p>
                            <div className="hero__button">
                                <a href="#projects">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-block">
                                        Projects
                                    </button>
                                </a>
                            </div>
                        </div>
                        <ul className="hero__stacks stack-list">
                            {social.map((item) => (
                                <li key={item.id} className="stack-list__item">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={clsx(
                                            'stack-list__link',
                                            item.name,
                                        )}>
                                        {icons[item.title as keyof TIcons]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mouse__wrapper">
                            <div className="mouse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
