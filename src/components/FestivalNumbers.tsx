import React from 'react';

interface FestivalNumbersProps {
  spectators: string;
  participants: string;
  performances: string;
}

const FestivalNumbers: React.FC<FestivalNumbersProps> = ({ spectators, participants, performances }) => {
  return (
    <section id="numeros" className="p-4 sm:p-6 bg-black text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-center">O Festival em Números</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto text-center">
        <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-6xl sm:text-7xl md:text-8xl font-bold font-['Montserrat'] text-orange-600">{spectators}</h3>
          <p className="text-sm sm:text-base font-['Montserrat'] text-gray-700">Pessoas</p>
        </div>
        <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-6xl sm:text-7xl md:text-8xl font-bold font-['Montserrat'] text-orange-600">{participants}</h3>
          <p className="text-sm sm:text-base font-['Montserrat'] text-gray-700">Test Rides</p>
        </div>
        <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-6xl sm:text-7xl md:text-8xl font-bold font-['Montserrat'] text-orange-600">{performances}</h3>
          <p className="text-sm sm:text-base font-['Montserrat'] text-gray-700">Impacto</p>
        </div>
      </div>
    </section>
  );
};

export default FestivalNumbers; 