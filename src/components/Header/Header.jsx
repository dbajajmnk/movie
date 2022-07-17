import React from 'react';
import {Link} from 'react-router-dom';
import user from '../../asset/images/user.png'
import  './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <Link to="/">
            <div className='logo'>
               Movie App
            </div>
            </Link>
            <div className='user-image'>
            <img src={user} alt="user" ></img>
            </div>
        </header>
    );
};

export default Header;