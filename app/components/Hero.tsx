"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">

            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-center mb-6"
                    // data-cursor="-media"
                    data-cursor-img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400"
                >
                    We Create
                    <br />
                    Digital Experience
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-center mb-8 max-w-2xl"
                >
                    Award-winning design studio focused on digital products and online experiences
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                    View Our Work
                </motion.button>
            </div>
        </div>
    );
}