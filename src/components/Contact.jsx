import { motion } from 'framer-motion';
import contactBg from '../assets/contact.jpg';

const Contact = () => {
    return (
        <section
            className="relative min-h-screen w-full flex items-center justify-center py-20 px-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${contactBg})` }}
        >
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-0" />

            <div className="absolute inset-0 bg-black/10 md:bg-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-2xl w-full bg-white border-[6px] border-black p-8 md:p-12 shadow-[20px_20px_0px_#000] text-center"
            >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-red-600 border-4 border-black px-8 py-2 shadow-[6px_6px_0px_#000] -rotate-2">
                    <h2 className="font-hero text-4xl md:text-6xl font-black italic text-white uppercase tracking-tighter">
                        CONTACT
                    </h2>
                </div>

                <p className="mt-10 text-xl md:text-3xl font-black uppercase italic leading-tight text-black break-words">
                    Have a mission for me? <br />
                    <span className="text-red-600">Let's build something legendary.</span>
                </p>

                <div className="mt-10 flex flex-col gap-6">
                    <a
                        href="mailto:amandeepbollampalli@gmail.com"
                        className="bg-yellow-400 border-4 border-black p-4 flex items-center justify-center gap-4 shadow-[8px_8px_0px_#000] hover:bg-yellow-300 transition-colors"
                    >
                        <span className="font-black text-2xl uppercase italic">Send a Signal</span>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>

                    <div className="grid grid-cols-2 gap-4">
                        <a
                            href="#"
                            className="bg-black text-white p-4 border-4 border-black flex items-center justify-center shadow-[8px_8px_0px_#eab308] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                        >
                            <span className="font-bold uppercase italic tracking-tighter text-lg">LinkedIn</span>
                        </a>
                        <a
                            href="#"
                            className="bg-white text-black p-4 border-4 border-black flex items-center justify-center shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                        >
                            <span className="font-bold uppercase italic tracking-tighter text-lg">GitHub</span>
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t-4 border-dotted border-black">
                    <p className="font-black text-xs md:text-sm uppercase opacity-60 tracking-widest">
                        Amandeep // All Rights Reserved. // 2025
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
