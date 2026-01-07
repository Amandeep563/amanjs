import Lenis from 'lenis'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Loading from "./components/Loading"
import Contact from "./components/Contact"
import About from "./components/About"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

const App = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2300);
        return () => clearTimeout(timer)
    }, []);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <main className="bg-black min-h-screen w-full">
            <AnimatePresence mode="wait">
                {loading ? (
                    <Loading key="loader" />
                ) : (
                    <motion.div key="content">
                        <section id="hero" className="relative h-screen">
                            <Hero />
                        </section>

                        <section id="about" className="relative w-full">
                            <About />
                        </section>

                        <section id="projects" className="relative">
                            <Projects />
                        </section>

                        <section id="contact" className="relative h-screen">
                            <Contact />
                        </section>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}

export default App
