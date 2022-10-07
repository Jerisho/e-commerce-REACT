import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'
import '../../global.css'
import { getProductCategory, getProducts } from "../../mockAPI/mockAPI.js"
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    const { categoryId } = useParams();

    useEffect(
        () => {
            if( categoryId === undefined )
            getProducts().then( (data) => {  
            setProducts(data)
            })
            else{
                getProductCategory(categoryId).then((data) => {
                    setProducts(data)
                })
            }
        },[categoryId]
    )

    return (
        <div className="container-body flex-center">
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;