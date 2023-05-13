import { FC } from "react";
import { motion } from "framer-motion";
import * as A from "@helpers/animations";
import { MProjectBox } from "./ProjectBox";

interface IProjects {
    projects: {
        id: number;
        title: string;
        icon: string;
        description: string;
        image: string;
        scrollY: number;
        technologies: string[];
        code: string;
        demo: string;
    }[];
}

export const Projects: FC<IProjects> = ({ projects }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            id="projects"
            className="section projects"
        >
            <div className="projects__wrapper">
                <div className="projects__container">
                    <div className="projects__body">
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
                                Projects
                            </motion.h2>
                            <motion.p
                                custom={2}
                                variants={A.section_title}
                                className="section-subtitle"
                            >
                                Each project is a unique piece of development 🧩
                            </motion.p>
                        </motion.div>
                        <ul className="projects__main projects-list">
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
