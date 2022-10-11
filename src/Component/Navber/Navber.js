import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl text-white">Quiz Developers</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to={'/home'}>Home</Link></li>
      <li><Link to={'/cart'}>Cart</Link></li>
      <li><Link to={'/about'}>About</Link></li>
    </ul>
  </div>
</div>
           
        </div>
    );
};

export default Navbar;