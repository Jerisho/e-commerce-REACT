import React from 'react';
import './ItemDetail.css';
import '../../../global.css';
import ItemCount from '../Item/ItemCount';
import { useContext } from 'react';
import { cartContext } from '../../../context/cartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PulseLoader } from 'react-spinners';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const ItemDetail = (item) => {
    const { addItem, cart} = useContext(cartContext)
    const [count, setCount] = useState(0);

    const handleAddToCart = (count) => {
        let itemFind = cart.find( product => product.title === item.title )
        if(count === 0){
            addItem(item, count)
        }
        else if(itemFind !== undefined){
            let newCount = itemFind.count + count;
            addItem(item, newCount)
            setCount(count)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se agrego correctamente el item al carrito',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se agrego correctamente el item al carrito',
                showConfirmButton: false,
                timer: 1500
              })
            addItem(item, count)
            setCount(count)
        }
    }
    return (
            <>
                { item.title ?
                <div className="productViewDetail flex-center">
                    <div className="containerTitle flex-center">
                        <h4>{item.title}</h4>
                    </div>
                    <div className="containerInfo flex-center">
                        <div className="flex-center">
                            <img src={item.img} alt="Product IMG"></img>
                        </div>
                        <div className="containerDetails flex-center">
                            <div className="containerAbout flex-center">
                                <h6>Acerca de este producto:</h6>
                            </div>
                            <div className="containerDetailPrice flex-center">
                                <p>{item.detail}</p>
                                <p className='classPrice'>Precio: ${item.price}</p>
                            </div>
                            <div className="containerBtn flex-center">
                                { count === 0 ? 
                                <ItemCount stock={item.stock} initial={0} handleAddToCart={handleAddToCart}/>
                                :<button className="btnStyle"><Link className="linkDefault" to="/cart"> Finalizar compra </Link></button>  
                                }
                            </div>
                        </div>
                    </div>
                </div>
                : <PulseLoader color="#750d8f"/> 
                }
            </>
        )
    };
export default ItemDetail;