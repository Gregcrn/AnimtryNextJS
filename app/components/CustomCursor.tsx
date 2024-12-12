"use client";

import { useEffect } from "react";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import "mouse-follower/src/scss/index.scss";

export default function CustomCursor() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            MouseFollower.registerGSAP(gsap);

            const cursor = new MouseFollower({
                speed: 0.5,
                ease: "expo.out",
                skewing: 0.5,
            });

            // Gestion des éléments avec data-cursor-bg
            const handleMouseEnter = (e: Event) => {
                const target = e.currentTarget as HTMLElement;
                const color = target.getAttribute('data-cursor-color');
                if (color) {
                    document.documentElement.style.setProperty('--cursor-color', color);
                }
            };

            const handleMouseLeave = () => {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.style.setProperty('--cursor-color', isDark ? '#ededed' : '#171717');
            };

            // Gestion du survol des ProjectOverlay
            const handleProjectHover = () => {
                cursor.hide();
            };

            const handleProjectLeave = () => {
                cursor.show();
            };

            // Ajout des event listeners
            document.querySelectorAll('[data-cursor-color]').forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });

            // Ajout des event listeners pour ProjectOverlay
            document.querySelectorAll('.project-overlay').forEach(el => {
                el.addEventListener('mouseenter', handleProjectHover);
                el.addEventListener('mouseleave', handleProjectLeave);
            });

            return () => {
                // Nettoyage des event listeners
                document.querySelectorAll('[data-cursor-color]').forEach(el => {
                    el.removeEventListener('mouseenter', handleMouseEnter);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                });
                document.querySelectorAll('.project-overlay').forEach(el => {
                    el.removeEventListener('mouseenter', handleProjectHover);
                    el.removeEventListener('mouseleave', handleProjectLeave);
                });
                cursor.destroy();
            };
        }
    }, []);
    return null;
}
