import React from 'react';
import "./CategorysNav.css"
import '../../../global.css'
import { Link } from 'react-router-dom';

const CategorysNav = () => {
    return (
        <ul className="ul-header">
            <Link to="/" ><li>Inicio</li></Link>
            <Link to="/category/motorola"><li>Motorola</li></Link>
            <Link to="/category/samsung"><li>Samsung</li></Link>
            <Link to="/category/iphone"><li>Iphone</li></Link>
        </ul>
    );
};

export default CategorysNav;