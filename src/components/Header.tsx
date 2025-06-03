import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-image bg-overlay relative" style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/c/c0/Ilha_do_Mel_banner_Praia_do_Limoeiro.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative p-4 sm:p-6 text-center text-white z-10 font-['Montserrat']">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">Ilha do Mel Jazz & Hospedagem</h1>
        <nav className="mt-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4" role="navigation">
          <a href="#tickets" className="hover:underline text-base sm:text-base md:text-lg" aria-label="Ir para ingressos">Ingressos</a>
          <a href="#music" className="hover:underline text-base sm:text-base md:text-lg" aria-label="Ir para músicas">Músicas</a>
          <a href="#programacao" className="hover:underline text-base sm:text-base md:text-lg" aria-label="Ir para programação">Programação</a>
          <a href="#destaques" className="hover:underline text-base sm:text-base md:text-lg" aria-label="Ir para destaques">Destaques</a>
          <a href="#galeria" className="hover:underline text-base sm:text-base md:text-lg" aria-label="Ir para galeria">Galeria</a>
          <a href="#boat" className="hover:underline text-base sm:text-base md:text-lg" aria-label="Ir para passagens de barco">Passagens de Barco</a>
          <a href="#hospedagem" className="hover:underline text-base sm:text-base md:text-lg" aria-label="Ir para hospedagem">Hospedagem</a>
          <a href="#socio" className="hover:underline text-base sm:text-base md:text-lg" aria-label="Ir para seção de sócios">Torne-se Sócio</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 