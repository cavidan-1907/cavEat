import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Top = () => {
  const cards = [
    { id: 1, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-1.jpg', title: 'Grilled Beef with Potatoes', description: 'Meat, Potatoes, Rice, Tomato', price: '$25' },
    { id: 2, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-2.jpg', title: 'Grilled Chicken with Vegetables', description: 'Chicken, Broccoli, Carrots, Rice', price: '$22' },
    { id: 3, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-3.jpg', title: 'Fresh Salad with Shrimp', description: 'Lettuce, Shrimp, Avocado, Tomato', price: '$18' },
    { id: 4, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-4.jpg', title: 'Pasta with Tomato Sauce', description: 'Pasta, Tomato Sauce, Basil, Parmesan', price: '$20' },
    { id: 5, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-1.jpg', title: 'Grilled Beef with Potatoes', description: 'Meat, Potatoes, Rice, Tomato', price: '$25' },
    { id: 6, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-2.jpg', title: 'Grilled Chicken with Vegetables', description: 'Chicken, Broccoli, Carrots, Rice', price: '$22' },
    { id: 7, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-3.jpg', title: 'Fresh Salad with Shrimp', description: 'Lettuce, Shrimp, Avocado, Tomato', price: '$18' },
    { id: 8, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-4.jpg', title: 'Pasta with Tomato Sauce', description: 'Pasta, Tomato Sauce, Basil, Parmesan', price: '$20' },
  ];

  // Initialize AOS library
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="p-10 bg-fff">
      <div className="container mx-auto px-10">
        <div className="crud flex flex-col w-full gap-16 md:gap-40 items-center">
          <div className="top flex items-center flex-col justify-center w-full">
            <h2 className="text-6xl md:text-7xl font-great-vibes text-custom-yellow italic" data-aos="fade-up">Services</h2>
            <span className="font-bold text-black text-4xl md:text-6xl mt-4" data-aos="fade-up">Our Menu</span>
          </div>
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {cards.map((card) => (
              <div
                key={card.id}
                className="card relative rounded-lg overflow-hidden shadow-lg transition-all delay-100 ease-in-out transform hover:scale-105"
                style={{ minHeight: '400px' }}
                data-aos="fade-up"
                onMouseEnter={() => handleMouseEnter(card.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={card.image} alt={card.title} className="w-full h-auto rounded-t-lg" />
                <div className={`p-4 absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 transition-opacity ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className={`text-xl md:text-2xl font-semibold text-white text-center ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`}>{card.title}</h3>
                  <div className={`flex justify-center items-center mt-2 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-gray-200 text-center">{card.description}</p>
                  </div>
                  <div className={`flex justify-center items-center mt-2 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-gray-200">{card.price}</p>
                  </div>
                  <div className={`flex justify-center items-center mt-4 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`}>
                    <button className="text-gray-200 hover:text-gray-400 focus:outline-none">
                      <AiOutlineShoppingCart size={24} />
                    </button>
                    <button className="text-gray-200 hover:text-gray-400 focus:outline-none ml-4">
                      <AiOutlineHeart size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
