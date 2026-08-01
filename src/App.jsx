// src/App.jsx
import React, { Suspense, lazy } from 'react';
import Navbar from './components/Layout/Navbar';

// Lazy load sections for performance optimization
const Hero = lazy(() => import('./components/Sections/Hero'));
const Journalism = lazy(() => import('./components/Sections/Journalism'));
const TravelMap = lazy(() => import('./components/Sections/TravelMap'));
const FashionStyle = lazy(() => import('./components/Sections/FashionStyle'));
const BalanceVitality = lazy(() => import('./components/Sections/BalanceVitality'));
const GoldenValues = lazy(() => import('./components/Sections/GoldenValues'));
const CTA = lazy(() => import('./components/Sections/CTA'));

export default function App() {
  return (
    <div className="min-h-screen bg-rosalight font-sans selection:bg-rojo selection:text-white">
      <Navbar />
      
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-vinotinto">Cargando...</div>}>
          <Hero />
          <GoldenValues />
          <Journalism />
          <TravelMap />
          <FashionStyle />
          <BalanceVitality />
          <CTA />
        </Suspense>
      </main>

      <footer className="bg-vinotinto py-6 text-center text-rosasoft text-sm border-t border-white/10">
        <p>© {new Date().getFullYear()} Creado con amor para Valery Reichell Medina.</p>
      </footer>
    </div>
  );
}