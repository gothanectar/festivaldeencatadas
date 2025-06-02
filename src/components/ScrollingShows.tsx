import React from 'react';

interface Evento {
  id: number;
  title: string;
  date: string;
  type: string;
  desc: string;
  img: string;
}

interface ScrollingShowsProps {
  programacao: Evento[];
}

const ScrollingShows: React.FC<ScrollingShowsProps> = ({ programacao }) => {
  return (
    <div className="marquee">
      {programacao.map((evento) => (
        <span key={evento.id} className="mx-4">
          {evento.title} - {evento.date}
        </span>
      ))}
    </div>
  );
};

export default ScrollingShows; 