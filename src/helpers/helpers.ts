export function scrollToSection(sectionId: string): void {
    const section: HTMLElement | null = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}