import React, { FC } from "react";
import { Footer, Header } from "../../components";
import { menuList, socialMediaList } from "../../data";

interface IPage {
    children: React.ReactNode;
}

export const Page: FC<IPage> = ({ children }) => {
    return (
        <>
            <Header data={menuList} />
            {children}
            <Footer data={socialMediaList} />
        </>
    );
};
