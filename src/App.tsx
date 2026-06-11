import { useCallback, useEffect, useState } from "react";
import {
    About,
    Contact,
    Cursor,
    Experience,
    Footer,
    Header,
    Hero,
    Marquee,
    Preloader,
    Works
} from "./components";
import { marqueeItems } from "./data/content";
import { ScrollTrigger } from "./lib/gsap";
import { destroySmoothScroll, initSmoothScroll } from "./lib/scroll";

export default function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        initSmoothScroll();
        return () => destroySmoothScroll();
    }, []);

    useEffect(() => {
        if (loaded) ScrollTrigger.refresh();
    }, [loaded]);

    const handlePreloaderComplete = useCallback(() => setLoaded(true), []);

    return (
        <>
            <Preloader onComplete={handlePreloaderComplete} />
            <Cursor />
            <Header />
            <main>
                <Hero started={loaded} />
                <Marquee items={marqueeItems} />
                <About />
                <Experience />
                <Works />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
