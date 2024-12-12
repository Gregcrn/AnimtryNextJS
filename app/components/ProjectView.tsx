'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectViewProps {
    project: {
        title: string;
        src: string;
        color: string;
    };
    isVisible: boolean;
}

export default function ProjectView({ project, isVisible }: ProjectViewProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="fixed inset-0 z-[160] bg-white"
        >
            <div className="w-full h-full flex flex-col">
                <div className="relative w-full h-[70vh]">
                    <Image
                        src={project.src}
                        fill
                        style={{ objectFit: 'cover' }}
                        alt={project.title}
                    />
                </div>
                <div className="p-10">
                    <h1 className="text-4xl font-bold">{project.title}</h1>
                    {/* Ajoutez ici le contenu de votre projet */}
                </div>
            </div>
        </motion.div>
    );
} 