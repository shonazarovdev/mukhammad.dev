import { THero, TMenuList, TSkillsList, TSocialMediaList } from "./types";

export const heroData: THero = {
    title: 'Front-End React Developer',
    titleIcon: '👋',
    desc: "Hi, I'm Mukhammad Khamid. A passionate Front-end React Developer based in Khorezm, Uzbekistan.",
    descIcon: '📍'
}

export const menuList: TMenuList[] = [
    {
        id: 1,
        title: "Home",
        link: '#home'
    },
    {
        id: 2,
        title: 'About',
        link: '#about'
    },
    {
        id: 3,
        title: 'Projects',
        link: '#projects',
    },
    {
        id: 4,
        title: 'Contact',
        link: '#contact',
    },

]

export const socialMediaList: TSocialMediaList[] = [
    {
        id: 1,
        name: 'Telegram',
        title: 'BsTelegram',
        link: 'https://t.me/mukhammadDev'
    },
    {
        id: 2,
        name: 'LinkedIn',
        title: 'BsLinkedin',
        link: 'https://www.linkedin.com/in/mukhammad-shonazarov-68878325a'
    },
    {
        id: 3,
        name: 'Github',
        title: 'BsGithub',
        link: 'https://github.com/MukhammadDev9'
    },
]

export const skillsList: TSkillsList[] = [
    {
        id: 1,
        title: 'HTML',
        icon: 'HtmlSvg'
    },
    {
        id: 2,
        title: 'CSS',
        icon: 'CssSvg'
    },
    {
        id: 3,
        title: 'Sass',
        icon: 'SassSvg'
    },
    {
        id: 4,
        title: 'JavaScript',
        icon: 'JavaScriptSvg'
    },
    {
        id: 5,
        title: 'TypeScript',
        icon: 'TypeScriptSvg'
    },
    {
        id: 6,
        title: 'React',
        icon: 'ReactSvg'
    },
    {
        id: 7,
        title: 'Next',
        icon: 'NextSvg'
    },
    {
        id: 8,
        title: 'Git',
        icon: 'GitSvg'
    },
    {
        id: 9,
        title: 'Github',
        icon: 'GithubSvg'
    },
    {
        id: 10,
        title: 'Styled Components',
        icon: 'StyledCompSvg'
    }
]