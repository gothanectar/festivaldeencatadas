import React from 'react';

interface Destaque {
  id: number;
  type: string;
  src: string;
  alt: string;
}

interface HighlightsSectionProps {
  destaques: Destaque[];
}

const HighlightsSection: React.FC<HighlightsSectionProps> = ({ destaques }) => {
  return (
    <section id="destaques" className="p-4 sm:p-6 bg-yellow-50">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center text-orange-600">Destaques do Festival</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {destaques.map((item) => (
          <div key={item.id} className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} className="w-full h-64 object-cover rounded-lg" loading="lazy" />
            ) : (
              <iframe
                src={item.src}
                title={item.alt}
                className="w-full h-64 rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                loading="lazy"
              ></iframe>
            )}
            <p className="mt-2 text-center text-gray-700">{item.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection; 