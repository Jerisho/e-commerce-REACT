import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "../../global.css";
import "./Thanksyou.css"

const Thanksyou = () => {
    const {id} = useParams()
    return (
        <div className="flex-center">
            <div className="flex-center divBorder containerThanksYou">
            <h1>Gracias por su compra</h1>
            <p>Su numero de orden es: {id} </p>
            <Link to="/"><button className='btnStyle'>Volver a comprar</button></Link> 
            </div>
        </div>
    );
};

export default Thanksyou;