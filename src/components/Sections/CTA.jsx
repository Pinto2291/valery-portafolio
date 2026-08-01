// src/components/Sections/CTA.jsx
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="mensaje" className="py-24 px-6 bg-vinotinto text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        <Mail size={48} className="mx-auto text-rosasoft mb-6" />
        <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
          Un Mensaje Especial
        </h2>
        <p className="text-rosalight/80 mb-10 text-lg">
          Para la compañera de mi vida y futura madre, la mujer que lo tiene todo.
        </p>
        
        {!isOpen ? (
          <button 
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 bg-rosasoft text-vinotinto font-bold rounded-full hover:bg-white transition-colors shadow-lg transform hover:-translate-y-1"
          >
            Abrir Carta
          </button>
        ) : (
          <div className="p-8 bg-white rounded-2xl text-left shadow-xl animate-fade-in-up">
            <h3 className="font-serif text-2xl text-vinotinto mb-4">Mi Valery,</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Eres la mujer más increíble, leal y valiente que conozco. Esta página es un pequeño reflejo de todo lo que admiro en ti.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 border-t border-gray-100 pt-6">
              <button className="px-6 py-3 bg-vinotinto text-white rounded-lg font-medium hover:bg-rojo transition-colors text-sm">
                ¿Aceptas una cita en El Ávila?
              </button>
              <button className="px-6 py-3 bg-rosasoft text-vinotinto rounded-lg font-medium hover:bg-rosalight transition-colors text-sm">
                ¿Agendamos el próximo viaje?
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}