import React, { FC } from 'react';
import { ProjectBox } from './ProjectBox';

interface IProjects {
    projects: {
        id: number;
        title: string;
        icon: string;
        description: string;
        image: string;
        technologies: string[];
        code: string;
        demo: string;
    }[];
}

export const Projects: FC<IProjects> = ({ projects }) => {
    return (
        <section id="projects" className="section projects">
            <div className="projects__wrapper">
                <div className="projects__container">
                    <div className="projects__body">
                        <div className="section-header">
                            <h2 className="section-title">Projects</h2>
                            <p className="section-subtitle">
                                Each project is a unique piece of development 🧩
                            </p>
                        </div>
                        <ul className="projects__main projects-list">
                            {projects.map((item, key) => (
                                <ProjectBox key={key} {...item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
