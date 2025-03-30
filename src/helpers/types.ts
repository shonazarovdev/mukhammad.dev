type NumberID = {
    id: number
}

export type TMenuList = NumberID & {
    title: string
    link: string
    name: string
}

export type TSocialMediaList = NumberID & {
    name: string
    icon: React.ReactElement
    link: string
}

export type THero = {
    title: string
    titleIcon: string
    desc: string
    descIcon: string
}

export type TSkillsList = {
    title: string
    icon: React.ReactNode
}

export type TProjectsList = NumberID & {
    title: string
    icon: string
    description: string
    image: string
    imageMobile: string
    sizes: {
        width: number
        height: number
        widthMin: number
        heightMin: number
    }
    scrollY: number
    technologies: string[]
    code: string
    demo: string
}