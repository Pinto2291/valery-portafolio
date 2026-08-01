// src/components/Sections/Hero.jsx
import React from 'react';
import heroBg from '../../assets/images/Ignacio-valery.png';

const SKILLS = ['Moda', 'Ventas', 'Gym', 'Viajes', 'Moto'];

export default function Hero() {
  // Se añade la imagen de fondo con bg-cover y bg-center, y un overlay para legibilidad
  return (
    <header 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-rosalight/80 via-white/60 to-rosasoft/90" />

      <div className="text-center z-10 max-w-3xl relative">
        <h1 className="font-serif text-5xl md:text-7xl text-vinotinto font-bold mb-4 animate-fade-in-up drop-shadow-sm">
          Valery Reichell Medina
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 mb-8 italic font-medium">
          Una mujer increíble, sana y trabajadora.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {SKILLS.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-white/80 text-vinotinto rounded-full text-sm font-bold shadow-sm backdrop-blur-md border border-vinotinto/10">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}