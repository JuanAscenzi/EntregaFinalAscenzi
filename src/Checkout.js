import { addDoc, collection, Timestamp  } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'
import {db} from './db/firebase'
import CheckoutForm from './CheckoutForm'

export const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
        try{
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const orderRef = collection(db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()
      
        

    }catch (error){
        console.log(error)
    }finally{
        setLoading(false)
    }
    }

    if(loading){
        return <h1>Creando orden</h1>
    }
    
    if(orderId){
        return <h1>Su id de orden es: {orderId.id}</h1>
    }
    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
    }