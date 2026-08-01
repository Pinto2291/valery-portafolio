// src/components/Sections/CTA.jsx
import React, { useState } from 'react';
import { Mail, X, Heart } from 'lucide-react';

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="mensaje" className="pt-24 pb-48 px-6 bg-vinotinto text-center relative flex flex-col justify-center min-h-[90vh]">
      <div className="max-w-2xl mx-auto relative z-10 mb-8 sm:mb-16 transition-all duration-700">
        <Mail size={48} className="mx-auto text-rosasoft mb-6" />
        <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
          Un Mensaje Especial
        </h2>
        <p className="text-rosalight/80 text-lg">
          Para la compañera de mi vida y futura madre, la mujer que lo tiene todo.
        </p>
      </div>

      {/* Contenedor del sobre interactivo */}
      <div className="relative w-full max-w-lg h-56 sm:h-72 mx-auto">
        {/* Parte trasera del sobre */}
        <div className="absolute inset-0 bg-rose-950 rounded-lg shadow-2xl"></div>

        {/* Carta animada */}
        <div
          className={`absolute left-3 right-3 sm:left-6 sm:right-6 bg-[#fdfbf7] p-8 sm:p-10 rounded shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col ${
            isOpen
              ? '-translate-y-[85%] sm:-translate-y-[90%] z-50 h-[550px] sm:h-[480px] overflow-y-auto border border-amber-200/60'
              : 'translate-y-0 z-10 top-3 bottom-3 overflow-hidden opacity-80'
          }`}
          style={{
            backgroundImage: 'radial-gradient(#e6dfcc 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        >
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-rojo transition-colors p-2 z-50"
              aria-label="Cerrar carta"
            >
              <X size={24} />
            </button>
          )}

          <div
            className="text-left text-gray-800 text-xl sm:text-2xl leading-relaxed flex-grow flex flex-col justify-center mt-4"
            style={{ fontFamily: '"Caveat", "Dancing Script", "Brush Script MT", cursive' }}
          >
            <h3 className="text-3xl sm:text-4xl text-vinotinto mb-6 font-bold">Mi amada Valery,</h3>
            <p className="mb-4">
              Valery eres la mujer mas valiente, amable, leal, extraodinaria, dulce y capaz q conozco.
            </p>
            <p className="mb-4">
              Te admiro, te respeto, te deseo y esta pagina es solo un pequeña muestra de mi aprecio y amor, hacia ti.
            </p>
            <p className="mb-8">
              Que este gesto se multiple y q dios nos permita tener juntos una vida extraordinaria, llena de prosperidad, salud, momentos hermosos, mucha paz, dinero y grandes metas juntos.
            </p>
          </div>

          {isOpen && (
            <div className="flex flex-col sm:flex-row gap-3 justify-center border-t border-gray-200/60 pt-6 mt-auto shrink-0 font-sans">
              <button className="px-5 py-3 bg-vinotinto text-white rounded-lg font-medium hover:bg-rojo transition-colors text-sm shadow-md">
                ¿Aceptas una cita en El Ávila?
              </button>
              <button className="px-5 py-3 bg-rosasoft text-vinotinto rounded-lg font-medium hover:bg-rosalight transition-colors text-sm shadow-md">
                ¿Agendamos el próximo viaje?
              </button>
            </div>
          )}
        </div>

        {/* Solapas frontales del sobre creadas con clip-path para responsividad perfecta */}
        <div 
          className="absolute inset-0 bg-rose-900 z-20 pointer-events-none rounded-lg drop-shadow-md" 
          style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}
        />
        <div 
          className="absolute inset-0 bg-rose-900 z-20 pointer-events-none rounded-lg drop-shadow-md" 
          style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }}
        />
        <div 
          className="absolute inset-0 bg-rose-800 z-30 pointer-events-none rounded-lg drop-shadow-2xl" 
          style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }}
        />
        
        {/* Solapa superior animada */}
        <div
          className={`absolute inset-0 bg-rose-700 z-40 rounded-lg transition-all duration-700 origin-top drop-shadow-xl ${
            isOpen ? '[transform:rotateX(180deg)] opacity-0 z-0 pointer-events-none' : '[transform:rotateX(0deg)] opacity-100'
          }`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 55%)' }}
        />

        {/* Sello de lacre rojo estilo antiguo */}
        <button
          onClick={() => setIsOpen(true)}
          className={`absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-20 h-20 bg-gradient-to-br from-red-500 to-red-800 rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.6),inset_0_-4px_8px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-110 cursor-pointer border-2 border-red-950/40 ${
            isOpen ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'
          }`}
          aria-label="Abrir Carta"
        >
          <div className="absolute inset-1 rounded-full border-[3px] border-red-900/30"></div>
          <Heart size={28} className="text-red-100/90 drop-shadow-md fill-current" />
        </button>
      </div>
    </section>
  );
}