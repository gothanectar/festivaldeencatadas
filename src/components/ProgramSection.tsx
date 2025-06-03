import React from 'react';

interface Evento {
  id: number;
  title: string;
  date: string;
  type: string;
  desc: string;
  img: string;
}

interface ProgramSectionProps {
  programacao: Evento[];
  filterProgramacao: string;
  setFilterProgramacao: React.Dispatch<React.SetStateAction<string>>;
  filteredProgramacao: Evento[]; // Adicionado filteredProgramacao como prop
}

const ProgramSection: React.FC<ProgramSectionProps> = ({
  filterProgramacao,
  setFilterProgramacao,
  filteredProgramacao, // Adicionado filteredProgramacao nas props
}) => {
  return (
    <section id="programacao" className="p-4 sm:p-6 bg-image bg-overlay" style={{ backgroundImage: `url('https://source.unsplash.com/1600x600/?music,festival')` }}>
      <div className="relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center text-white">Programação do Festival</h2>
        <div className="flex justify-center mb-4 space-x-2 overflow-x-auto">
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-lg ${filterProgramacao === 'todos' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-orange-600'} hover:bg-orange-400 hover:text-white transition-all duration-300 min-w-[100px]`}
            onClick={() => setFilterProgramacao('todos')}
            aria-selected={filterProgramacao === 'todos'}
          >
            Todos
          </button>
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-lg ${filterProgramacao === 'show' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-orange-600'} hover:bg-orange-400 hover:text-white transition-all duration-300 min-w-[100px]`}
            onClick={() => setFilterProgramacao('show')}
            aria-selected={filterProgramacao === 'show'}
          >
            Shows
          </button>
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-lg ${filterProgramacao === 'balada' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-orange-600'} hover:bg-orange-400 hover:text-white transition-all duration-300 min-w-[100px]`}
            onClick={() => setFilterProgramacao('balada')}
            aria-selected={filterProgramacao === 'balada'}
          >
            Baladas
          </button>
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-lg ${filterProgramacao === 'atividade' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-orange-600'} hover:bg-orange-400 hover:text-white transition-all duration-300 min-w-[100px]`}
            onClick={() => setFilterProgramacao('atividade')}
            aria-selected={filterProgramacao === 'atividade'}
          >
            Atividades
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {filteredProgramacao.map((evento) => (
            <div key={evento.id} className="gradient-border p-3 sm:p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img src={evento.img} alt={evento.title} className="w-full h-40 object-cover rounded-t-lg" loading="lazy" />
              <h3 className="text-lg sm:text-xl font-bold mt-2 text-orange-600">{evento.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{evento.date}</p>
              <p className="text-gray-700 mt-1 text-sm sm:text-base">{evento.desc}</p>
              <div className="mt-2 flex space-x-2">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  aria-label="Compartilhar no Facebook"
                >
                  FB
                </button>
                <button
                  className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-500 text-sm"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(evento.title)}`, '_blank')}
                  aria-label="Compartilhar no Twitter"
                >
                  TW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection; 