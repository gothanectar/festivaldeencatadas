import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white p-4 sm:p-6 text-center">
      <p className="text-sm sm:text-base">
        Siga-nos no Instagram:{' '}
        <a href="https://instagram.com/encantadasjazz" className="underline hover:text-yellow-300" aria-label="Siga-nos no Instagram">
          @encantadasjazz
        </a>
      </p>
      <p className="text-sm sm:text-base">Contato: festivaljazz@ilhadomel.com</p>
      <div className="mt-2 flex justify-center space-x-2">
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
          aria-label="Compartilhar no Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </button>
        <button
          className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-500"
          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Festival de Jazz da Ilha do Mel')}`, '_blank')}
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
    </footer>
  );
};

export default Footer; 