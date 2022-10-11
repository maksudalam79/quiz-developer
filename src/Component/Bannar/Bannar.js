import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Font-End Developer!!!</h1>
      <p className="py-6">As I was looking for some useful coding quotes, I discovered many funny ones. Enjoy reading them — I thought these should be compiled together.Most are from other sources (as per linked), with the exception of a handful that are my own.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;