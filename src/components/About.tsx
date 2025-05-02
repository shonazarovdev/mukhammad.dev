import React, { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { scrollToSection } from "../helpers/helpers";
import * as A from "../helpers/animations";
import { TSkillsList } from "../helpers/types";

interface IAbout {
    skills: TSkillsList[];
}

export const About: FC<IAbout> = ({ skills }) => {
    return (<motion.section
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
                            Обо мне
                        </motion.h2>
                        <motion.p
                            custom={2}
                            variants={A.section_title}
                            className="section-subtitle"
                        >
                            Здесь вы найдете больше информации обо мне, чем я занимаюсь и моих текущих навыках, в
                            основном в области программирования и технологий.
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
                                Познакомьтесь со мной поближе!
                            </motion.h3>
                            <motion.ul
                                custom={2}
                                variants={A.about_text}
                                className="about-content__list"
                            >
                                <li className="about-content__item">
                                    <p className="about-content--text">
                                        👋 Привет! Меня зовут Muhammad, и я увлечен разработкой цифровых продуктов,
                                        которые совмещают эстетику, удобство и технологичность.
                                        <br /><br />
                                        Я начинал свой путь как фронтенд-разработчик, создавая адаптивные
                                        веб-приложения, сложные анимации и удобные интерфейсы. Однако мир IT слишком
                                        огромен, чтобы остановиться на одном направлении. Сейчас я активно
                                        развиваюсь в мобильной разработке на Flutter, потому что мне нравится писать
                                        продуманный, эффективный код и создавать приложения, которые работают на
                                        разных платформах.
                                        <br /><br />
                                        В своих проектах я ценю чистоту кода, продуманный UX/UI и оптимизированную
                                        архитектуру. Люблю работать в команде, если коллектив заряжен на результат,
                                        но и в одиночку могу довести задачу до идеала.
                                        <br /><br />
                                        Каждый новый проект для меня — это возможность не только создать что-то
                                        крутое, но и улучшить свои навыки. Если у тебя есть интересный проект или
                                        идея — давай обсудим! 🚀
                                    </p>
                                </li>
                            </motion.ul>
                            <motion.div custom={3} variants={A.about_text}>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => scrollToSection("contact")}
                                    title="Go to Contact"
                                >
                                    Контакт
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
                                Мои навыки
                            </motion.h3>
                            <div className="skills">
                                <ul className="skills__list">
                                    {skills.map((item, index) => (<motion.li
                                        custom={index++}
                                        variants={A.about_skills}
                                        key={index}
                                        className={clsx("skills__item", item.title)}
                                    >
                                                <span className="skills-icon">
                                                    {item.icon}
                                                </span>
                                        {item.title}
                                    </motion.li>))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>);
};
