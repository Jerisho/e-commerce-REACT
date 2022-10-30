import { createContext, useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const cartContext = createContext();

const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, count) => {
        const newCart = [...cart]
        let itemFind = cart.find(element => element.title === item.title)
        if(count === 0){
          Swal.fire({
            icon: 'error',
            title: 'No se puede agregar el producto!',
            text: 'Usted no ah seleccionado cantidad del producto que desea agergar al carrito!',
          })
        }
        else if(itemFind){
            let newItem = {...item, count}
            const newCartCount = newCart.filter(element => element.title !== itemFind.title)
            newCartCount.push(newItem)
            setCart(newCartCount)
        }
        else{
            let newItem = {...item, count} 
            newCart.push(newItem)
            setCart(newCart)
        }
    }


    const getTotalItemCount = () => {
        let totalCount = 0 ;
      
        cart.forEach( (element) => {
            totalCount += element.count
       });
       return totalCount;
    }

    const calcTotalPrice = () => {
        let total = 0;
        cart.forEach( item => { 
           total += item.price * item.count
        })
        return total
    }

    const removeItemCart = (id) => {
        Swal.fire({
            title: 'Esta seguro de borrar este producto?',
            text: "Se borrará el producto del carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar'
          }).then((result) => {
            if (result.isConfirmed) {
                let newCart = cart.filter( item => (item.id !== id))
                setCart(newCart)
              Swal.fire(
                'Producto eliminado!',
                'Se eliminó correctamente el producto del carrito!',
                'success'
              )
            }
          })
    }

    const deleteCart = () => {
        Swal.fire({
            title: 'Elimando todos los productos!',
            text: "Se eliminaran todos los productos de su carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Acepto'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Se vació su carrito!',
                'Ya no quedan productos en el carrito!',
                'success'
              )
              setCart([])
            }
          })
    }

    const deleteCartCheckOut = () => {
        setCart([])
    }

    return (
        <>
            <cartContext.Provider value ={ {cart, 
                                            addItem, 
                                            getTotalItemCount, 
                                            deleteCart, 
                                            removeItemCart, 
                                            calcTotalPrice,
                                            deleteCartCheckOut,
                                            } }>
                {props.children}
            </cartContext.Provider>
        </>
    )
}

export { cartContext, CartContextProvider };