import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    const {logo,name,total}=cart
    return (
       <div className="card card-compact w-56 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">{name}</h2>
    <p>{total}</p>
    <div className="card-actions  justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
      
    );
};

export default Cart;