// src/components/Sections/Journalism.jsx
import React from 'react';
import { Mic } from 'lucide-react';

export default function Journalism() {
  return (
    <section id="periodismo" className="py-20 px-6 bg-rosasoft/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Mic size={40} className="text-vinotinto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl text-vinotinto font-bold text-center">
            En Sintonía
          </h2>
          <p className="text-gray-600 mt-2 text-center max-w-lg">
            El espacio periodístico de una voz dulce y delicada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border-2 border-rosasoft bg-white rounded-2xl relative shadow-sm">
            <div className="absolute -top-4 left-6 bg-rosalight px-3 py-1 text-rojo font-bold text-xs tracking-widest uppercase rounded-full">
              Editorial
            </div>
            <h3 className="font-serif text-xl text-vinotinto mb-3">La Verdad con Amabilidad</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Su capacidad para ver el mundo y expresarlo sin malas palabras, con respeto y dulzura, convierte cada conversación en una obra de arte comunicativa.
            </p>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-rosasoft to-rosalight rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
            <button 
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md hover:scale-105 transition-transform"
              aria-label="Reproducir episodio"
            >
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-vinotinto border-b-8 border-b-transparent ml-1" />
            </button>
            <span className="text-vinotinto font-semibold">Reproducir Piloto</span>
            <span className="text-xs text-gray-500 mt-1">"Titulares de mi vida"</span>
          </div>
        </div>
      </div>
    </section>
  );
}