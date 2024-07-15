import React, { useEffect } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Top = () => {
  const cards = [
    { id: 1, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-1.jpg', title: 'Grilled Beef with Potatoes', description: 'Meat, Potatoes, Rice, Tomato', price: '$25' },
    { id: 2, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-2.jpg', title: 'Grilled Chicken with Vegetables', description: 'Chicken, Broccoli, Carrots, Rice', price: '$22' },
    { id: 3, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-3.jpg', title: 'Fresh Salad with Shrimp', description: 'Lettuce, Shrimp, Avocado, Tomato', price: '$18' },
    { id: 4, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-4.jpg', title: 'Pasta with Tomato Sauce', description: 'Pasta, Tomato Sauce, Basil, Parmesan', price: '$20' },
    { id: 5, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-5.jpg', title: 'Grilled Beef with Potatoes', description: 'Meat, Potatoes, Rice, Tomato', price: '$25' },
    { id: 6, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-6.jpg', title: 'Grilled Chicken with Vegetables', description: 'Chicken, Broccoli, Carrots, Rice', price: '$22' },
    { id: 7, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-7.jpg', title: 'Fresh Salad with Shrimp', description: 'Lettuce, Shrimp, Avocado, Tomato', price: '$18' },
    { id: 8, image: 'https://preview.colorlib.com/theme/feliciano/images/breakfast-8.jpg', title: 'Pasta with Tomato Sauce', description: 'Pasta, Tomato Sauce, Basil, Parmesan', price: '$20' },
  ];

  // Initialize AOS library
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-10 bg-gray-100">
      <div className="container mx-auto px-10">
        <div className="crud flex flex-col w-full gap-40 items-center">
          <div className="top flex items-center flex-col justify-center w-full">
            <h2 className="text-7xl font-great-vibes text-custom-yellow italic" data-aos="fade-up">Services</h2>
            <span className="font-bold text-black text-6xl mt-4" data-aos="fade-up">Our Menu</span>
          </div>
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {cards.map((card) => (
              <div key={card.id} className="card relative rounded-lg overflow-hidden shadow-lg transition-all delay-100 ease-in-out transform hover:scale-105" data-aos="fade-up">
                <img src={card.image} alt={card.title} className="w-full h-auto rounded-t-lg" />
                <div className="p-4 bg-white">
                  <h3 className="text-xl md:text-2xl font-semibold">{card.title}</h3>
                  <p className="text-gray-700">{card.description}</p>
                  <p className="text-gray-700 mt-2">{card.price}</p>
                  <div className="flex justify-between items-center mt-4">
                    <button className="text-gray-600 hover:text-gray-900 focus:outline-none transform translate-x-0">
                      <AiOutlineShoppingCart size={24} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 focus:outline-none transform translate-x-0">
                      <AiOutlineHeart size={24} />
                    </button>
                    <button className="bg-custom-yellow text-white py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300 ease-in-out">
                      Order Now
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
