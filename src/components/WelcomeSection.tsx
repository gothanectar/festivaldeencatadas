import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="p-4 sm:p-6 bg-earth-sand text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-green-forest max-w-6xl mx-auto">Bem-vindo ao Paraíso do Jazz na Ilha do Mel!</h2>
      <p className="text-base sm:text-lg md:text-xl max-w-6xl mx-auto text-earth-dark">
        Descubra a magia do jazz em um dos lugares mais paradisíacos do Brasil. O Festival de Jazz da Ilha do Mel oferece uma experiência inesquecível com shows vibrantes, baladas sob as estrelas, momentos de bem-estar com yoga, ações de preservação ambiental e a conveniência de reservar sua estadia e atividades diretamente por aqui! Seu portal completo para viver a Ilha do Mel ao som do melhor jazz.
      </p>
    </section>
  );
};

export default WelcomeSection; 