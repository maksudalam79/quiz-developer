import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Banner from '../Bannar/Bannar';



const Home = () => {
   const carts=useLoaderData()
   const cartsObj=carts.data
//    console.log(cartsObj)
   return (
    <div>
      <div>
      <Banner></Banner>
      </div>
      <div>
      <div  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-4 m-4'>
            {
              cartsObj.map(cart=><Cart
              key={cart.id}
              cart={cart}
              ></Cart>)
            }
         </div>
      </div>
    </div>
    );
};

export default Home;