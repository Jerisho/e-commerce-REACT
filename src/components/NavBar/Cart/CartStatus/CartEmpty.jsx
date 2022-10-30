import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../global.css";
import "./CartEmpty.css"


const CartEmpty = () => {
    return (
        <div className='flex-center'>
            <div className='flex-center divBorder emptyStyle'>
                <h1>Carrito Vacio</h1>
                <p>Usted tiene su carrito vació</p>
                <Link to="/"><button className='btnStyle'>Volver a comprar</button></Link>
            </div>
        </div>
    );
};

export default CartEmpty;