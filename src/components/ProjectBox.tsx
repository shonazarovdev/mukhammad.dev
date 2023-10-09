import { FC, useEffect, useState, forwardRef } from "react";
import { BsGithub } from "react-icons/bs";
import { RiShareBoxLine } from "react-icons/ri";
import clsx from "clsx";
import { motion } from "framer-motion";
import * as A from "@helpers/animations";

interface IProject {
    id: number;
    title: string;
    icon: string;
    description: string;
    image: string;
    technologies: string[];
    code: string;
    demo: string;
}

export const ProjectBox: FC<IProject> = forwardRef<HTMLLIElement, IProject>(
    (
        { id, title, icon, description, image, technologies, code, demo },
        ref
    ) => {
        const [scroll, setScroll] = useState<boolean>(false);
        const [imageHeight, setImageHeight] = useState<number>(0);

        useEffect(() => {
            const handleResize = () => {
                const imageWrappers = document.querySelectorAll(
                    ".project-item__image-wrapper"
                );

                const images = document.querySelectorAll(
                    ".project-item__image"
                );

                imageWrappers.forEach((wrapper) => {
                    const height =
                        ((images[id - 1].clientHeight - wrapper.clientHeight) *
                            100) /
                        images[id - 1].clientHeight;

                    setImageHeight(height);
                });
            };
            handleResize();
        }, [scroll]);

        return (
            <li
                key={id}
                className={clsx(
                    "projects-list__item project-item",
                    id % 2 === 0 && "project-item-reversed"
                )}
                ref={ref}
            >
                <motion.a
                    custom={id}
                    variants={A.projects_list}
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="project-item__left">
                        <div className="project-item__image-wrapper">
                            <img
                                src={image}
                                alt="project-image"
                                className="project-item__image"
                                style={{
                                    transform: scroll
                                        ? `translateY(-${imageHeight}%)`
                                        : "translateY(0%)",
                                    transition: "transform 10s ease-in-out",
                                }}
                                onMouseEnter={() => setScroll(true)}
                                onMouseLeave={() => setScroll(false)}
                            />
                        </div>
                    </div>
                </motion.a>
                <motion.div
                    custom={id}
                    variants={A.projects_list}
                    className="project-item__right"
                >
                    <h3 className="project-item__title">
                        {title} {icon}
                    </h3>
                    <p className="project-item__description">{description}</p>
                    <ul className="project-item__techno techno-list">
                        {technologies.map((item, key) => (
                            <li key={key} className="techno-list__item">
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    <ul className="decode-list">
                        {code.length !== 0 && (
                            <li className="decode-list__item">
                                <a href={code} className="decode-list__link" target={"_blank"}>
                                    Code{" "}
                                    <BsGithub className="decode-list__icon" />
                                </a>
                            </li>
                        )}
                        <li className="decode-list__item">
                            <a href={demo} className="decode-list__link" target={"_blank"}>
                                Demo{" "}
                                <RiShareBoxLine className="decode-list__icon" />
                            </a>
                        </li>
                    </ul>
                </motion.div>
            </li>
        );
    }
);

export const MProjectBox = motion(ProjectBox);
