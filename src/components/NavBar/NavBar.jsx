import CartWidget from './CartWidget/CartWidget.jsx';
import React from 'react';
import CategorysNav from './CategorysNav/CategorysNav.jsx';
import Logo from './Logo/Logo.jsx';
import '../../global.css'
import "./NavBar.css"

const NavBar = () => {
    return (
        <header className="header">
         <div className="div-logo"><Logo /></div>
         <div className="div-categoryNav flex-center"><CategorysNav /></div>
         <div className="div-cartNav"><CartWidget /></div>   
        </header>
    );
};

export default NavBar;