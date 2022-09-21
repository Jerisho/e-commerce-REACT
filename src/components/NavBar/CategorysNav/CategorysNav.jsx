import React from 'react';
import "./CategorysNav.css"
import '../../../global.css'

const CategorysNav = () => {
    return (
        <ul className="ul-header">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    );
};

export default CategorysNav;