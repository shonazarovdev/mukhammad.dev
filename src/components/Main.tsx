import React, { FC } from "react";
import {
    heroData,
    projectsList,
    skillsList,
    socialMediaList,
} from "@/helpers/data";
import { About, Contact, Hero, Projects } from "@components/index";

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
