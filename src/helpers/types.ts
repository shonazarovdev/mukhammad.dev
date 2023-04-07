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
    title: string
    link: string
}

export type THero = {
    title: string
    titleIcon: string
    desc: string
    descIcon: string
}

export type TSkillsList = NumberID & {
    title: string
    icon: string
}

export type TProjectsList = NumberID & {
    title: string
    icon: string
    description: string
    image: string
    technologies: string[]
    code: string
    demo: string
}