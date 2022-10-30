import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../../context/cartContext';
import CartEmpty from './CartStatus/CartEmpty';
import CartView from './CartStatus/CartView';

const Cart = () => {
    const { cart } = useContext(cartContext)
    return (
        <div>
            {cart.length
            ? <CartView />
            : <CartEmpty />
            }
        </div>
    );
};

export default Cart;