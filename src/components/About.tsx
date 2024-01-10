import React, { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
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
    TailwindSvg,
    TypeScriptSvg,
} from "../assets/skills";
import { scrollToSection } from "../helpers/helpers";
import * as A from "../helpers/animations";

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
        TailwindSvg: React.ReactNode;
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
        TailwindSvg: <TailwindSvg />,
    };
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            id="about"
            className="section section-gray about"
        >
            <div className="about__wrapper">
                <div className="about__container">
                    <div className="about__body">
                        <div className="section-header">
                            <motion.h2
                                custom={1}
                                variants={A.section_title}
                                className="section-title"
                            >
                                About Me
                            </motion.h2>
                            <motion.p
                                custom={2}
                                variants={A.section_title}
                                className="section-subtitle"
                            >
                                Here you will find more information about me,
                                what I do, and my current skills mostly in terms
                                of programming and technology
                            </motion.p>
                        </div>
                        <div className="about__main about-content">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2, once: true }}
                                className="about-content__left"
                            >
                                <motion.h3
                                    custom={1}
                                    variants={A.about_text}
                                    className="about-content--title"
                                >
                                    Get to know me!
                                </motion.h3>
                                <motion.ul
                                    custom={2}
                                    variants={A.about_text}
                                    className="about-content__list"
                                >
                                    <li className="about-content__item">
                                        <p className="about-content--text">
                                            As a{" "}
                                            <strong>
                                                Junior Front-End Developer
                                            </strong>
                                            , I excel in designing and
                                            maintaining responsive websites that
                                            offer a smooth user experience. My
                                            expertise lies in crafting dynamic,
                                            engaging interfaces through writing
                                            <strong> clean</strong> and{" "}
                                            <strong>optimized </strong>
                                            code and utilizing cutting-edge{" "}
                                            <strong>
                                                development tools
                                            </strong>{" "}
                                            and <strong>techniques</strong>. I
                                            am also a{" "}
                                            <strong>team player</strong> who
                                            thrives in collaborating with
                                            cross-functional teams to produce
                                            outstanding web applications
                                        </p>
                                    </li>
                                </motion.ul>
                                <motion.div custom={3} variants={A.about_text}>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() =>
                                            scrollToSection("contact")
                                        }
                                        title="Go to Contact"
                                    >
                                        Contact
                                    </button>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2, once: true }}
                                className="about-content__right"
                            >
                                <motion.h3
                                    custom={1}
                                    variants={A.about_text}
                                    className="about-content--title"
                                >
                                    My Skills
                                </motion.h3>
                                <div className="skills">
                                    <ul className="skills__list">
                                        {skills.map((item) => (
                                            <motion.li
                                                custom={item.id}
                                                variants={A.about_skills}
                                                key={item.id}
                                                className={clsx(
                                                    "skills__item",
                                                    item.title
                                                )}
                                            >
                                                <span className="skills-icon">
                                                    {
                                                        icons[
                                                            item.icon as keyof TIcons
                                                        ]
                                                    }
                                                </span>
                                                {item.title}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
