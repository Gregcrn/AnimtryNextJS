"use client";

import { useState, useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import ButtonScroll from "./components/ButtonScroll";
import ProjectModal from "./components/ProjectModal";
import ProjectOverlay from "./components/ProjectOverlay";
import OverView from "./components/OverView";
import Overlay from "./components/Overlay";
const projects = [
  { 
    id: 0,
    title: "C2 Montreal",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    color: "#000000"
  },
  {
    id: 1,
    title: "Office Studio",
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#8C8C8C"
  },
  {
    id: 2,
    title: "Locomotive",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    color: "#EFE8D3"
  },
  {
    id: 3,
    title: "Silencio",
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#706D63"
  }
]


export default function Home() {
  const [modal, setModal] = useState({
    active: false, 
    index: 0, 
    isClicked: false, 
    isExpanded: false, 
    isPositioned: false
  });

  useEffect(() => {
    if (modal.isClicked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  }, [modal.isClicked]);

  return (
    <main className={`min-h-screen relative ${modal.isClicked ? "pointer-events-none" : ""}`}>
      <CustomCursor />
      <div className={`transition-all duration-500 ${modal.isClicked ? "opacity-0" : "opacity-100"}`}>
        <nav>
          <Navbar />
        </nav>
        <Hero />
        <div className="bento-grid">
          <BentoGrid />
        </div>
        <div className="button-scroll flex justify-center items-center mb-20">
          <ButtonScroll />
        </div>
      </div>

      <div className={`grid grid-cols-2 w-full transition-opacity duration-500 ${modal.isPositioned ? "opacity-0" : "opacity-100"}`}>
        {projects.map((project, index) => (
          <ProjectOverlay 
            key={project.id} 
            index={index} 
            title={project.title} 
            setModal={setModal}
          />
        ))}
      </div>

      <OverView projects={projects} modal={modal} />
      <Overlay isVisible={modal.isClicked} />
    </main>
  );
}
