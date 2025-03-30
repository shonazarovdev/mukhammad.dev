import { FC } from "react";
import { motion } from "framer-motion";
import * as A from "../helpers/animations";
import { MProjectBox } from "./ProjectBox";
import { TProjectsList } from "../helpers/types";

interface IPortfolio {
    projects: TProjectsList[];
}

export const Portfolio: FC<IPortfolio> = ({ projects }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            id="portfolio"
            className="section portfolio"
        >
            <div className="portfolio__wrapper">
                <div className="portfolio__container">
                    <div className="portfolio__body">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            className="section-header"
                        >
                            <motion.h2
                                custom={1}
                                variants={A.section_title}
                                className="section-title"
                            >
                                Портфолио
                            </motion.h2>
                            <motion.p
                                custom={2}
                                variants={A.section_title}
                                className="section-subtitle"
                            >
                                Каждый проект — это уникальный образец развития 🧩
                            </motion.p>
                        </motion.div>
                        <ul className="portfolio__main portfolio-list">
                            {projects.map((item, key) => (
                                <MProjectBox
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.2, once: true }}
                                    custom={item.id}
                                    variants={A.projects_list}
                                    key={key}
                                    {...item}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
