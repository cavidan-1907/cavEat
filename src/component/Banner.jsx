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
    <div className="w-full relative h-screen">
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
      <div className="p-4 absolute bottom-0 left-0 right-0">
        <div className="flex flex-wrap items-center justify-around">
          {cards.map((card, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
       <div className="max-w-[200px] max-h-[200px] object-cover rounded-full"> <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-full" /> </div>
              <div className="bg-black bg-opacity-50 p-4 absolute  inset-0 flex flex-col rounded-full text-center items-center justify-center">
                <h3 className="text-white text-xl italic">{card.title}</h3>
                <p className="text-white text-center mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
