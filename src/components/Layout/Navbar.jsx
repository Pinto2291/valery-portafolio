// src/components/Layout/Navbar.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Heart, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#valores', label: 'Esencia' },
  { href: '#periodismo', label: 'Periodismo' },
  { href: '#viajes', label: 'Aventuras' },
  { href: '#estilo', label: 'Estilo' },
  { href: '#mensaje', label: 'Mensaje' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const toggleSidebar = useCallback((e) => {
    e.preventDefault(); // Prevent jump to top if href="#"
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <>
      <nav className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            onClick={toggleSidebar}
            className="font-serif font-bold text-xl text-vinotinto flex items-center gap-2 cursor-pointer md:cursor-default md:pointer-events-none"
            aria-label="Abrir menú móvil"
          >
            VRM <Heart size={18} className="text-rojo" aria-hidden="true" />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-vinotinto transition-colors pointer-events-auto">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 md:hidden backdrop-blur-sm transition-opacity"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-rosalight shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 flex justify-between items-center border-b border-rosasoft">
          <span className="font-serif font-bold text-xl text-vinotinto flex items-center gap-2">
            VRM <Heart size={18} className="text-rojo" aria-hidden="true" />
          </span>
          <button onClick={closeSidebar} className="text-gray-500 hover:text-vinotinto transition-colors" aria-label="Cerrar menú">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col gap-2 p-6">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={closeSidebar}
              className="text-lg font-medium text-gray-700 hover:text-vinotinto hover:bg-white/50 px-4 py-3 rounded-xl transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}