// src/components/Sections/GoldenValues.jsx
import React from 'react';
import { Heart } from 'lucide-react';

const VALUES = [
  { title: 'Valiente', desc: 'Afronta la vida con fuerza.' },
  { title: 'Honesta', desc: 'Transparencia pura y noble.' },
  { title: 'Leal', desc: 'Inquebrantable con los suyos.' },
  { title: 'Femenina', desc: 'Trigueña hermosa y dulce.' }
];

export default function GoldenValues() {
  return (
    <section id="valores" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-vinotinto font-bold text-center mb-12">
          Valores de Oro
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {VALUES.map((val, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-rosasoft border border-rosasoft/50 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm"
            >
              <Heart className="mx-auto text-rojo mb-3 opacity-80" size={24} />
              <h4 className="font-serif font-bold text-vinotinto text-lg">{val.title}</h4>
              <p className="text-sm text-gray-500 mt-2">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}