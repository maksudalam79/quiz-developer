import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        
        <div className="hero min-h-screen sm:cols-1">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-white">Font-End Developer!!!</h1>
      <p className="py-6  text-white">As I was looking for some useful coding quotes, I discovered many funny ones. Enjoy reading them — I thought these should be compiled together.Most are from other sources (as per linked), with the exception of a handful that are my own.</p>
      <Link to={'/question'} className="btn btn-primary">Go to Question</Link>
    </div>
  </div>
</div>
            
       
    );
};

export default Banner;