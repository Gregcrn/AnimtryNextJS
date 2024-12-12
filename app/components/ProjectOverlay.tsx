'use client';

interface ProjectOverlayProps {
    index: number;
    title: string;
    setModal: (modal: { active: boolean; index: number; isClicked: boolean; isExpanded: boolean; isPositioned: boolean; } | 
        ((prev: { active: boolean; index: number; isClicked: boolean; isExpanded: boolean; isPositioned: boolean; }) => 
        { active: boolean; index: number; isClicked: boolean; isExpanded: boolean; isPositioned: boolean; })
    ) => void;
}

export default function ProjectOverlay({ index, title, setModal }: ProjectOverlayProps) {
    return (
        <div
            className={`flex flex-col w-full justify-between items-start p-[50px] cursor-pointer transition-all duration-200 hover:opacity-50 project-overlay`}
            onMouseEnter={() => {
                setModal({ active: true, index, isClicked: false, isExpanded: false, isPositioned: false });
            }}
            onMouseLeave={() => {
                setModal({ active: false, index, isClicked: false, isExpanded: false, isPositioned: false });
            }}
            onClick={() => {
                setModal({ active: true, index, isClicked: true, isExpanded: false, isPositioned: false });
            }}
        >
            <h2 className="text-[60px] m-0 font-normal transition-all duration-400 group-hover:-translate-x-[10px] mb-4 text-white">
                {title}
            </h2>
            <p className="font-light transition-all duration-400 group-hover:translate-x-[10px] text-white">
                View Project
            </p>
        </div>
    );
}
