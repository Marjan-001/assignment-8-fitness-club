import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <h1> Fitness Club</h1>
            </div>


        </div>


    );
};

export default Header;