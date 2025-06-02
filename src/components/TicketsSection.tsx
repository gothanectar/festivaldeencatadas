import React from 'react';

interface CartItem {
  name: string;
  price: number;
}

interface TicketsSectionProps {
  activeTicketTab: string;
  setActiveTicketTab: React.Dispatch<React.SetStateAction<string>>;
  addToCart: (item: CartItem) => void;
}

const TicketsSection: React.FC<TicketsSectionProps> = ({
  activeTicketTab,
  setActiveTicketTab,
  addToCart,
}) => {
  return (
    <section id="tickets" className="p-4 sm:p-6 bg-earth-sand">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center text-green-forest">Comprar Ingressos</h2>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4 space-x-2 overflow-x-auto">
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg ${activeTicketTab === 'encantadas' ? 'bg-green-forest text-white' : 'bg-earth-light text-green-forest'} hover:bg-green-700 hover:text-white transition-all duration-300 min-w-[120px]`}
            onClick={() => setActiveTicketTab('encantadas')}
            aria-selected={activeTicketTab === 'encantadas'}
          >
            Encantadas
          </button>
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg ${activeTicketTab === 'brasilia' ? 'bg-green-forest text-white' : 'bg-earth-light text-green-forest'} hover:bg-green-700 hover:text-white transition-all duration-300 min-w-[120px]`}
            onClick={() => setActiveTicketTab('brasilia')}
            aria-selected={activeTicketTab === 'brasilia'}
          >
            Nova Brasília
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activeTicketTab === 'encantadas' && (
            <>
              <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-green-forest">Show Palco Swamp</h3>
                <p className="text-earth-dark">Data: 2 de Agosto, 20h</p>
                <p className="text-earth-dark">Preço: R$ 30,00</p>
                <button
                  className="mt-2 bg-green-forest text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => addToCart({ name: "Show Palco Swamp", price: 30 })}
                  aria-label="Adicionar Show Palco Swamp ao carrinho"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
              <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-green-forest">Balada Grajagan</h3>
                <p className="text-earth-dark">Data: 3 de Agosto, 22h</p>
                <p className="text-earth-dark">Preço: R$ 50,00</p>
                <button
                  className="mt-2 bg-green-forest text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => addToCart({ name: "Balada Grajagan", price: 50 })}
                  aria-label="Adicionar Balada Grajagan ao carrinho"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
              <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-green-forest">Pacote Fim de Semana</h3>
                <p className="text-earth-dark">Data: 2-3 de Agosto</p>
                <p className="text-earth-dark">Preço: R$ 80,00</p>
                <button
                  className="mt-2 bg-green-forest text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => addToCart({ name: "Pacote Fim de Semana Encantadas", price: 80 })}
                  aria-label="Adicionar Pacote Fim de Semana Encantadas ao carrinho"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </>
          )}
          {activeTicketTab === 'brasilia' && (
            <>
              <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-green-forest">Show Cavalo Marinho</h3>
                <p className="text-earth-dark">Data: 9 de Agosto, 21h</p>
                <p className="text-earth-dark">Preço: R$ 45,00</p>
                <button
                  className="mt-2 bg-green-forest text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => addToCart({ name: "Show Cavalo Marinho", price: 45 })}
                  aria-label="Adicionar Show Cavalo Marinho ao carrinho"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
              <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-green-forest">Jazz Sunset</h3>
                <p className="text-earth-dark">Data: 10 de Agosto, 18h</p>
                <p className="text-earth-dark">Preço: Gratuito</p>
                <button
                  className="mt-2 bg-green-forest text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => alert("Evento gratuito! Não precisa de ingresso.")}
                  aria-label="Reservar vaga para Jazz Sunset"
                >
                  Reservar Vaga
                </button>
              </div>
              <div className="gradient-border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-green-forest">Pacote Fim de Semana</h3>
                <p className="text-earth-dark">Data: 9-10 de Agosto</p>
                <p className="text-earth-dark">Preço: R$ 70,00</p>
                <button
                  className="mt-2 bg-green-forest text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => addToCart({ name: "Pacote Fim de Semana Nova Brasília", price: 70 })}
                  aria-label="Adicionar Pacote Fim de Semana Nova Brasília ao carrinho"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TicketsSection; 