import React from 'react';
import './Item.css';
import '../../../global.css';
import { Link } from 'react-router-dom';
const Item = (props) => {
    return (
        <div>
           <div className="productView flex-center"> 
                <Link to={`/item/${props.id}`} className="linkItem flex-center">
                    <img src={props.img} alt="Product IMG"></img>
                    <h6>{props.title}</h6>
                </Link>
                <p>Precio: ${props.price}</p>
            </div>  
        </div>
    );
};

export default Item;