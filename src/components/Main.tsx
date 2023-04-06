import React, { FC } from 'react';
import { About, Hero } from '@components/index';
import { heroData, skillsList, socialMediaList } from '@/helpers/data';

export const Main: FC = () => {
    return (
        <div className="main">
            <Hero social={socialMediaList} {...heroData} />
            <About skills={skillsList} />
        </div>
    );
};
