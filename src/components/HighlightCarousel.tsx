import React, { useEffect } from 'react';

interface CarouselItem {
  title: string;
  desc: string;
  img: string;
}

interface HighlightCarouselProps {
  carouselItems: CarouselItem[];
  carouselIndex: number;
  setCarouselIndex: React.Dispatch<React.SetStateAction<number>>;
}

const HighlightCarousel: React.FC<HighlightCarouselProps> = ({
  carouselItems,
  carouselIndex,
  setCarouselIndex,
}) => {
  // Efeito para auto-rolagem do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length, setCarouselIndex]); // Adicionado setCarouselIndex como dependência

  return (
    <section className="relative bg-image bg-overlay p-4 sm:p-6">
      <div className="relative text-center text-white">
        <div className="relative mt-6 overflow-hidden">
          <div className="flex">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`carousel-item absolute w-full ${index === carouselIndex ? 'active' : index > carouselIndex ? 'next' : 'prev'}`}
              >
                <img src={item.img} alt={item.title} className="w-full h-96 sm:h-80 object-cover rounded-lg" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                  <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                  <p className="text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
            onClick={() => setCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}
            aria-label="Slide anterior"
          >
            ←
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
            onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselItems.length)}
            aria-label="Próximo slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HighlightCarousel; 