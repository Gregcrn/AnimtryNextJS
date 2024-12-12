'use client';

interface OverlayProps {
    isVisible: boolean;
    color?: string; // Optionnel, permet de personnaliser la couleur
}

export default function Overlay({ isVisible, color = 'white' }: OverlayProps) {
    return (
        <div
            className={`fixed inset-0 transition-all duration-1000 pointer-events-none z-[100] ${
                isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={{ backgroundColor: color }}
        ></div>
    );
}
