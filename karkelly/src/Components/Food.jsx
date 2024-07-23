import React from 'react';
import { useNavigate } from 'react-router-dom';
import top from '../assets/top.jpg';
import rice from '../assets/rice.jpg';
import wheat from '../assets/wheat.jpg';
import maize from '../assets/maize.jpg';
import sorghum from '../assets/sorghum.jpg';
import soybean from '../assets/soybean.jpg';
import bean from '../assets/bean.jpg';
import logo from '../assets/logo.png';

const items = [
  { src: rice, name: 'Sack of rice', price: 50000 },
  { src: wheat, name: 'Sack of wheat', price: 50000 },
  { src: maize, name: 'Sack of maize', price: 50000 },
  { src: sorghum, name: 'Sack of sorghum', price: 50000 },
  { src: soybean, name: 'Sack of soybean', price: 50000 },
  { src: bean, name: 'Sack of beans', price: 50000 },
];

const Food = ({ addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
    navigate('/cart');
  };

  return (
    <div className='bg-gray-100'>
      <div className="mb-12">
        <img src={top} alt="" className="w-full h-auto" />
      </div>

      <div className='flex my-10  md:flex-row justify-center  items-center'>
        {/* <img className='w-24 h-20 mb-4 md:mb-0' src={logo} alt="" /> */}
        <p className='text-sky-700 font-bold text-2xl '>Food services</p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mb-12 px-4 md:px-0">
        {items.slice(0, 3).map((item, index) => (
          <div key={index} className='bg-gray-300 pb-12 flex flex-col justify-center items-center w-full sm:w-72 transform transition-transform duration-500 hover:scale-105'>
            <img className='w-full h-56' src={item.src} alt={item.name} />
            <p className='flex flex-row gap-10 mt-5'>
              <span>{item.name}</span>
              <span className='font-bold'>{item.price} rwf</span>
            </p>
            <button 
              className="text-white bg-black px-3 rounded-xl mt-2 transition duration-300 transform hover:scale-110 hover:bg-white hover:text-black hover:shadow-lg hover:font-bold hover:text-md" 
              onClick={() => handleAddToCart(item)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-10 mb-12 px-4 md:px-0">
        {items.slice(3).map((item, index) => (
          <div key={index} className='bg-gray-300 pb-12 flex flex-col justify-center items-center w-full sm:w-72 transform transition-transform duration-500 hover:scale-105'>
            <img className='w-full h-56' src={item.src} alt={item.name} />
            <p className='flex flex-row gap-10 mt-5'>
              <span>{item.name}</span>
              <span className='font-bold'>{item.price} rwf</span>
            </p>
            <button 
              className="text-white bg-black px-3 rounded-xl mt-2 transition duration-300 transform hover:scale-110 hover:bg-white hover:text-black hover:shadow-lg hover:font-bold hover:text-md" 
              onClick={() => handleAddToCart(item)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
