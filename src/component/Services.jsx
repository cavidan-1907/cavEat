import React from 'react';
import { AiOutlineCoffee, AiOutlineShop, AiOutlineTeam } from 'react-icons/ai';

const Services = () => {
  return (
    <div className="p-10 bg-gray-100">
      <div className="container mx-auto px-10">
        <div className="crud flex flex-col w-full gap-20 items-center">
          <div className="top flex items-center flex-col justify-center w-full">
            <h2 className="text-7xl font-great-vibes text-custom-yellow italic" data-aos="fade-up">Services</h2>
          </div>
          <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <ServiceItem
              icon={<AiOutlineCoffee className="text-custom-yellow" size={48} />}
              title="Catering Services"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam eius obcaecati asperiores tempore recusandae reprehenderit. Doloremque nisi beatae explicabo a! Labore eius quaerat sit rerum, ullam voluptatem veniam sunt. Eos."
            />
            <ServiceItem
              icon={<AiOutlineShop className="text-custom-yellow" size={48} />}
              title="Business Meetings"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam eius obcaecati asperiores tempore recusandae reprehenderit. Doloremque nisi beatae explicabo a! Labore eius quaerat sit rerum, ullam voluptatem veniam sunt. Eos."
            />
            <ServiceItem
              icon={<AiOutlineTeam className="text-custom-yellow" size={48} />}
              title="Wedding Party"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam eius obcaecati asperiores tempore recusandae reprehenderit. Doloremque nisi beatae explicabo a! Labore eius quaerat sit rerum, ullam voluptatem veniam sunt. Eos."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="service relative rounded-lg overflow-hidden shadow-lg transition-all delay-100 ease-in-out transform hover:scale-105" data-aos="fade-up">
      <div className="p-4 bg-white">
        <div className="flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl flex flex-col items-center font-semibold">{title}</h3>
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    </div>
  );
}

export default Services;
