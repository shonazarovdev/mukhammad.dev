import { THero, TMenuList, TProjectsList, TSkillsList, TSocialMediaList } from "../helpers/types";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/all";
import {
    CssSvg,
    GithubSvg,
    GitSvg,
    HtmlSvg,
    JavaScriptSvg,
    NextSvg,
    ReactSvg,
    SassSvg, StyledCompSvg, TailwindSvg,
    TypeScriptSvg
} from "../assets/skills";

export const heroData: THero = {
    title: 'Frontend JavaScript Developer',
    titleIcon: '',
    desc: "Привет, меня зовут Шоназаров Мухаммад. Я веб-разработчик из Хорезма",
    descIcon: '📍'
}

export const menuList: TMenuList[] = [
    {
        id: 1,
        title: "Главная",
        link: '#home',
        name: 'home'
    },
    {
        id: 2,
        title: 'Обо мне',
        link: '#about',
        name: 'about'
    },
    {
        id: 3,
        title: 'Портфолио',
        link: '#portfolio',
        name: 'portfolio'
    },
    {
        id: 4,
        title: 'Контакты',
        link: '#contact',
        name: 'contact'
    },

]

export const socialMediaList: TSocialMediaList[] = [
    {
        id: 1,
        name: 'Telegram',
        icon: <BsTelegram/>,
        link: 'https://t.me/Muhammad_Shonazarov'
    },
    {
        id: 2,
        name: 'LinkedIn',
        icon: <BsLinkedin/>,
        link: 'https://www.linkedin.com/in/muhammad-shonazarov'
    },
    {
        id: 3,
        name: 'Github',
        icon: <BsGithub/>,
        link: 'https://github.com/shonazarovdev'
    },
    {
        id: 4,
        name: 'Facebook',
        icon: <FaFacebook/>,
        link: 'https://facebook.com/shonazarovmuhammad'
    },
    {
        id: 5,
        name: 'Instagram',
        icon: <FaInstagram/>,
        link: 'https://instagram.com/mukhammad.028'
    },
    {
        id: 6,
        name: 'Twitter',
        icon: <FaTwitter/>,
        link: 'https://x.com/mukhammaddev'
    },
]

export const skillsList: TSkillsList[] = [
    {
        id: 1,
        title: 'HTML',
        icon: <HtmlSvg/>
    },
    {
        id: 2,
        title: 'CSS',
        icon: <CssSvg/>
    },
    {
        id: 3,
        title: 'Scss',
        icon: <SassSvg/>
    },
    {
        id: 4,
        title: 'JavaScript',
        icon: <JavaScriptSvg/>
    },
    {
        id: 5,
        title: 'TypeScript',
        icon: <TypeScriptSvg/>
    },
    {
        id: 6,
        title: 'React',
        icon: <ReactSvg/>
    },
    {
        id: 7,
        title: 'Next',
        icon: <NextSvg/>
    },
    {
        id: 8,
        title: 'Git',
        icon: <GitSvg/>
    },
    {
        id: 9,
        title: 'Github',
        icon: <GithubSvg/>
    },
    {
        id: 10,
        title: 'Styled Components',
        icon: <StyledCompSvg/>
    },
    {
        id: 11,
        title: 'Tailwind',
        icon: <TailwindSvg/>
    }
]

export const projectsList: TProjectsList[] = [
    {
        id: 6,
        title: 'Yancar Design (January 2025)',
        icon: '🏎️',
        description: 'Веб-сайт компании Yancar Design. Вы можете получить приятные товары и услуги для вашего автомобиля, поговорим меньше и просто посетите...',
        image: '/images/desktop-pro_5.avif',
        imageMobile: '/images/desktop-pro_5.avif',
        sizes: {
            width: 620,
            height: 2511,
            widthMin: 655,
            heightMin: 375
        },
        scrollY: 2961,
        technologies: ['React', 'TailwindCSS', 'JavaScript'],
        code: '',
        demo: 'https://yancar.uz/'
    },
    {
        id: 5,
        title: 'Uyga (November 2024)',
        icon: '🏡',
        description: 'Официальный сайт компании Uyga. Вы можете получить информацию о продукте и ознакомиться с их услугами',
        image: '/images/desktop-pro_4.avif',
        imageMobile: '/images/desktop-pro_4.avif',
        sizes: {
            width: 620,
            height: 2511,
            widthMin: 655,
            heightMin: 375
        },
        scrollY: 2961,
        technologies: ['Laravel', 'TailwindCSS', 'JQuery'],
        code: '',
        demo: 'https://uyga.pro/'
    },
    {
        id: 4,
        title: 'MilliyPay (June 2024)',
        icon: '📱',
        description: 'Официальный сайт компании MilliyPay. Вы можете получить информацию о продукте и ознакомиться с их услугами',
        image: '/images/desktop-pro_3.avif',
        imageMobile: '/images/desktop-pro_3.avif',
        sizes: {
            width: 620,
            height: 2511,
            widthMin: 655,
            heightMin: 375
        },
        scrollY: 2961,
        technologies: ['Laravel', 'TailwindCSS', 'JQuery'],
        code: '',
        demo: 'https://milliypay.uz/'
    },
    {
        id: 3,
        title: 'ORZU GROUP (August 2023)',
        icon: '📱',
        description: 'Веб-сайт компании ORZU GROUP. Вы можете получить приятные товары для вашего питания',
        image: '/images/desktop-pro_6.avif',
        imageMobile: '/images/desktop-pro_6.avif',
        sizes: {
            width: 360,
            height: 1632,
            widthMin: 655,
            heightMin: 375
        },
        scrollY: 1000,
        technologies: ['Laravel', 'TailwindCSS', 'JQuery'],
        code: '',
        demo: 'https://milliypay.uz/'
    },
    {
        id: 2,
        title: 'Jony Portfolio (June 2023)',
        icon: '🌌',
        description: 'Портфолио веб-сайта дизайнера Javlon. Есть много красивых сайтов, разработанных от имени Javlon',
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
        demo: 'https://jony.vercel.app/'
    },
    {
        id: 1,
        title: 'Muhannad Sinov Service (December 2022)',
        icon: '🧪',
        description: 'Веб-сайт компании Muhannad Sinov Service. Вы можете получить качественные услуги для вашего бизнеса',
        image: '/images/desktop-pro_1.webp',
        imageMobile: '/images/desktop-pro_1.webp',
        sizes: {
            width: 620,
            height: 2385,
            widthMin: 655,
            heightMin: 375
        },
        scrollY: 2825,
        technologies: ['Next.Js', 'SCSS'],
        code: 'https://github.com/shonazarovdev/muhannad-next',
        demo: 'https://mss-sert.uz/'
    },
]

// Some commit