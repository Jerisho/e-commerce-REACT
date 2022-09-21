import React from 'react';
import './CardProducts.css';
import '../../../global.css'

const CardProducts = (props) => {
    return (
        <div>
           <div className="productView flex-center">
                <img src={props.img} alt="Product IMG"></img>
                <h6>{props.title}</h6>
                <p>Precio{props.price}</p>
                <button>Agregar al carrito</button>
            </div>  
        </div>
    );
};

export default CardProducts;