"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function ButtonScroll() {
    const [isHovered, setIsHovered] = useState(false);
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    // let direction = 1;

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            if (isHovered) {
                if (xPercent <= -100) {
                    xPercent = 0;
                }
                
                gsap.set(firstText.current, { xPercent });
                gsap.set(secondText.current, { xPercent });
                
                xPercent -= 0.5;
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        if (isHovered) {
            animate();
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isHovered]);

    return (
        <motion.button 
            className="relative text-white border border-white rounded-full overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative flex items-center">
                <span className={`px-8 py-3 transition-transform duration-500 ${isHovered ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                    Discover More
                </span>
                <div ref={slider} className="absolute top-0 left-0 w-full overflow-hidden">
                    <div className="flex whitespace-nowrap">
                        <div ref={firstText} className={`flex items-center h-[48px] space-x-2 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                            <span>Scroll</span>
                            <span>→</span>
                            <span>Scroll</span>
                            <span>→</span>
                            <span>Scroll</span>
                            <span>→</span>
                        </div>
                        <div ref={secondText} className={`flex items-center h-[48px] space-x-2 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                            <span>Scroll</span>
                            <span>→</span>
                            <span>Scroll</span>
                            <span>→</span>
                            <span>Scroll</span>
                            <span>→</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.button>
    );
}