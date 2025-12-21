import { motion, useMotionValue, useTransform } from 'framer-motion';
import heroBg from '../assets/hero.webp';
import reactIcon from '../assets/React_light.svg';
import tailwindIcon from '../assets/tailwindcss.svg';
import html from "../assets/html5.svg"
import css from '../assets/css_old.svg'
import js from '../assets/javascript.svg'
import nodejs from '../assets/nodejs.svg'
import linux from '../assets/linux.svg'
import express from "../assets/Express.js_light.svg"
import typescript from "../assets/typescript.svg"
import postgres from "../assets/postgresql.svg"

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event) {
        const { clientX, clientY } = event;
        mouseX.set(clientX - window.innerWidth / 2);
        mouseY.set(clientY - window.innerHeight / 2);
    }

    const bgX = useTransform(mouseX, (value) => value / 50);
    const bgY = useTransform(mouseY, (value) => value / 50);
    const textX = useTransform(mouseX, (value) => value / -25);
    const textY = useTransform(mouseY, (value) => value / -25);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300 }
        }
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-900 font-sans cursor-default"
        >
            <motion.div
                style={{
                    backgroundImage: `url(${heroBg})`,
                    x: bgX,
                    y: bgY,
                    scale: 1.2
                }}
                className="absolute inset-0 bg-cover bg-center"
            />

            <motion.div
                style={{ x: textX, y: textY }}
                className="z-10 flex flex-col items-center select-none w-full px-4"
            >
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-hero text-5xl sm:text-7xl md:text-[10rem] font-black italic uppercase text-yellow-400 leading-none text-center"
                    style={{
                        textShadow: '6px 6px 0px #000',
                        WebkitTextStroke: window.innerWidth < 768 ? '2px black' : '4px black'
                    }}
                >
                    AMANDEEP
                </motion.h1>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 bg-black text-white px-4 md:px-8 py-2 -rotate-1 shadow-[5px_5px_0px_#eab308] max-w-[90%]"
                >
                    <p className="text-sm md:text-xl font-bold uppercase tracking-widest text-center">
                        Full Stack Developer // Problem Solver
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4 max-w-sm md:max-w-none"
                >
                    {[
                        { src: reactIcon, rot: "rotate-2" },
                        { src: tailwindIcon, rot: "-rotate-2" },
                        { src: js, rot: "rotate-3" },
                        { src: html, rot: "-rotate-3" },
                        { src: css, rot: "rotate-1" },
                        { src: nodejs, rot: "-rotate-1" },
                        { src: linux, rot: "-rotate-3" },
                        { src: express, rot: "rotate-2" },
                        { src: typescript, rot: "-rotate-1" },
                        { src: postgres, rot: "rotate-3" }
                    ].map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`bg-white p-2 border-[3px] border-black shadow-[4px_4px_0px_#000] ${skill.rot} hover:scale-110 transition-transform cursor-pointer`}
                        >
                            <img src={skill.src} alt="skill" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        </section>
    );
};

export default Hero;
