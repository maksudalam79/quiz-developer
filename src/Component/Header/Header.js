import React from 'react';
import Banner from '../Bannar/Bannar';
import Home from '../Home/Home';
import Navbar from '../Navber/Navber';

const Header = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
           
        </div>
    );
};

export default Header;