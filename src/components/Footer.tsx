import { FC } from "react";
import { BsTelegram, BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import * as A from "@helpers/animations";

interface IFooter {
    data: {
        id: number;
        title: string;
        link: string;
    }[];
}

export const Footer: FC<IFooter> = ({ data }) => {
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
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="footer"
        >
            <motion.div
                custom={1}
                variants={A.footer_animation}
                className="footer__wrapper"
            >
                <div className="footer__container">
                    <div className="footer__body">
                        <motion.p
                            custom={2}
                            variants={A.footer_animation}
                            className="footer__text"
                        >
                            Copyright &copy; {new Date().getFullYear()}. All
                            rights are reserved
                        </motion.p>
                        <ul className="footer__main footer-list">
                            {data.map((item) => (
                                <motion.li
                                    custom={item.id + 2}
                                    variants={A.footer_animation}
                                    className="footer-list__item"
                                    key={item.id}
                                >
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-list__link"
                                    >
                                        {icons[item.title as keyof TIcons]}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </motion.footer>
    );
};
