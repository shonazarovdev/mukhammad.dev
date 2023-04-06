type NumberID = {
    id: number
}

export type TMenuList = NumberID & {
    title: string
    link: string
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