import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cards = [
    { id: 1, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-1.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe', price: '$25' },
    { id: 2, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-2.jpg', title: 'Grilled Chicken with vegetables', description: 'Chicken, Broccoli, Carrots, Rice', price: '$22' },
    { id: 3, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-3.jpg', title: 'Fresh Salad with shrimp', description: 'Lettuce, Shrimp, Avocado, Tomato', price: '$18' },
    { id: 4, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-4.jpg', title: 'Pasta with tomato sauce', description: 'Pasta, Tomato Sauce, Basil, Parmesan', price: '$20' },
  ];


  return (
    <div className="p-4 flex flex-wrap items-center justify-around md:hidden bg-custom-yellow">
      {cards.map((card, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg mb-4 w-full max-w-[200px]" data-aos="fade-up" data-aos-duration="1000">
          <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="bg-black bg-opacity-50 p-4 flex flex-col rounded-b-lg">
            <h3 className="text-white text-center text-xl italic">{card.title}</h3>
            <p className="text-white text-center mt-2">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
