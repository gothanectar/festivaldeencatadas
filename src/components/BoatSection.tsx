import React from 'react';

interface BoatSectionProps {
  addToCart: (item: { name: string; price: number; }) => void;
}

const BoatSection: React.FC<BoatSectionProps> = ({ addToCart }) => {
  return (
    <section id="boat" className="p-4 sm:p-6 bg-yellow-100">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center text-orange-600">Passagens de Barco</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label className="block font-medium text-orange-600 text-sm sm:text-base">Local de Embarque</label>
            <select className="w-full border-2 border-orange-300 p-3 rounded focus:outline-none focus:border-orange-500" aria-label="Local de embarque">
              <option>Pontal do Sul</option>
              <option>Paranaguá</option>
              <option>Antonina</option>
              <option>Guaraqueçaba</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-orange-600 text-sm sm:text-base">Local de Desembarque</label>
            <select className="w-full border-2 border-orange-300 p-3 rounded focus:outline-none focus:border-orange-500" aria-label="Local de desembarque">
              <option>Encantadas</option>
              <option>Nova Brasília</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-orange-600 text-sm sm:text-base">Data</label>
            <input
              type="date"
              className="w-full border-2 border-orange-300 p-3 rounded focus:outline-none focus:border-orange-500"
              aria-label="Data da viagem"
            />
          </div>
          <button
            type="button"
            className="w-full bg-orange-500 text-white px-4 py-3 rounded hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => addToCart({ name: "Passagem de Barco", price: 30 })}
            aria-label="Reservar passagem de barco"
          >
            Reservar Passagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default BoatSection; 