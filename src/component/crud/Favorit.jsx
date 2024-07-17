import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) {
        toast.error("Favoritlere baxmaq  ucun hesabınıza giriş !");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/user/${user.id}`);
        const favIds = response.data.fav;
        const favItemsResponse = await axios.get(`http://localhost:3000/cards`);
        const favItems = favItemsResponse.data.filter(card => favIds.includes(card.id));
        setFavorites(favItems);
      } catch (error) {
        console.error('Favori öğeler getirilirken hata oluştu:', error);
        toast.error("Favori öğeler getirilirken bir hata oluştu.");
      }
    };

    fetchFavorites();
  }, [user]);

  return (
    <div className="p-10 min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://preview.colorlib.com/theme/pizza/images/about.jpg')",
           backgroundBlendMode: "overlay",
         }}>
      <ToastContainer />
      <div className="container mx-auto px-10">
        <div className="flex flex-col w-full gap-40 items-center">
          <div className="top flex items-center flex-col justify-center w-full">
            <h2 className="text-7xl font-great-vibes text-yellow-500 italic" data-aos="fade-up">Favorites</h2>
            <span className="font-bold text-white text-5xl mt-4 text-center" data-aos="fade-up">Your Favorite Items</span>
          </div>
          
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {favorites.length > 0 ? (
              favorites.map((card) => (
                <div key={card.id} className="card flex flex-col rounded-lg overflow-hidden shadow-lg transition-all delay-100 ease-in-out w-full transform hover:scale-105 bg-gray-800" data-aos="fade-up">
                  <div className="image rounded overflow-hidden h-64">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text p-4 bg-gray-800 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">{card.title}</h3>
                      <p className="text-gray-400">{card.description}</p>
                      <p className="text-yellow-500 mt-2">{card.price}$</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button 
                        className="text-gray-400 hover:text-white focus:outline-none transform translate-x-0"
                      >
                        {user && user.fav.includes(card.id) ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-white text-center mt-4">No favorite items found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
