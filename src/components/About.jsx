import { motion } from "framer-motion";
import profileImg from "../assets/profile-1.avif";

const About = () => {
    return (
        <div className="min-h-screen w-full flex-grow bg-neutral-900 py-20 px-4 md:px-10 flex flex-col items-center justify-center overflow-hidden">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">

                <motion.div
                    initial={{ rotate: -10, opacity: 0, x: -100 }}
                    whileInView={{ rotate: -6, opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                    className="relative group cursor-pointer"
                >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-yellow-200/80 rotate-3 z-20 shadow-sm backdrop-blur-sm transform group-hover:-translate-y-1 transition-transform duration-300"></div>

                    <div className="bg-white p-4 pb-16 shadow-2xl transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-yellow-500/20">
                        <div className="relative overflow-hidden border-2 border-black/10">
                            <img
                                src={profileImg}
                                alt="Profile"
                                loading="lazy"
                                decoding="async"
                                className="w-72 h-72 md:w-80 md:h-80 object-cover grayscale-0 hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
                        </div>
                        <div className="absolute bottom-4 left-0 w-full text-center">
                            <p className="font-comic text-2xl text-black">It's Me!</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ rotate: 5, opacity: 0, y: 100 }}
                    whileInView={{ rotate: 2, opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
                    className="relative max-w-xl"
                >
                    <div className="absolute -top-4 -left-4 w-24 h-8 bg-neutral-200/90 -rotate-12 z-20 shadow-md"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-8 bg-neutral-200/90 -rotate-12 z-20 shadow-md"></div>

                    <div className="bg-[#fdfaf1] p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(30,30,30,1)] border-2 border-neutral-800 transform rotate-1">
                        <h2 className="font-hero text-4xl md:text-5xl text-black mb-6 border-b-4 border-black inline-block pb-2">
                            ABOUT ME
                        </h2>

                        <p>
                            <span className="font-bold text-yellow-600">A full-stack developer</span> who loves turning ideas into interactive web experiences.
                        </p>
                        <p>
                            I mix clean code with <span className="underline decoration-wavy decoration-red-500 underline-offset-4">creative design</span>—just like a comic panel brought to life.
                        </p>
                        <p>
                            When I’m not coding, I’m exploring new tech, reading comics, or leveling up my skills.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default About;
