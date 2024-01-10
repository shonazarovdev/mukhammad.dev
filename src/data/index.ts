import { THero, TMenuList, TProjectsList, TSkillsList, TSocialMediaList } from "../helpers/types";

export const heroData: THero = {
    title: 'Front-End React Developer',
    titleIcon: '',
    desc: "Hi, I'm Muhammad Shonazarov. A passionate Front-end Developer based in Khorezm, Uzbekistan.",
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
        title: 'Portfolio',
        link: '#portfolio',
        name: 'portfolio'
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
        link: 'https://t.me/shonazarovdev'
    },
    {
        id: 2,
        name: 'LinkedIn',
        title: 'BsLinkedin',
        link: 'https://www.linkedin.com/in/mukhammaddev'
    },
    {
        id: 3,
        name: 'Github',
        title: 'BsGithub',
        link: 'https://github.com/shonazarovdev'
    },
    {
        id: 4,
        name: 'Facebook',
        title: 'FaFacebook',
        link: 'https://facebook.com/mukhammaddev'
    },
    {
        id: 5,
        name: 'Instagram',
        title: 'FaInstagram',
        link: 'https://instagram.com/mukhammaddev'
    },
    {
        id: 6,
        name: 'Twitter',
        title: 'FaTwitter',
        link: 'https://twitter.com/mukhammaddev'
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
        title: 'Muhannad Sinov Service (December 2022)',
        icon: '🧪',
        description: 'A testing service website. The service serves manufacturers, suppliers of construction products and provides services for certification',
        image: '/images/desktop-pro_1.webp',
        imageMobile: '/images/mobile-pro_1.webp',
        sizes: {
            width: 620,
            height: 2385,
            widthMin: 655,
            heightMin: 375
        },
        scrollY: 2825,
        technologies: ['Next.Js', 'SCSS'],
        code: 'https://github.com/shonazarovdev/muhannad-next',
        demo: 'https://muhannad-next.vercel.app/'
    },
    {
        id: 2,
        title: 'Jony Portfolio (June 2023)',
        icon: '🌌',
        description: 'A portfolio website of UI/UX Designer Javlon. There are a lot of beautiful websites designed by Javlon.',
        image: '/images/desktop-pro_2.webp',
        imageMobile: '/images/desktop-pro_2.webp',
        sizes: {
            width: 620,
            height: 2511,
            widthMin: 655,
            heightMin: 375
        },
        scrollY: 2979,
        technologies: ['Vite.Js', 'SCSS', 'TypeScript'],
        code: 'https://github.com/shonazarovdev/javlon-vite',
        demo: 'https://javlon-vite.vercel.app/'
    },
]

// Some commit