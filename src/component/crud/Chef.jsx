// import React, { useState,useEffect } from 'react';
// import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
// import axios from 'axios';

// // const chefs = [
// //   { id: 1,des:"Restaurant Owner", name: 'Head Chef John', image: 'https://preview.colorlib.com/theme/feliciano/images/chef-4.jpg', instagram: 'https://www.instagram.com', twitter: 'https://www.twitter.com', facebook: 'https://www.facebook.com' },
// //   { id: 2,des:"Head Chef", name: 'Assistant Chef Mary', image: 'https://preview.colorlib.com/theme/feliciano/images/chef-3.jpg', instagram: 'https://www.instagram.com', twitter: 'https://www.twitter.com', facebook: 'https://www.facebook.com' },
// //   { id: 3,des:"Chef", name: 'Chef Alex', image: 'https://preview.colorlib.com/theme/feliciano/images/chef-1.jpg', instagram: 'https://www.instagram.com', twitter: 'https://www.twitter.com', facebook: 'https://www.facebook.com' },
// //   { id: 4,des:"Chef", name: 'Chef Emily', image: 'https://preview.colorlib.com/theme/feliciano/images/chef-2.jpg', instagram: 'https://www.instagram.com', twitter: 'https://www.twitter.com', facebook: 'https://www.facebook.com' },
// // ];

// const Chef = () => {
// const [chefs,setChef]=useState([]);

// const api="https://small-somber-tuba.glitch.me/chefs";
// useEffect(() => {
// const fetchChef=async ()=>{
//   const response = await axios.get(api)
//   setChef(response.data)
// }
// fetchChef()
// }, [chefs])


//   return (
//     <div className="p-10 bg-gray-100">
//       <div className="container mx-auto px-10">
//         <div className="crud flex flex-col w-full gap-20 items-center">
//           <div className="top flex items-center flex-col justify-center w-full">
//             <h2 className="text-7xl font-great-vibes text-custom-yellow italic" data-aos="fade-up">Meet Our Chefs</h2>
//           </div>
//           <div className="chefs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
//             {chefs.map((chef) => (
//               <div key={chef.id} className="chef relative rounded-lg overflow-hidden shadow-lg transition-all delay-100 ease-in-out transform hover:scale-105" data-aos="fade-up">
//                 <img src={chef.image} alt={chef.name} className="w-full h-auto rounded-t-lg" />
//                 <div className="p-4 bg-white">
//                   <h3 className="text-[20px] font-semibold">{chef.name}</h3>
//                   <p className="text-[12px]  text-gray-500">{chef.des}</p>
//                   <div className="flex justify-center items-center mt-4 space-x-4">
//                     <a href={chef.instagram} target="_blank" rel="noopener noreferrer">
//                       <FaInstagram className="text-custom-yellow hover:text-gray-900 transition-colors duration-300" size={24} />
//                     </a>
//                     <a href={chef.twitter} target="_blank" rel="noopener noreferrer">
//                       <FaTwitter className="text-custom-yellow hover:text-gray-900 transition-colors duration-300" size={24} />
//                     </a>
//                     <a href={chef.facebook} target="_blank" rel="noopener noreferrer">
//                       <FaFacebook className="text-custom-yellow hover:text-gray-900 transition-colors duration-300" size={24} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chef;
