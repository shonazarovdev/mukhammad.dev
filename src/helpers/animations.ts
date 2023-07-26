const hero_text = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: (custom: number = 1) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const hero_social = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
    }
}

const section_title = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: (custom: number = 1) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const about_text = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom: number = 1) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const about_skills = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom: number = 1) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const projects_list = {
    hidden: (custom: number) => ({
        x: custom % 2 === 0 ? -200 : 200,
        opacity: 0
    }),
    visible: {
        x: 0,
        opacity: 1
    }
}

export { hero_text, hero_social, section_title, about_text, about_skills, projects_list }