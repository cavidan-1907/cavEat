import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cards = [
    { image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-1.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe' },
    { image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-2.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe' },
    { image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-3.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe' },
    { image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-4.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe' },
  ];

  return (
    <div className="p-4 flex flex-wrap items-center justify-around md:hidden bg-custom-yellow">
      {cards.map((card, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg mb-4 w-full max-w-[200px]" data-aos="fade-up" data-aos-duration="1000">
          <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="bg-black bg-opacity-50 p-4 flex flex-col rounded-b-lg">
            <h3 className="text-white text-xl italic">{card.title}</h3>
            <p className="text-white text-center mt-2">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
