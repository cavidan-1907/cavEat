import React, { useState } from 'react';

const Carousel = () => {
  const slides = [
    { image: 'https://preview.colorlib.com/theme/feliciano/images/bg_1.jpg', title: 'Cavidicano' },
    { image: 'https://preview.colorlib.com/theme/feliciano/images/bg_3.jpg', title: 'Testimicano' },
    { image: 'https://preview.colorlib.com/theme/feliciano/images/bg_2.jpg', title: 'Samiricano' },
  ];

  const cards = [
    { image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-1.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe' },
    { image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-2.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe' },
    { image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-3.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe' },
    { image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-4.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <div className="h-screen relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ left: 0, top: 0, width: '100%', height: '100%' }}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl text-white italic">{slide.title}</h2>
            </div>
          </div>
        ))}
        <button
          onClick={goToPreviousSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-full"
        >
          &#10095;
        </button>
      </div>

      <div className="p-4 absolute bottom-0 right-0 left-0">
        <div className="flex flex-wrap gap-4 justify-center">
          {cards.map((card, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg max-w-[200px] shadow-lg">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 text-white rounded-b-lg">
                <h3 className="text-xl text-white italic">{card.title}</h3>
                <p className="text-white mt-2 text-center">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
