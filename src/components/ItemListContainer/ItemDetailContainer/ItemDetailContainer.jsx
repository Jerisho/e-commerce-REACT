import React from 'react';
import "../../../global.css"
import { getProductId } from '../../../services/firebase'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const  { id } = useParams();
    
    useEffect(() => {
            getProductId(id)
                .then( (data) => {  
            setProduct(data);
            })
        },[id]
    )
    return (
        <div className="flex-center">
            <ItemDetail 
            key = {product.id}
            id = {product.id}
            title = {product.title}
            img = {product.img}
            price = {product.price}
            detail = {product.detail}
            stock = {product.stock}   
           />
        </div>
    );
};

export default ItemDetailContainer;