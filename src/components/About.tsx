import {
    CssSvg,
    GitSvg,
    GithubSvg,
    HtmlSvg,
    JavaScriptSvg,
    NextSvg,
    ReactSvg,
    SassSvg,
    StyledCompSvg,
    TypeScriptSvg,
} from '@/assets/skills';
import clsx from 'clsx';
import React, { FC } from 'react';

interface IAbout {
    skills: {
        id: number;
        title: string;
        icon: string;
    }[];
}

export const About: FC<IAbout> = ({ skills }) => {
    type TIcons = {
        HtmlSvg: React.ReactNode;
        CssSvg: React.ReactNode;
        SassSvg: React.ReactNode;
        JavaScriptSvg: React.ReactNode;
        TypeScriptSvg: React.ReactNode;
        ReactSvg: React.ReactNode;
        NextSvg: React.ReactNode;
        GitSvg: React.ReactNode;
        GithubSvg: React.ReactNode;
        StyledCompSvg: React.ReactNode;
    };
    const icons: TIcons = {
        HtmlSvg: <HtmlSvg />,
        CssSvg: <CssSvg />,
        SassSvg: <SassSvg />,
        JavaScriptSvg: <JavaScriptSvg />,
        TypeScriptSvg: <TypeScriptSvg />,
        ReactSvg: <ReactSvg />,
        NextSvg: <NextSvg />,
        GitSvg: <GitSvg />,
        GithubSvg: <GithubSvg />,
        StyledCompSvg: <StyledCompSvg />,
    };
    return (
        <section id="about" className="section section-gray about">
            <div className="about__wrapper">
                <div className="about__container">
                    <div className="about__body">
                        <div className="section-header">
                            <h2 className="section-title">About Me</h2>
                            <p className="section-subtitle">
                                Here you will find more information about me,
                                what I do, and my current skills mostly in terms
                                of programming and technology
                            </p>
                        </div>
                        <div className="about__main about-content">
                            <div className="about-content__left">
                                <h3 className="about-content--title">
                                    Get to know me!
                                </h3>
                                <ul className="about-content__list">
                                    <li className="about-content__item">
                                        <p className="about-content--text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            <strong>Laboriosam</strong> dolores
                                            magnam, nobis cum voluptatem eius
                                            perspiciatis inventore perferendis,{' '}
                                            <strong>nisi</strong> obcaecati
                                            facere a{' '}
                                            <p className="p--link">porro</p>{' '}
                                            explicabo odit est, illum error
                                            harum velit?
                                        </p>
                                    </li>
                                    <li className="about-content__item">
                                        <p className="about-content--text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            <strong>Nemo</strong> error aliquid
                                            maxime rem repellat? Exercitationem
                                            voluptate facere fugiat, voluptas{' '}
                                            <strong>consequatur</strong> tenetur
                                            tempore. Distinctio at molestias
                                            animi labore? Explicabo, quae
                                            laborum?
                                        </p>
                                    </li>
                                    <li className="about-content__item">
                                        <p className="about-content--text">
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit.
                                            Praesentium{' '}
                                            <strong>nesciunt</strong> doloremque
                                            optio, incidunt maxime natus.
                                            Cupiditate voluptatibus adipisci id
                                            velit ad,{' '}
                                            <strong>reprehenderit</strong> omnis
                                            maxime tenetur quo voluptates unde
                                            repellat assumenda.
                                        </p>
                                    </li>
                                </ul>
                                <a href="#contact">
                                    <button
                                        type="button"
                                        className="btn btn-primary">
                                        Contact
                                    </button>
                                </a>
                            </div>
                            <div className="about-content__right">
                                <h3 className="about-content--title">
                                    My Skills
                                </h3>
                                <div className="skills">
                                    <ul className="skills__list">
                                        {skills.map((item) => (
                                            <li
                                                key={item.id}
                                                className={clsx(
                                                    'skills__item',
                                                    item.title,
                                                )}>
                                                <span className="skills-icon">
                                                    {
                                                        icons[
                                                            item.icon as keyof TIcons
                                                        ]
                                                    }
                                                </span>
                                                {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
