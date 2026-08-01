// src/components/Sections/TravelMap.jsx
import React from 'react';
import { Map, MapPin, Camera } from 'lucide-react';

// Explicit static imports for bundler resolution
import galipanImg from '../../assets/images/galipan.jpg';
import tovarImg from '../../assets/images/colonia-tovar.jpg';
import rutaImg from '../../assets/images/ruta-en-moto.jpg';

const DESTINATIONS = [
  {
    icon: <MapPin className="text-vinotinto/80 absolute top-4 right-4 z-10" size={24} />,
    title: 'Galipán & El Ávila',
    desc: 'Montaña, aire puro y vistas increíbles.',
    rotation: 'md:rotate-2',
    imageSrc: galipanImg // Storing the imported asset reference directly
  },
  {
    icon: <Camera className="text-vinotinto/80 absolute top-4 right-4 z-10" size={24} />,
    title: 'La Colonia Tovar',
    desc: 'Clima frío, fresas y escape perfecto.',
    rotation: 'md:-rotate-3 md:mt-10',
    imageSrc: tovarImg
  },
  {
    icon: <Map className="text-vinotinto/80 absolute top-4 right-4 z-10" size={24} />,
    title: 'Ruta Abierta',
    desc: 'Manejando la moto automática hacia la playa.',
    rotation: 'md:rotate-1',
    imageSrc: rutaImg
  }
];

export default function TravelMap() {
  return (
    <section id="viajes" className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-vinotinto font-bold text-center mb-12 flex justify-center items-center gap-3">
          <Map className="text-rojo" /> Bitácora de Aventuras
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {DESTINATIONS.map((dest, i) => (
            <div 
              key={i} 
              className={`bg-rosalight p-4 pb-8 rounded-xl shadow-md transform hover:rotate-0 hover:-translate-y-2 transition-all duration-300 ${dest.rotation} group`}
            >
              {/* Removed imageFallback from className interpolation to prevent [object Object] rendering */}
              <div className="relative h-56 rounded-lg mb-6 overflow-hidden flex items-center justify-center border border-rosasoft bg-gray-100">
                
                {dest.icon}
                
                {/* Dynamically render the image element using the stored reference */}
                {dest.imageSrc ? (
                  <img 
                    src={dest.imageSrc} 
                    alt={dest.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <span className="text-sm font-medium text-gray-400">Espacio para Imagen</span>
                )}
                
              </div>
              
              <div className="px-2">
                <h4 className="font-serif text-xl font-bold text-vinotinto mb-2">{dest.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}