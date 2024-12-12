"use client";

import { motion } from 'framer-motion';
import BentoItem from './BentoItem';

const projects = [
  {
    title: "Digital Products",
    description: "Creating seamless user experiences",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
  },
  {
    title: "Brand Identity",
    description: "Crafting unique visual languages",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
  },
  {
    title: "Websites",
    description: "Building modern web applications",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform solutions",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design approach",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80",
  }
];

export default function BentoGrid() {
  return (
    <section className="w-full px-4 py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BentoItem {...projects[0]} className="lg:col-span-2 aspect-[2/1]" cursorColor="#6f1d1b" />
          <BentoItem {...projects[1]} className="aspect-square" cursorColor="#dda15e" />
          <BentoItem {...projects[2]} className="aspect-square" cursorColor="#ffc300" />
          <BentoItem {...projects[3]} className="lg:col-span-2 aspect-[2/1]" cursorColor="#1b263b" />
          <BentoItem {...projects[4]} className="lg:col-span-3 aspect-[3/1]" cursorColor="#606c38" />
        </div>
      </div>
    </section>
  );
}