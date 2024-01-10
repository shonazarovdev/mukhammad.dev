import { FC, useEffect, useState, forwardRef } from "react";
import { BsGithub } from "react-icons/bs";
import { RiShareBoxLine } from "react-icons/ri";
import clsx from "clsx";
import { motion } from "framer-motion";
import * as A from "../helpers/animations";
import useWindowSize from "../hooks/useWindowSize";
import { TProjectsList } from "../helpers/types";

export const ProjectBox: FC<TProjectsList> = forwardRef<HTMLLIElement, TProjectsList>(
    (
        { id, title, icon, description, image, imageMobile, sizes, technologies, code, demo },
        ref
    ) => {
        const [imageType, setImageType] = useState<string>('');
        const [scroll, setScroll] = useState<boolean>(false);
        const [imageHeight, setImageHeight] = useState<number>(0);
        const { width } = useWindowSize();
        const isDesktop = width && width >= 768

        useEffect(() => {

            window.innerWidth <= 768 ? setImageType('mobile') : setImageType('desktop')

            window.addEventListener('resize', () => setImageType(isDesktop ? image : imageMobile))

            return window.removeEventListener('resize', () => setImageType(isDesktop ? image : imageMobile))
        }, []);

        useEffect(() => {
            const handleResize = () => {
                const imageWrappers = document.querySelectorAll(
                    ".portfolio-item__image-wrapper"
                );

                const images = document.querySelectorAll(
                    ".portfolio-item__image"
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
                    "portfolio-list__item portfolio-item",
                    id % 2 === 0 && "portfolio-item-reversed"
                )}
                ref={ref}
            >
                <motion.a
                    custom={id}
                    variants={A.projects_list}
                    href={demo}
                    target="_blank"
                >
                    <div className="portfolio-item__left">
                        <div className="portfolio-item__image-wrapper">
                            <img
                                src={imageType === 'desktop' ? image : imageMobile}
                                alt={title}
                                className="portfolio-item__image"
                                style={{
                                    transform: isDesktop && scroll
                                        ? `translateY(-${imageHeight}%)`
                                        : "translateY(0%)",
                                    transition: "transform 10s ease-in-out",
                                }}
                                onMouseEnter={() => !!isDesktop && setScroll(true)}
                                onMouseLeave={() => !!isDesktop && setScroll(false)}
                                width={imageType === 'desktop' ? sizes.width : sizes.widthMin}
                                height={imageType === 'desktop' ? sizes.height : sizes.heightMin}
                            />
                        </div>
                    </div>
                </motion.a>
                <motion.div
                    custom={id}
                    variants={A.projects_list}
                    className="portfolio-item__right"
                >
                    <h3 className="portfolio-item__title">
                        {title} {icon}
                    </h3>
                    <p className="portfolio-item__description">{description}</p>
                    <ul className="portfolio-item__techno techno-list">
                        {technologies.map((item, key) => (
                            <li key={key} className="techno-list__item">
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    <ul className="decode-list">
                        {code.length !== 0 && (
                            <li className="decode-list__item">
                                <a href={code} className="decode-list__link" target={"_blank"} title={'Source code ' + title}>
                                    Code{" "}
                                    <BsGithub className="decode-list__icon" />
                                </a>
                            </li>
                        )}
                        <li className="decode-list__item">
                            <a href={demo} className="decode-list__link" target={"_blank"} title={'Demo ' + title}>
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
