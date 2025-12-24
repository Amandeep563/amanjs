import Lenis from 'lenis'
import { useState, useEffect } from 'react'
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
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <main className="bg-black">
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
        </main>)
}

export default App
