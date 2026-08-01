// src/components/Sections/Journalism.jsx 
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Mic, Play, Pause, Music } from 'lucide-react';

// Import audio asset (Vite handles the asset URL resolution)
import valerySong from '../../assets/music/Valery_montaña_y_mar.mp3';

export default function Journalism() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Memoized play/pause toggle to prevent unnecessary re-renders
  const togglePlay = useCallback(async () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Audio playback error:", error);
      // Fallback state reset if playback fails (e.g., browser autoplay policies)
      setIsPlaying(false);
    }
  }, [isPlaying]);

  // Strict dependency tracking for audio lifecycle events
  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    // Reset playing state when audio track finishes
    const handleEnded = () => setIsPlaying(false);
    audioEl.addEventListener('ended', handleEnded);

    // Mandatory cleanup function to prevent memory leaks
    return () => {
      audioEl.removeEventListener('ended', handleEnded);
    };
  }, []);

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
          
          <div className="p-8 bg-gradient-to-br from-rosasoft to-rosalight rounded-2xl flex flex-col justify-center items-center text-center shadow-sm relative overflow-hidden">
            {/* Background decorative element */}
            <Music size={140} className="absolute -right-6 -bottom-6 text-white/30 pointer-events-none" />
            
            {/* Hidden native audio element for DOM tracking */}
            <audio ref={audioRef} src={valerySong} preload="metadata" />

            <button 
              onClick={togglePlay}
              className="w-16 h-16 bg-white text-vinotinto rounded-full flex items-center justify-center mb-4 shadow-md hover:scale-105 transition-transform z-10"
              aria-label={isPlaying ? "Pausar canción" : "Reproducir canción"}
            >
              {isPlaying ? (
                <Pause size={28} className="fill-current" />
              ) : (
                <Play size={28} className="fill-current ml-1" />
              )}
            </button>
            <span className="text-vinotinto font-semibold z-10 text-lg">Valery Montaña y Mar</span>
            <span className="text-sm text-gray-700 mt-1 z-10 italic font-medium">Canción</span>
          </div>
        </div>
      </div>
    </section>
  );
}