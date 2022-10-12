import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
       <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl text-white">Quiz Developers</Link>
  </div>

  <div className="grid-none sm:grid-cols-1">
    <ul className="menu menu-horizontal p-0">
      <li><Link to={'/home'}>Home</Link></li>
      <li><Link to={'/topic'}>Topic</Link></li>
      <li><Link to={'/question'}>Question</Link></li>
      <li><Link to={'/statistics'}>Statistics</Link></li>
    </ul>
  </div>
</div>
           
    
    );
};

export default Navbar;