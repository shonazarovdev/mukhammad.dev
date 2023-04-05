import React, { FC } from 'react';
import { Hero } from '@components/index';
import { heroData, socialMediaList } from '@/helpers/data';

export const Main: FC = () => {
    return (
        <div className="main">
            <Hero social={socialMediaList} {...heroData} />
        </div>
    );
};
