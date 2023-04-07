import React, { FC, useEffect, useState } from 'react';
import { GithubSvg } from '@/assets/skills';
import clsx from 'clsx';
import { RiShareBoxLine } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';

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

export const ProjectBox: FC<IProject> = ({
    id,
    title,
    icon,
    description,
    image,
    technologies,
    code,
    demo,
}) => {
    const [scroll, setScroll] = useState(false);
    const [imageHeight, setImageHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const images = document.querySelectorAll('.project-item__image');
            const imageWrapper = document.querySelectorAll(
                '.project-item__image-wrapper',
            );
            const wrapperHeight: number = imageWrapper[0].clientHeight;
            images.forEach((image) => {
                const height = image.clientHeight - wrapperHeight;
                setImageHeight(height);
            });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [scroll]);

    return (
        <li
            key={id}
            className={clsx(
                'projects-list__item project-item',
                id % 2 === 0 && 'project-item-reversed',
            )}>
            <a href={demo} target="_blank" rel="noreferrer">
                <div className="project-item__left">
                    <div className="project-item__image-wrapper">
                        <img
                            src={image}
                            alt="project-image"
                            className="project-item__image"
                            style={{
                                transform: scroll
                                    ? `translateY(-${imageHeight}px)`
                                    : 'translateY(0%)',
                                transition: 'transform 10s ease-in-out',
                            }}
                            onMouseEnter={() => setScroll(true)}
                            onMouseLeave={() => setScroll(false)}
                        />
                    </div>
                </div>
            </a>
            <div className="project-item__right">
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
                    <li className="decode-list__item">
                        <a href={code} className="decode-list__link">
                            Code <BsGithub className="decode-list__icon" />
                        </a>
                    </li>
                    <li className="decode-list__item">
                        <a href={demo} className="decode-list__link">
                            Demo{' '}
                            <RiShareBoxLine className="decode-list__icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    );
};
