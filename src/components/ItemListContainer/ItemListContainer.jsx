import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'
import '../../global.css'
import { useParams } from 'react-router-dom';
import { getProducts, getProductCategory } from '../../services/firebase';
import { PulseLoader } from 'react-spinners';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    const { categoryId } = useParams();

    useEffect(
        () => {
            setProducts([])
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
            { products.length ?
                <ItemList products={products}/>
            : 
                <div className="container-body flex-center">
                    <PulseLoader color="#750d8f"/> 
                </div>
            }
        </div>
    );
};

export default ItemListContainer;