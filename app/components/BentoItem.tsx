"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BentoItemProps {
    title: string;
    description: string;
    image: string;
    className?: string;
    cursorColor?: string;
}

export default function BentoItem({ title, description, image, className, cursorColor }: BentoItemProps) {
    return (
        <motion.div 
            className={`${className} relative overflow-hidden rounded-3xl`}
            data-cursor="-text"
            data-cursor-text={title}
            data-cursor-color={cursorColor}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Image src={image} alt={title} fill className="object-cover transition-all duration-500 group-hover:scale-110"/>
                {/* <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-500" /> */}
            </motion.div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-200">{description}</p>
            </div>
        </motion.div>
    );
}