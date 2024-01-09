import React, { FC } from "react";
import {
    heroData,
    projectsList,
    skillsList,
    socialMediaList,
} from "@/data";
import { About, Contact, Hero, Portfolio } from "@components/index";

export const Main: FC = () => {
    return (
        <div className="main">
            <Hero social={socialMediaList} {...heroData} />
            <About skills={skillsList} />
            <Portfolio projects={projectsList} />
            <Contact />
        </div>
    );
};
