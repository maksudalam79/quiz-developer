import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({cart}) => {
    console.log(cart)
    const {id,logo,name,total}=cart
    return (
       <div className="card mt-4 border">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center  text-white">{name}</h2>
    <p className=' text-white'>Total: {total}</p>
    <div className="card-actions justify-center">
      <Link to={`/topic/${id}`}><button className="btn btn-primary">Lets Go</button></Link>
    </div>
  </div>
</div>
        
      
    );
};

export default Cart;