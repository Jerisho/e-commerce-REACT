import React from 'react';
import "./CartWidget.css";
import '../../../global.css'
import { Cart } from 'react-bootstrap-icons'

const CartWidget = () => {
    return (
        <button className="button-viewCart flex-center"><Cart /></button>
    );
};

export default CartWidget;