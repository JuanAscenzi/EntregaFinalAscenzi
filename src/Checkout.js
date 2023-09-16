import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { toast } from 'sonner'
import { CartContext } from './context/CartContext'
import { db } from './db/firebase'

export const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const {cart, cantidadTotal, clear} = useContext(CartContext)
    const [orderId, setOrderId] = useState('')

    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name && user.phone){
            toast("Complete los campos, son obligatorios")
        }else{
            let order = {
                user,
                item: cart,
                total: cantidadTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "ventas")
            addDoc(ventas, order)
            .then((res)=> {
                setOrderId(res.id)
                clear()
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }
  return (
    <div>
        {orderId !== ''
        ? <div>
            <br />
            <h2 className="d-flex flex-column align-items-center">Felicitaciones su compra ha sido registrada</h2>
            <br />
            <h5 className="d-flex flex-column align-items-center">Su id de registro para el seguimiento de la compra es: {orderId}</h5>
        </div>
        :<div>
        <h2 className="d-flex flex-column align-items-center">Terminar su compra</h2>
        <h4 className="d-flex flex-column align-items-center">Complete con sus datos el formulario</h4>
        <form onSubmit={finalizarCompra}>
            <div className='mb-3'>
                <label className='form-label'>Ingrese su nombre primero y luego su apellido </label>
                <input className='form-control' onChange={datosComprador} type="text" placeholder='Nombre y apellido' name='name' required />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Ingrese su numero de telefono sin +54 </label>    
                <input className='form-control' onChange={datosComprador} type="number" placeholder='Ej: 1122443366' name='phone' required />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Ingrese su correo electronico </label>    
                <input className='form-control' onChange={datosComprador} type="email" placeholder='Ej: velez@gmail.com' name='mail' required />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Repita su correo electronico </label>    
                <input className='form-control' type="email" placeholder='Ej: velez@gmail.com' name='mail' onChange={((e)=>setValidateEmail(e.target.value))} />
            </div>
            <Button className='btn btn-dark' type='submit' disabled={validateEmail !== user.mail} >Generar orden de compra</Button>
        </form>
    </div>
    }
    </div>
  )
}
