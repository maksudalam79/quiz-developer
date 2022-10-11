import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';



const Home = () => {
   const carts=useLoaderData()
   const cartsObj=carts.data
//    console.log(cartsObj)
   return (
        <div  className='flex justify-center  gap-4 m-4'>
            {
              cartsObj.map(cart=><Cart
              key={cart.id}
              cart={cart}
              ></Cart>)
            }
         </div>
    );
};

export default Home;