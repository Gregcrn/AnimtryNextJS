"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";

const scaleAnimation = {
    initial: {
        scale: 0, x: "-50%", y: "-50%"
    },
    enter: {
        scale: 1, x: "-50%", y: "-50%",
        transition: {
            duration: 0.35,
            ease: [0.76, 0, 0.24, 1]
        }
    },
    closed: {
        scale: 0, x: "-50%", y: "-50%",
        transition: {
            duration: 0.4,
            ease: [0.32, 0, 0.67, 0]
        }
    }
}

interface OverViewProps {
    projects: {
        id: number;
        title: string;
        src: string;
        color: string;
    }[],
    modal: {
        active: boolean;
        index: number;
        isExpanded: boolean;
        isPositioned: boolean;
        isClicked: boolean;
    }
}

export default function OverView({ projects, modal }: OverViewProps) {
    const { active, index, isExpanded, isPositioned, isClicked } = modal;
    const modalContainer = useRef<HTMLDivElement>(null);
    const cursor = useRef<HTMLDivElement>(null);
    const cursorLabel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!modalContainer.current || !cursor.current || !cursorLabel.current) return;
        
        //Move Container
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
        //Move cursor
        let xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
        let yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
        //Move cursor label
        let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })

        const handleMouseMove = (e: MouseEvent) => {
            const { pageX, pageY } = e;
            
            // Ne déplace le container que si on n'a pas cliqué
            if (!isClicked) {
                xMoveContainer(pageX)
                yMoveContainer(pageY)
            }
            
            // Le curseur continue de suivre la souris
            xMoveCursor(pageX)
            yMoveCursor(pageY)
            xMoveCursorLabel(pageX)
            yMoveCursorLabel(pageY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [isClicked, modalContainer, cursor, cursorLabel])

    return (
        <>
            <motion.div 
                ref={modalContainer} 
                variants={scaleAnimation} 
                initial="initial" 
                animate={active ? "enter" : "closed"}
                className="absolute h-[200px] w-[250px] bg-white overflow-hidden pointer-events-none flex items-center justify-center z-[50]"
            >
                <div
                    style={{ top: index * -100 + "%" }}
                    className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                >
                    {projects.map((project, index) => {
                        const { src, color } = project;
                        return (
                            <div
                                className="h-full w-full flex items-center justify-center"
                                style={{ backgroundColor: color }}
                                key={`modal_${index}`}
                            >
                                <Image
                                    src={`${src}`}
                                    width={200}
                                    height={250}
                                    alt="image"
                                    className="h-auto"
                                />
                            </div>
                        )
                    })}
                </div>
            </motion.div>
            <motion.div ref={cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}
                className="absolute w-[80px] h-[80px] rounded-full bg-[#455CE9] text-white z-[150] flex items-center justify-center text-sm font-light pointer-events-none"
            />
            <motion.div ref={cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}
                className="absolute w-[80px] h-[80px] rounded-full bg-transparent text-white z-[150] flex items-center justify-center text-sm font-light pointer-events-none"
            >
                View
            </motion.div>
        </>
    )
}