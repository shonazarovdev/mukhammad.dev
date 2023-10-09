import { THero, TMenuList, TProjectsList, TSkillsList, TSocialMediaList } from "./types";

export const heroData: THero = {
    title: 'Front-End React Developer',
    titleIcon: '',
    desc: "Hi, I'm Mukhammad Khamidovic. A passionate Front-end Developer based in Khorezm, Uzbekistan.",
    descIcon: '📍'
}

export const menuList: TMenuList[] = [
    {
        id: 1,
        title: "Home",
        link: '#home',
        name: 'home'
    },
    {
        id: 2,
        title: 'About',
        link: '#about',
        name: 'about'
    },
    {
        id: 3,
        title: 'Projects',
        link: '#projects',
        name: 'projects'
    },
    {
        id: 4,
        title: 'Contact',
        link: '#contact',
        name: 'contact'
    },

]

export const socialMediaList: TSocialMediaList[] = [
    {
        id: 1,
        name: 'Telegram',
        title: 'BsTelegram',
        link: 'https://t.me/themaverickmu'
    },
    {
        id: 2,
        name: 'LinkedIn',
        title: 'BsLinkedin',
        link: 'https://www.linkedin.com/in/mukhammadDev'
    },
    {
        id: 3,
        name: 'Github',
        title: 'BsGithub',
        link: 'https://github.com/themaverickmu'
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
        title: 'Scss',
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
    },
    {
        id: 11,
        title: 'Tailwind',
        icon: 'TailwindSvg'
    }
]

export const projectsList: TProjectsList[] = [
    {
        id: 1,
        title: 'Muhannad Service',
        icon: '🧪',
        description: 'A testing service website. The service serves manufacturers, suppliers of construction products and provides services for certification',
        image: '/images/projects/pro_1.webp',
        scrollY: 2825,
        technologies: ['Next.Js', 'SCSS'],
        code: 'https://github.com/themaverickmu/muhannad-next',
        demo: 'https://muhannad-next.vercel.app/'
    },
    {
        id: 2,
        title: 'Portfolio',
        icon: '🌌',
        description: 'A portfolio website of UI/UX Designer Javlon. There are a lot of beautiful websites designed by Javlon.',
        image: '/images/projects/pro_2.webp',
        scrollY: 2979,
        technologies: ['Vite.Js', 'SCSS', 'TypeScript'],
        code: 'https://github.com/themaverickmu/javlon-vite',
        demo: 'https://javlon-vite.vercel.app/'
    },
]