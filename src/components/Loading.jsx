import { motion } from "framer-motion";
import loaderImg from "../assets/loader.avif";

const Loading = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center font-sans"
        >
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${loaderImg})` }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center gap-8"
            >
                <h1 className="font-hero text-6xl md:text-8xl text-white italic tracking-wider stroke-black" style={{ textShadow: "4px 4px 0px #000" }}>
                    LOADING...
                </h1>

                <div className="relative w-72 md:w-96 h-8 border-4 border-black bg-white shadow-[6px_6px_0px_#000] -rotate-1 rounded-sm overflow-hidden">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.2, ease: "easeInOut" }}
                        className="h-full bg-yellow-500 border-r-4 border-black box-border relative"
                    >
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)',
                            backgroundSize: '10px 10px'
                        }}></div>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="font-comic text-xl text-white font-bold tracking-widest uppercase mt-2 drop-shadow-md"
                >
                    Loading Multiverse...
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Loading;
