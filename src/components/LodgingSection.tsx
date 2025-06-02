import React from 'react';

interface Pousada {
  id: number;
  name: string;
  price: number;
  desc: string;
  email: string;
  website: string;
  category: string;
}

interface LodgingSectionProps {
  activePousadaTab: string;
  setActivePousadaTab: React.Dispatch<React.SetStateAction<string>>;
  filteredPousadas: Pousada[];
  sendPousadaEmail: (pousada: Pousada, formData: any) => void; // Usando 'any' conforme o original
}

const LodgingSection: React.FC<LodgingSectionProps> = ({
  activePousadaTab,
  setActivePousadaTab,
  filteredPousadas,
  sendPousadaEmail,
}) => {
  return (
    <section id="hospedagem" className="p-4 sm:p-6 bg-earth-sand">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center text-green-forest">Hospedagem na Ilha</h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-4 space-x-2 overflow-x-auto">
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg ${activePousadaTab === 'economicas' ? 'bg-green-forest text-white' : 'bg-earth-light text-green-forest'} hover:bg-green-700 hover:text-white transition-all duration-300 min-w-[120px]`}
            onClick={() => setActivePousadaTab('economicas')}
            aria-selected={activePousadaTab === 'economicas'}
          >
            Econômicas
          </button>
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg ${activePousadaTab === 'luxo' ? 'bg-green-forest text-white' : 'bg-earth-light text-green-forest'} hover:bg-green-700 hover:text-white transition-all duration-300 min-w-[120px]`}
            onClick={() => setActivePousadaTab('luxo')}
            aria-selected={activePousadaTab === 'luxo'}
          >
            Luxo
          </button>
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg ${activePousadaTab === 'familiares' ? 'bg-green-forest text-white' : 'bg-earth-light text-green-forest'} hover:bg-green-700 hover:text-white transition-all duration-300 min-w-[120px]`}
            onClick={() => setActivePousadaTab('familiares')}
            aria-selected={activePousadaTab === 'familiares'}
          >
            Familiares
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPousadas.map((pousada) => (
            <div key={pousada.id} className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <h3 className="text-lg sm:text-xl font-bold text-green-forest">{pousada.name}</h3>
              <p className="text-earth-dark">Preço médio: R$ {pousada.price}</p>
              <p className="text-earth-dark mt-1">{pousada.desc}</p>
              <a href={pousada.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Visitar Site</a>

              {/* Formulário de Contato Básico (Adaptado para React) */}
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const data = Object.fromEntries(formData.entries());
                sendPousadaEmail(pousada, data);
              }} className="mt-4 space-y-2">
                <div>
                  <label htmlFor={`name-${pousada.id}`} className="block text-sm font-medium text-earth-dark">Nome:</label>
                  <input type="text" id={`name-${pousada.id}`} name="name" required className="mt-1 block w-full border border-earth-light rounded-md shadow-sm p-2 focus:outline-none focus:ring-green-forest focus:border-green-forest" />
                </div>
                <div>
                  <label htmlFor={`email-${pousada.id}`} className="block text-sm font-medium text-earth-dark">Email:</label>
                  <input type="email" id={`email-${pousada.id}`} name="email" required className="mt-1 block w-full border border-earth-light rounded-md shadow-sm p-2 focus:outline-none focus:ring-green-forest focus:border-green-forest" />
                </div>
                <div>
                  <label htmlFor={`checkIn-${pousada.id}`} className="block text-sm font-medium text-earth-dark">Check-in:</label>
                  <input type="date" id={`checkIn-${pousada.id}`} name="checkIn" required className="mt-1 block w-full border border-earth-light rounded-md shadow-sm p-2 focus:outline-none focus:ring-green-forest focus:border-green-forest" />
                </div>
                <div>
                  <label htmlFor={`checkOut-${pousada.id}`} className="block text-sm font-medium text-earth-dark">Check-out:</label>
                  <input type="date" id={`checkOut-${pousada.id}`} name="checkOut" required className="mt-1 block w-full border border-earth-light rounded-md shadow-sm p-2 focus:outline-none focus:ring-green-forest focus:border-green-forest" />
                </div>
                <div>
                  <label htmlFor={`guests-${pousada.id}`} className="block text-sm font-medium text-earth-dark">Hóspedes:</label>
                  <input type="number" id={`guests-${pousada.id}`} name="guests" min="1" required className="mt-1 block w-full border border-earth-light rounded-md shadow-sm p-2 focus:outline-none focus:ring-green-forest focus:border-green-forest" />
                </div>
                 <div>
                  <label htmlFor={`roomType-${pousada.id}`} className="block text-sm font-medium text-earth-dark">Tipo de Quarto:</label>
                  <input type="text" id={`roomType-${pousada.id}`} name="roomType" className="mt-1 block w-full border border-earth-light rounded-md shadow-sm p-2 focus:outline-none focus:ring-green-forest focus:border-green-forest" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-forest text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-300 shadow-md"
                >
                  Pedir Orçamento
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LodgingSection; 