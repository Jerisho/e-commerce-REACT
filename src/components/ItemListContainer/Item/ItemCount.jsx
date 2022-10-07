import React, {useState} from 'react';


const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial);

    const onRemove = () => {
        if (count > initial) setCount(count - 1)
    }

    const onAdd = () => {
        if (count < stock) setCount(count + 1)
    }

    return (
        <div>
            <button onClick={onRemove}>-</button>
            <strong>{count}</strong>
            <button onClick={onAdd}>+</button>
        </div>
    );
};

export default ItemCount;