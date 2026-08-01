// src/components/Sections/FashionStyle.jsx
import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const SKILLS_LIST = [
  'Ventas y Emprendimiento', 
  'Diseño de modas', 
  'Pasarela y presencia'
];

export default function FashionStyle() {
  return (
    <section id="estilo" className="py-20 px-6 bg-rosalight">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <ShoppingBag className="mx-auto text-vinotinto mb-4" size={40} />
          <h2 className="font-serif text-3xl md:text-4xl text-vinotinto font-bold">
            El Rincón de la Moda & Estilo
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-rosasoft aspect-[3/4] rounded-xl flex flex-col justify-end p-4 shadow-sm">
               <span className="bg-white/90 text-xs px-3 py-1.5 rounded-md text-vinotinto self-start font-medium shadow-sm">
                 Colección: Vinotinto
               </span>
            </div>
            <div className="bg-rojo/10 aspect-[3/4] rounded-xl mt-8 flex flex-col justify-end p-4 shadow-sm">
               <span className="bg-white/90 text-xs px-3 py-1.5 rounded-md text-rojo self-start font-medium shadow-sm">
                 Estilo: Elegant & Sweet
               </span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif text-vinotinto mb-3">Talento Natural</h3>
              <p className="text-gray-600 leading-relaxed">
                Con un instinto impecable para combinar prendas, vender ropa y diseñar outfits que realzan su belleza trigueña.
              </p>
            </div>
            
            <ul className="space-y-3">
              {SKILLS_LIST.map(item => (
                <li key={item} className="flex items-center gap-3 text-gray-700 bg-white px-4 py-3 rounded-lg shadow-sm">
                  <Star size={16} className="text-rojo flex-shrink-0" /> 
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}