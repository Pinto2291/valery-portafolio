// src/components/Sections/Hero.jsx
import React from 'react';

const SKILLS = ['Moda', 'Ventas', 'Gym', 'Viajes', 'Moto'];

export default function Hero() {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-rosalight to-rosasoft px-6 pt-20">
      <div className="text-center z-10 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl text-vinotinto font-bold mb-4 animate-fade-in-up">
          Valery Reichell Medina
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
          Una mujer increíble, sana y trabajadora.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {SKILLS.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-white/70 text-vinotinto rounded-full text-sm font-semibold shadow-sm backdrop-blur-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative blurred background elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-rojo/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-vinotinto/10 rounded-full blur-3xl pointer-events-none" />
    </header>
  );
}