import { React, useState, useEffect, useContext} from 'react';
import { cartContext } from '../../../../context/cartContext';
import "../../../../global.css"
import "./CartView.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from 'react-router-dom';

const CartView = () => {
    const { cart, removeItemCart, deleteCart, calcTotalPrice} = useContext(cartContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const navigation = useNavigate()
   
    useEffect(() => {
        setTotalPrice(calcTotalPrice())
    },[calcTotalPrice])

    const endBuy = () => {
        Swal.fire({
          title: 'Esta seguro que desea finalizar la compra?',
          text: "Será redirigido al formulario para finalizar la compra!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Finalizar Compra'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Redirigiendo',
              '',
              'success'
            )
            setTimeout(() => {
                navigation('/checkOut')
            }, 1000)  
          }
        })
      }
    
    return (
        <div className="containerCartView flex-center">
         <h1>Carrito</h1>
         <h3>El total es de {totalPrice}</h3>
         <table className='tableCart'>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Nombre</th>
                    <th>Precio x unidad</th>
                    <th>Precio x cantidad</th>
                    <th>Cantidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cart.map( item => (
                <tr key={item.id}>
                    <td><img src={`${item.img}`} alt="" /></td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.price * item.count}</td>
                    <td>{item.count}</td>
                    <td><button className="btnStyle"onClick={() => removeItemCart(item.id)}>x</button></td>
                </tr>
            ))}
            </tbody>
         </table>
        <div className='flex-center'>
            <button className="btnStyle" onClick={() => deleteCart()}>Vaciar Carrito</button>
            <button className="btnStyle" onClick={() => endBuy()}>Finalizar Compra</button>
        </div>
        </div>
    );
};

export default CartView;