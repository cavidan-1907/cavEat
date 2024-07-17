import React, { useEffect, useState } from 'react';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BasketPage = () => {
  const [basketCards, setBasketCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);
  const [user, setUser] = useState(localStorage.getItem('currentUser3') ? JSON.parse(localStorage.getItem('currentUser3')) : null);

  useEffect(() => {
    const fetchBasketCards = async () => {
      if (user) {
        try {
          const response = await axios.get('https://irradiated-silicon-antler.glitch.me/cards');
          const allCards = response.data;
          const basketCards = allCards.filter(card => user.basket.some(item => item.id === card.id));
          setBasketCards(basketCards);
        } catch (error) {
          toast.error('Error fetching basket items');
          console.error('Error fetching basket items:', error);
        }
      }
    };
    fetchBasketCards();
  }, [user]);

  const addBasket = async (id, operation) => {
    if (!user) {
      toast.error("Please log in to add items to the basket!");
      return;
    }

    const updatedUser = { ...user };
    const basketItemIndex = updatedUser.basket.findIndex(item => item.id === id);

    if (operation === 'add') {
      if (basketItemIndex !== -1) {
        updatedUser.basket[basketItemIndex].count++;
      } else {
        updatedUser.basket.push({ id, count: 1 });
      }
    } else if (operation === 'remove') {
      if (basketItemIndex !== -1) {
        updatedUser.basket[basketItemIndex].count--;
        if (updatedUser.basket[basketItemIndex].count === 0) {
          updatedUser.basket.splice(basketItemIndex, 1);
        }
      }
    } else if (operation === 'delete') {
      if (basketItemIndex !== -1) {
        updatedUser.basket.splice(basketItemIndex, 1);
      }
    }

    setUser(updatedUser);
    localStorage.setItem('currentUser3', JSON.stringify(updatedUser));

    try {
      await axios.patch(`https://irradiated-silicon-antler.glitch.me/user/${user.id}`, { basket: updatedUser.basket });
      const updatedBasketCards = basketCards.filter(card => updatedUser.basket.some(item => item.id === card.id));
      setBasketCards(updatedBasketCards);
    } catch (error) {
      toast.error('Error updating basket');
      console.error('Error updating basket:', error);
    }
  };

  const isBasket = (id) => {
    return user ? user.basket.some(item => item.id === id) : false;
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = basketCards.slice(indexOfFirstCard, indexOfLastCard);

  const numberOfPages = Math.ceil(basketCards.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-10 min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://preview.colorlib.com/theme/pizza/images/about.jpg')",
           backgroundBlendMode: "overlay",
         }}>
      <ToastContainer />
      <div className="container mx-auto px-10">
        <div className="crud flex flex-col w-full gap-40 items-center">
          <div className="top flex items-center flex-col justify-center w-full">
            <h2 className="text-7xl font-great-vibes text-yellow-500 italic">Basket</h2>
            <span className="font-bold text-white text-5xl mt-4 text-center">Your Basket Items</span>
          </div>

          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentCards.length > 0 ? (
              currentCards.map((card) => (
                <div key={card.id} className="card flex flex-col rounded-lg overflow-hidden shadow-lg transition-all delay-100 ease-in-out w-full transform hover:scale-105 bg-gray-800">
                  <div className="image rounded overflow-hidden h-64">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text p-4 bg-gray-800 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">{card.title}</h3>
                      <p className="text-gray-400">{card.description}</p>
                      <p className="text-yellow-500 mt-2">{card.price*user.basket.find(item => item.id === card.id)?.count}$</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center">
                        <button
                          className="text-gray-400 hover:text-white focus:outline-none transform translate-x-0"
                          onClick={() => addBasket(card.id, 'remove')}
                        >
                          <MdRemoveCircle size={24} />
                        </button>
                        <span className="mx-2 text-white">{user.basket.find(item => item.id === card.id)?.count || 0}</span>
                        <button
                          className="text-gray-400 hover:text-white focus:outline-none transform translate-x-0"
                          onClick={() => addBasket(card.id, 'add')}
                        >
                          <MdAddCircle size={24} />
                        </button>
                      </div>
                      <button 
                        className="text-gray-400 hover:text-white focus:outline-none transform translate-x-0"
                        onClick={() => addBasket(card.id, 'delete')}
                      >
                        <MdDelete size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-white text-center mt-4">You have no Basket items.</div>
            )}
          </div>

          <div className="pagination mt-10 flex justify-center">
            {Array.from({ length: numberOfPages }, (_, index) => (
              <button 
                key={index + 1} 
                onClick={() => paginate(index + 1)} 
                className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-white'}`}
              >
                {index +  1}
              </button>
            ))}
          </div>
        </div>  
      </div>
    </div>
  );
}

export default BasketPage;
