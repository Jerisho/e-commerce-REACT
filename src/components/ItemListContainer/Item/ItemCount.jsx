import React, {useState} from 'react';
import '../../../global.css';
import './ItemCount.css';

const ItemCount = ({stock, initial, handleAddToCart}) => {
    const [count, setCount] = useState(initial);

    const onRemove = () => {
        if (count > initial) setCount(count - 1)

    }

    const onAdd = () => {
        if (count < stock) setCount(count + 1)
    }

    return (
        <>
            <div className="containerCount flex-center">
                <button className='btnStyle' onClick={onRemove}>-</button>
                <strong>{count}</strong>
                <button className="btnStyle" onClick={onAdd}>+</button>
            </div>
                <button className="btnStyle" onClick={() => {
                    handleAddToCart(count); 
                    }}> 
                    Agregar al carrito
                </button>
        </>      
    );
};

export default ItemCount;