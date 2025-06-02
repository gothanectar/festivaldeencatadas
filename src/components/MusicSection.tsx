import React from 'react';

const MusicSection: React.FC = () => {
  return (
    <section id="music" className="p-4 sm:p-6 bg-yellow-100">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center text-orange-600">Prévias de Músicas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg sm:text-xl font-bold text-orange-600">Wes Ventura Trio</h3>
          <audio controls className="w-full mt-2" aria-label="Prévia de Wes Ventura Trio">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>
        </div>
        <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg sm:text-xl font-bold text-orange-600">Noise Jazz Merlo</h3>
          <audio controls className="w-full mt-2" aria-label="Prévia de Noise Jazz Merlo">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>
        </div>
        <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg sm:text-xl font-bold text-orange-600">Rafaela Mood</h3>
          <audio controls className="w-full mt-2" aria-label="Prévia de Rafaela Mood">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>
        </div>
        <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg sm:text-xl font-bold text-orange-600">Soul Groove Band</h3>
          <audio controls className="w-full mt-2" aria-label="Prévia de Soul Groove Band">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>
        </div>
        <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg sm:text-xl font-bold text-orange-600">Trio Acústico Ilha</h3>
          <audio controls className="w-full mt-2" aria-label="Prévia de Trio Acústico Ilha">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>
        </div>
        <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg sm:text-xl font-bold text-orange-600">Jazz Fusion Collective</h3>
          <audio controls className="w-full mt-2" aria-label="Prévia de Jazz Fusion Collective">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>
        </div>
      </div>
    </section>
  );
};

export default MusicSection; 