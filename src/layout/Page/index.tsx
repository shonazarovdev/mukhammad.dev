import React, { FC } from 'react';
import { Footer, Header, Main } from '@components/index';
import { menuList, socialMediaList } from '@helpers/data';

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
