import { createContext, useState } from "react";    

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
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
        }
    }

    const clear = () => {
        setCart([])
    }
    
    const isInCart = () => {
        return cart.some((item)=> item.id === id)
    }

    const deleteItem = (id) => {
        setCart(cart.filter((item)=> item.id != id))
    }
    return(
        <CartContext.Provider value={{ cart, addItem, clear, isInCart, deleteItem}}>
            { children }
        </CartContext.Provider>
        )}