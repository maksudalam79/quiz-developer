import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Component/Cart/Cart';

const Options = () => {
    const carts = useLoaderData();
    const cartsObj = carts.data;
    return (
        <div>
          <h2 className='text-5xl font-bold mt-2 text-white'>Our Options</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 m-5">
          {cartsObj.map((cart) => (
            <Cart key={cart.id} cart={cart}></Cart>
          ))}
        </div>
      </div>
    );
};

export default Options;