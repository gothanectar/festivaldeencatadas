import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section id="mapa" className="p-4 sm:p-6 bg-yellow-50">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center text-orange-600">Mapa do Festival</h2>
      <div className="max-w-4xl mx-auto">
        <img
          src="https://source.unsplash.com/800x400/?map,beach"
          alt="Mapa interativo da Ilha do Mel"
          className="w-full h-auto rounded-lg"
          loading="lazy"
        />
        <p className="mt-2 text-center text-gray-700">Navegue pelos palcos e atrações em Encantadas e Nova Brasília.</p>
      </div>
    </section>
  );
};

export default MapSection; 