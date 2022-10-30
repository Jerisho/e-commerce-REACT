import { React, useState, useContext} from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../services/firebase';
import InputsForm from './InputsForm';
import { cartContext } from '../../context/cartContext';
import '../../global.css'
import './Forms.css'
import { useEffect } from 'react';

const Form = () => {
    const navigation = useNavigate();
    const {cart, calcTotalPrice, deleteCartCheckOut} = useContext(cartContext)
    const [totalPrice, setTotalPrice] = useState(0)

    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        direction: "",
        email: "",
        checkemail: "",
        phone: "",
      });
    
    const onInputChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
      
        let newUserData = { ...userData };
        newUserData[name] = value;
        setUserData(newUserData);
      }

    const onSubmit = (evt) => {
        evt.preventDefault();
        
        if(userData.email !== userData.checkemail){
          Swal.fire({
            icon: 'error',
            title: 'Error al completar el formulario',
            text: 'Ambos mails deben coincidir!',
          })
        }
        
        else if(isNaN(userData.phone)){
          Swal.fire({
            icon: 'error',
            title: 'Error al completar el formulario',
            text: 'El telefono solo debe contener numeros!',
          })
        }
        else {
          const orderData = {
            buyerData: userData,
            cart: cart,
            total: calcTotalPrice(),
            date: new Date()
        };

          createOrder(orderData).then( res =>{           
              Swal.fire({
                  title: "Gracias!",
                  text: "Gracias por tu compra",
                  icon: "success",
                  confirmButtonText: "Aceptar",
                }).then((respuesta) => {
                  deleteCartCheckOut()
                  navigation(`/thankyou/${res}`);
                });
              });
        }

    }


    useEffect(() => {
      setTotalPrice(calcTotalPrice())
  },[calcTotalPrice])

    return (
        <>
        <div className='divBorder flex-center'>
          <div className='containerTitleInputs flex-center'>
            <h1>Ingrese sus datos!</h1>
          </div>
          <form onSubmit={onSubmit} className="flex-center formStyle">
              <InputsForm value={userData.name} name="name" type={"text"} onChange={onInputChange} title="Nombre:"/>
              <InputsForm value={userData.surname} name="surname" type={"text"} onChange={onInputChange} title="Apellido:"/>
              <InputsForm value={userData.direction} name="direction" type={"text"} onChange={onInputChange} title="Direccion:"/>
              <InputsForm value={userData.email} name="email" type={"email"} onChange={onInputChange} title="E-mail:"/>
              <InputsForm value={userData.checkemail} name="checkemail" type={"email"} onChange={onInputChange} title="Repetir e-mail:"/>
              <InputsForm value={userData.phone} name="phone" type={"text"} onChange={onInputChange} title="Telefono: "/>
              <button type="submit" className='btnStyle'>Enviar</button>
          </form>
          <div className='containerTitleInputs flex-center'>
            <h1>Detalle de su compra</h1>
          </div>
         <h3>El total es de {totalPrice}</h3>
         <table className='tableCart'>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Nombre</th>
                    <th>Precio x unidad</th>
                    <th>Precio x cantidad</th>
                    <th>Cantidad</th>
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
                </tr>
            ))}
            </tbody>
         </table>
        </div>
        </>
    );
};

export default Form;