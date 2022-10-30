import React from 'react';
import "./CartWidget.css";
import '../../../global.css';
import { Cart } from 'react-bootstrap-icons';
import { useContext } from 'react';
import { cartContext } from '../../../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getTotalItemCount } = useContext(cartContext)
    const count = getTotalItemCount();
    
    return (
        <Link to="/cart">
            <button className="button-viewCart flex-center">
                <Cart />
                <span> { count }</span>
            </button>
        </Link>
    );
};

export default CartWidget;