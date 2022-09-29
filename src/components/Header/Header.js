import React from 'react';
import logo from '../../images/logo.png'

import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <img src={logo} alt="" />
                <div>
                    <h1>Fitness Club</h1>

                </div>


            </div>
            <h2> Select today's exercise</h2>

        </div>

    );
};

export default Header;