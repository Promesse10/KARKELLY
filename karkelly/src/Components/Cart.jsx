// import React, { useState } from 'react';
// import plastic from '../assets/plastic.jpg';
// import artPaper from '../assets/paper-cart.jpg'


// const products = [
//   { id: 1, name: 'Plastic File', price: 1000, image: plastic },
// //   { id: 2, name: 'Rules', price: 1000, image: rules },
//   { id: 3, name: 'Art Paper', price: 1000, image: artPaper },
// ];
// const ShoppingCart = () => {
//   const [cart, setCart] = useState({});

//   const handleQuantityChange = (id, quantity) => {
//     setCart((prevCart) => ({
//       ...prevCart,
//       [id]: quantity,
//     }));
//   };

//   const totalItems = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
//   const totalPrice = Object.entries(cart).reduce((total, [id, quantity]) => total + quantity * products.find((p) => p.id === parseInt(id)).price, 0);

//   return (
//     <div className="flex justify-center p-6">
//       <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-3xl">
//         <div className="flex justify-between items-center pb-4 border-b">
//           <h1 className="text-2xl font-bold">Shopping Cart</h1>
//           <span>{totalItems} Items</span>
//         </div>
//         <div className="mt-4">
//           {products.map((product) => (
//             <div key={product.id} className="flex items-center justify-between py-2">
//               <img src={plastic}  className="w-16 h-16 object-cover" />
//               <img src={artPaper} className="w-16 h-16 object-cover" />
            
              
//               <div className="flex-1 ml-4">
//                 <p className="font-semibold">{product.name}</p>
//                 <p className="text-gray-500">{product.price} RWF</p>
//               </div>
//               <div className="flex items-center">
//                 <button
//                   className="px-2 py-1 bg-gray-200 rounded"
//                   onClick={() => handleQuantityChange(product.id, (cart[product.id] || 0) - 1)}
//                   disabled={!cart[product.id]}
//                 >
//                   -
//                 </button>
//                 <span className="mx-2">{cart[product.id] || 0}</span>
//                 <button
//                   className="px-2 py-1 bg-gray-200 rounded"
//                   onClick={() => handleQuantityChange(product.id, (cart[product.id] || 0) + 1)}
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="ml-4">{(cart[product.id] || 0) * product.price} RWF</p>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-between items-center mt-6 border-t pt-4">
//           <p className="font-semibold">Total cost:</p>
//           <p className="font-semibold">{totalPrice + 1000} RWF</p>
//         </div>
//         <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;

import React from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];

  return (
    <div className='bg-gray-100 min-h-screen p-5'>
      <h1 className='text-2xl font-bold mb-5'>Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className='grid gap-5'>
          {cart.map((item, index) => (
            <div key={index} className='bg-white p-5 shadow-md rounded-lg flex justify-between items-center'>
              <img className='w-24 h-24' src={item.src} alt={item.name} />
              <div>
                <p className='font-bold'>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
