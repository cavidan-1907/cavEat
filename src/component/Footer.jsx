import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const cards = [
    { id: 1, image: 'https://preview.colorlib.com/theme/feliciano/images/insta-1.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe', price: '$25' },
    { id: 2, image: 'https://preview.colorlib.com/theme/feliciano/images/insta-2.jpg', title: 'Grilled Chicken with vegetables', description: 'Chicken, Broccoli, Carrots, Rice', price: '$22' },
    { id: 3, image: 'https://preview.colorlib.com/theme/feliciano/images/insta-3.jpg', title: 'Fresh Salad with shrimp', description: 'Lettuce, Shrimp, Avocado, Tomato', price: '$18' },
    { id: 4, image: 'https://preview.colorlib.com/theme/feliciano/images/insta-4.jpg', title: 'Pasta with tomato sauce', description: 'Pasta, Tomato Sauce, Basil, Parmesan', price: '$20' },
    { id: 1, image: 'https://preview.colorlib.com/theme/feliciano/images/insta-5.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe', price: '$25' },
    { id: 2, image: 'https://preview.colorlib.com/theme/feliciano/images/insta-6.jpg', title: 'Grilled Chicken with vegetables', description: 'Chicken, Broccoli, Carrots, Rice', price: '$22' },
    { id: 4, image: 'https://preview.colorlib.com/theme/feliciano/images/insta-4.jpg', title: 'Pasta with tomato sauce', description: 'Pasta, Tomato Sauce, Basil, Parmesan', price: '$20' },
    { id: 1, image: 'https://preview.colorlib.com/theme/feliciano/images/insta-5.jpg', title: 'Grilled Beef with potatoes', description: 'Meat, Potatoes, Rice, Tomatoe', price: '$25' },
  ];
  return (
    <footer className="bg-custom-black text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="md:grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold mb-2">Cavidicano</h2>
            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          
            
          </div>
          <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Open Hours</h3>
              <ul>
                <li className='text-gray-600' >Monday 9:00 - 24:00</li>
                <li className='text-gray-600'>Tuesday 9:00 - 24:00</li>
                <li className='text-gray-600'>Wednesday 9:00 - 24:00</li>
                <li className='text-gray-600'>Thursday 9:00 - 24:00</li>
                <li className='text-gray-600'>Friday 9:00 - 02:00</li>
                <li className='text-gray-600'>Saturday 9:00 - 02:00</li>
                <li className='text-gray-600'>Sunday 9:00 - 02:00</li>
              </ul>
            </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Instagram</h2>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl hover:text-white transition-colors duration-300" />
            </a>
            <div className='grid grid-cols-4  w-[100%]'>
            {cards.map((card, index) => (
        <div key={index}>
          <img src={card.image} alt={card.title}/>
        </div>
      ))}
            </div>
          

          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Newsletter</h2>
            <p className="mb-4">Far far away, behind the word mountains, far from the countries.</p>
            <input type="email" name="" id="" placeholder='Enter Email addres' className='bg-zinc-900 rounded-[10px] w-[100%] p-[10px]' />
            <input type="submit" value="subscribe" className='bg-yellow-900 w-[100%] rounded-[10px] mt-[12px] p-[10px]' />
          </div>
        </div>
        <hr className="border-gray-700 my-4" />
        <p className="text-center">&copy; 2024 All rights reserved | This template is made with ❤️ by Colorlib</p>
      </div>
    </footer>
  );
}

export default Footer;
