// src/components/Sections/BalanceVitality.jsx
import React from 'react';
import { Dumbbell, Pizza, Tv, ShoppingBag } from 'lucide-react';

export default function BalanceVitality() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-vinotinto font-bold text-center mb-12">
          Balance & Vitalidad
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-lg">
          <div className="bg-rosalight p-12 flex flex-col items-center text-center">
            <Dumbbell size={48} className="text-rojo mb-6" />
            <h3 className="font-serif text-2xl text-vinotinto mb-4">Lado Fit</h3>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              Disciplina absoluta en el gimnasio, rutinas de ejercicio diarias y un amor profundo por comer sano para mantener la energía al máximo.
            </p>
            <span className="px-5 py-2 bg-rosasoft text-vinotinto rounded-full text-sm font-semibold shadow-sm mt-auto">
              Hábito y Constancia
            </span>
          </div>
          
          <div className="bg-vinotinto p-12 flex flex-col items-center text-center text-white">
            <Pizza size={48} className="text-rosasoft mb-6" />
            <h3 className="font-serif text-2xl text-rosasoft mb-4">Lado Antojo</h3>
            <p className="text-rosalight/80 mb-8 text-sm leading-relaxed">
              El equilibrio perfecto incluye su pollo crispy favorito, tardes interminables de series en Netflix y comprar tesoros para el hogar.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-auto">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm">
                <Tv size={14} /> Netflix
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm">
                <ShoppingBag size={14} /> Hogar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}