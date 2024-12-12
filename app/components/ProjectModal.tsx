'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProjectModalProps {
    project: {
        title: string;
        src: string;
    } | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    return (
        <AnimatePresence>
            {isOpen && project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="bg-white w-[80vw] h-[80vh] rounded-lg overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="relative w-full h-2/3">
                            <Image
                                src={project.src}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                            {/* Ajoutez ici le contenu de votre projet */}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 