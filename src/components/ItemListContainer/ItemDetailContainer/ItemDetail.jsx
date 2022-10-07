import React from 'react';
import './ItemDetail.css';
import '../../../global.css';
import ItemCount from '../Item/ItemCount';
const ItemDetail = (props) => {
    return (
           <div className="productViewDetail flex-center">
                <img src={props.img} alt="Product IMG"></img>
                <h4>{props.title}</h4>
                <h6>Acerca de este producto:</h6>
                <p>{props.detail}</p>
                <p>Precio: ${props.price}</p>
                <ItemCount stock={props.stock} initial={0}/>
                <button>Agregar al carrito</button>
            </div>  
    );
};

export default ItemDetail;