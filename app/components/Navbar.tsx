"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Cuberto
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/works" className="text-white hover:text-gray-300 transition-colors">
            Works
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-95 p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/works" className="text-white hover:text-gray-300 transition-colors">
              Works
            </Link>
            <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}