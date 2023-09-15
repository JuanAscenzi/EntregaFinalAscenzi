import { createContext, useEffect, useState } from "react";    

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [totalCount, setTotalCount] = useState(0)

    console.log(cart);
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
        setCart(cart.map((product)=>{
            if(product.id === item.id)
            {return {...product ,quantity: product.quantity + quantity}
        }else{
            return product;
        }
    }))
        }else{
        setCart([...cart, {...item, quantity}])
        productsCount()
        }
    }

    const clear = () => {
        setCart([])
    }
    
    const isInCart = (id) => {
        return cart.some((item)=> item.id === id)
    }

    const deleteItem = (id) => {
        setCart(cart.filter((item)=> item.id !== id))
    }

    const productsCount = () => {
        if (cart.length > 1) {
            const value = cart.reduce((prevElement, currentElement) => prevElement.contador + currentElement.contador)
            setTotalCount(value)
        } else {
            setTotalCount(cart[0].contador)
        }
    }
    return(
        <CartContext.Provider value={{ cart, addItem, clear, isInCart, deleteItem}}>
            { children }
        </CartContext.Provider>
    )
}