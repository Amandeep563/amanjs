import { motion } from 'framer-motion';
import projectBg from '../assets/project.webp';
import { projectsData } from '../data/projects';

const ProjectCard = ({ title, description, tags, index, github, live, image }) => {
    const rotations = ['rotate-1', '-rotate-1'];
    const rotation = rotations[index % rotations.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
            className={`relative bg-white border-[4px] md:border-[6px] border-black p-4 md:p-6 shadow-[15px_15px_0px_#000] md:shadow-[20px_20px_0px_#000] ${rotation} mb-16`}
        >
            <div className="w-full h-56 md:h-96 bg-gray-100 border-4 border-black overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <div className="flex items-center justify-center h-full font-black text-gray-300 italic text-2xl md:text-4xl">
                    <img src={image} title={title} loading="lazy" decoding="async" />
                </div>

                <div className="absolute bottom-3 right-3 flex gap-2 z-20">
                    <a href={github} target="_blank" rel="noreferrer" className="bg-yellow-400 border-2 md:border-4 border-black p-2 md:p-3 shadow-[3px_3px_0px_#000] hover:-translate-y-1 transition-transform">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                    <a href={live} target="_blank" rel="noreferrer" className="bg-red-500 text-white border-2 md:border-4 border-black p-2 md:p-3 shadow-[3px_3px_0px_#000] hover:-translate-y-1 transition-transform">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                </div>
            </div>

            <div className="absolute -top-5 left-4 md:left-6 bg-yellow-400 border-[3px] md:border-[4px] border-black px-4 md:px-6 py-1 md:py-2 shadow-[4px_4px_0px_#000] z-30">
                <h3 className="font-black italic uppercase text-lg md:text-4xl tracking-tighter">{title}</h3>
            </div>

            <div className="mt-8 bg-black p-4 -mx-4 md:mx-0 shadow-[6px_6px_0px_#facc15] overflow-hidden">
                <p className="font-bold text-white text-base md:text-xl leading-tight mb-4 break-words whitespace-normal">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                    {tags.map(tag => (
                        <span key={tag} className="bg-white text-black text-[10px] md:text-xs font-black px-2 md:px-3 py-1 uppercase italic border-2 border-black">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section
            className="relative min-h-screen w-full py-20 px-4 md:px-12 bg-fixed bg-center bg-no-repeat bg-[length:auto_100%] md:bg-cover"
            style={{ backgroundImage: `url(${projectBg})` }}
        >
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
            <div className="max-w-4xl mx-auto mb-16">
                <motion.h2
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    className="font-comic text-5xl md:text-9xl font-black italic text-white uppercase inline-block bg-red-600 px-6 py-2 border-[4px] md:border-[6px] border-black shadow-[8px_8px_0px_#000] md:shadow-[12px_12px_0px_#000] -rotate-3"
                >
                    Projects
                </motion.h2>
            </div>

            <div className=" max-w-4xl mx-auto flex flex-col gap-12 md:gap-20">
                {projectsData.map((proj, i) => (
                    <ProjectCard key={i} index={i} {...proj} />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />
        </section>
    );
};

export default Projects;
