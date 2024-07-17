import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaHeart, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const User = () => {
  const [user, setUser] = useState(localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null);
  const [favorites, setFavorites] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchData = async () => {
      if (user) {
        try {
          const response = await axios.get('ttps://irradiated-silicon-antler.glitch.me/cards');
          const allCards = response.data;
          console.log('allCards:', allCards);
          console.log('user.fav:', user.fav);
          console.log('user.basket:', user.basket);

          const favoriteCards = allCards.filter(card => user.fav.includes(card.id));
          const basketCards = allCards.filter(card => user.basket.some(item => item.id === card.id));
          setFavorites(favoriteCards);
          setBasket(basketCards);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <div
      className="min-h-screen p-4 sm:p-10 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://preview.colorlib.com/theme/pizza/images/about.jpg')",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-white text-center">
          <FaUserCircle size={100} className="mb-4 text-yellow-500" />
          <h2 className="text-2xl sm:text-4xl font-bold mb-2">Welcome, {user?.name}</h2>
          <button
            onClick={handleLogout}
            className="flex items-center mt-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
        <div className="mt-10 bg-gray-800 p-4 sm:p-8 rounded-lg shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-4">Your Items</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-4">Favorites</h4>
              {favorites.length === 0 ? (
                <p className="text-white">You have no favorite items.</p>
              ) : (
                <table className="w-full text-left text-white">
                  <thead>
                    <tr>
                      <th className="py-2">Title</th>
                      <th className="py-2">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {favorites.map((item) => (
                      <tr key={item.id}>
                        <td className="py-2">{item.title}</td>
                        <td className="py-2 flex items-center">
                          <FaHeart className="mr-2 text-red-500" />
                          Favorite
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-4">Basket</h4>
              {basket.length === 0 ? (
                <p className="text-white">You have no items in your basket.</p>
              ) : (
                <table className="w-full text-left text-white">
                  <thead>
                    <tr>
                      <th className="py-2">Title</th>
                      <th className="py-2">Type</th>
                      <th className="py-2">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {basket.map((item) => (
                      <tr key={item.id}>
                        <td className="py-2">{item.title}</td>
                        <td className="py-2 flex items-center">
                          <FaShoppingCart className="mr-2 text-green-500" />
                          Basket
                        </td>
                        <td className="py-2">{user.basket.find(i => i.id === item.id)?.count || 0}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
