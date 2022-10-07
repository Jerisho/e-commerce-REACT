import React from 'react';
import Item from './Item/Item';
import '../../global.css';

const ItemList = (props) => {
    return (
        <div className="container-products flex-center">
            {props.products.map( (products) => {
                return <Item
                        key = {products.id}
                        id = {products.id}
                        title = {products.title}
                        img = {products.img}
                        price = {products.price}
                        detail = {products.detail}
                        stock = {products.stock}   
                        />
            })}
        </div>
    );
};

export default ItemList;