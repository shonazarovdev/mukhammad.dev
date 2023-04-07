import React, { FC } from 'react';
import { About, Contact, Hero, Projects } from '@components/index';
import {
    heroData,
    projectsList,
    skillsList,
    socialMediaList,
} from '@/helpers/data';

export const Main: FC = () => {
    return (
        <div className="main">
            <Hero social={socialMediaList} {...heroData} />
            <About skills={skillsList} />
            <Projects projects={projectsList} />
            <Contact />
        </div>
    );
};
