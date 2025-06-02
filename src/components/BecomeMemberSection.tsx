import React from 'react';

const BecomeMemberSection: React.FC = () => {
  return (
    <section id="socio" className="p-4 sm:p-6 bg-earth-light">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center text-green-forest">Torne-se Sócio</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm sm:text-base mb-4 text-earth-dark">
          Junte-se ao nosso programa de sócios e aproveite benefícios exclusivos, como:
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base mb-4 text-earth-dark">
          <li>Compra antecipada de ingressos</li>
          <li>Descontos exclusivos em pousadas e passagens</li>
          <li>Participação em sorteios de ingressos VIP</li>
          <li>Convites para eventos exclusivos</li>
        </ul>
        <button
          className="bg-green-forest text-white px-6 py-3 rounded hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={() => alert("Inscrição de sócio em breve! Fique de olho no nosso Instagram.")}
          aria-label="Torne-se sócio do festival"
        >
          Quero ser Sócio!
        </button>
      </div>
    </section>
  );
};

export default BecomeMemberSection; 