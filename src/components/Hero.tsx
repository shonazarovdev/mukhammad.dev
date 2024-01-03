import { FC } from "react";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";
import { scrollToSection } from "@/helpers/helpers";
import * as A from "@helpers/animations";

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
        FaFacebook: JSX.Element;
        FaInstagram: JSX.Element;
        FaTwitter: JSX.Element;
    };
    const icons: TIcons = {
        BsTelegram: <BsTelegram className="social-icon" />,
        BsGithub: <BsGithub className="social-icon" />,
        BsLinkedin: <BsLinkedin className="social-icon" />,
        FaFacebook: <FaFacebook className="social-icon" />,
        FaInstagram: <FaInstagram className="social-icon" />,
        FaTwitter: <FaTwitter className="social-icon" />,
    };

    const clickMouse = () => {
        scrollToSection("about");
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            id="home"
            className="hero"
        >
            <div className="hero__wrapper">
                <div className="hero__container">
                    <div className="hero__body">
                        <div className="hero__main">
                            <motion.h1
                                custom={1}
                                variants={A.hero_text}
                                className="title"
                            >
                                {title}
                                <span className="waving-icon">{titleIcon}</span>
                            </motion.h1>
                            <motion.p
                                custom={2}
                                variants={A.hero_text}
                                className="subtitle"
                            >
                                {desc}
                                {descIcon}
                            </motion.p>
                            <motion.div
                                custom={3}
                                variants={A.hero_text}
                                className="hero__button"
                            >
                                <button
                                    type="button"
                                    className="btn btn-primary btn-block"
                                    onClick={() => scrollToSection("projects")}
                                >
                                    Projects
                                </button>
                            </motion.div>
                        </div>
                        <motion.ul
                            variants={A.hero_social}
                            className="hero__stacks stack-list"
                        >
                            {social.map((item) => (
                                <li key={item.id} className="stack-list__item">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        className={clsx(
                                            "stack-list__link",
                                            item.name
                                        )}
                                    >
                                        {icons[item.title as keyof TIcons]}
                                    </a>
                                </li>
                            ))}
                        </motion.ul>
                        <motion.div
                            custom={4}
                            variants={A.hero_text}
                            className="mouse__wrapper"
                            onClick={clickMouse}
                        >
                            <div className="mouse"></div>
                            Click me!
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
