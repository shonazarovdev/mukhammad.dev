export function scrollToSection(sectionId: string): void {
    const section: HTMLElement | null = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop + 2,
            behavior: 'smooth'
        });
    }
}

export function regexEmail(name: string): boolean {
    const re = String(name)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    return Boolean(re)
}