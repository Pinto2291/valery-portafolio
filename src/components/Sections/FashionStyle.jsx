// src/components/Sections/FashionStyle.jsx
import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

// Explicit image imports mapping to the assets directory
import valeryVestido from '../../assets/valery-vestido.png';
import valeryGym from '../../assets/valery-gym.png';

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
            
            {/* Card 1: Valery Vestido */}
            {/* Se cambia el aspect-ratio a auto/más vertical o se usa object-top para evitar recortar la cabeza */}
            <div className="relative bg-rosasoft aspect-[2/3] sm:aspect-[3/4] rounded-xl flex flex-col justify-end p-4 shadow-sm overflow-hidden group">
               <img 
                 src={valeryVestido} 
                 alt="Valery Colección Vinotinto" 
                 // object-top asegura que el recorte de object-cover respete la parte superior (el rostro)
                 className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 z-0" 
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
               <span className="relative z-20 bg-white/95 text-xs px-3 py-1.5 rounded-md text-vinotinto self-start font-medium shadow-sm backdrop-blur-sm">
                 Colección: Vinotinto
               </span>
            </div>
            
            {/* Card 2: Valery Gym */}
            <div className="relative bg-rojo/10 aspect-[2/3] sm:aspect-[3/4] rounded-xl mt-8 flex flex-col justify-end p-4 shadow-sm overflow-hidden group">
               <img 
                 src={valeryGym} 
                 alt="Valery Estilo Gym" 
                 // object-top asegura que la cara no se pierda al aplicar cover
                 className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 z-0" 
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
               <span className="relative z-20 bg-white/95 text-xs px-3 py-1.5 rounded-md text-rojo self-start font-medium shadow-sm backdrop-blur-sm">
                 Estilo: Gym & Fit
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