import React from 'react';

export interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
}

interface MediaGalleryProps {
  mediaItems: MediaItem[];
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ mediaItems }) => {
  const defaultMediaItems: MediaItem[] = [
    { id: 1, type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Ilha_do_Mel_-_Praia_Grande.jpg', alt: 'Praia Grande da Ilha do Mel' },
    { id: 2, type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Panoramic_view_from_Ilha_do_Mel%2C_Paran%C3%A1%2C_Brazil.JPG', alt: 'Vista panorâmica da Ilha do Mel' },
    { id: 3, type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Ilha_do_Mel_-_Farol_das_Conchas.jpg', alt: 'Farol das Conchas na Ilha do Mel' },
    { id: 4, type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Ilha_do_Mel_-_Praia_das_Encantadas.jpg', alt: 'Praia das Encantadas' },
    { id: 5, type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Ilha_do_Mel_-_Gruta_das_Encantadas.jpg', alt: 'Gruta das Encantadas' },
    { id: 6, type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ilha_do_Mel_-_Fortaleza.jpg', alt: 'Fortaleza da Ilha do Mel' }
  ];

  const items = mediaItems || defaultMediaItems;

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1];
      return `https://www.youtube.com/embed/${videoId}?autoplay=0`;
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1];
       return `https://www.youtube.com/embed/${videoId}?autoplay=0`;
    } else if (url.includes('player.vimeo.com/video/')) {
      // Manter compatibilidade com Vimeo se necessário, mas focar em YouTube agora
      return url;
    }
    return url; // Retorna o link original se não for reconhecido
  };

  return (
    <section id="galeria" className="p-4 sm:p-6 bg-yellow-100">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center text-orange-600">Galeria da Ilha</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {items.map((item) => (
          <div key={item.id} className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} className="w-full h-64 object-cover rounded-lg" loading="lazy" />
            ) : (
              <iframe
                src={getEmbedUrl(item.src)}
                title={item.alt}
                className="w-full h-64 rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            )}
            <p className="mt-2 text-center text-gray-700">{item.alt}</p>
            <div className="mt-2 flex justify-center space-x-2">
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(item.src)}`, '_blank')}
                aria-label="Compartilhar no Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </button>
              <button
                className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-500"
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(item.src)}&text=${encodeURIComponent(item.alt)}`, '_blank')}
                aria-label="Compartilhar no Twitter"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700"
                onClick={() => window.open('https://instagram.com/encantadasjazz', '_blank')}
                aria-label="Seguir no Instagram"
              >
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaGallery; 