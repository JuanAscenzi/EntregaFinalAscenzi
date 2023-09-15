import cart from "./assets/cart.png"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export function CartWidget () {
    const valorDelContexto = useContext(CartContext)
    return ( 
        <NavLink to="/carrito">
            <img src={cart} width="20" height="20" alt="cart-widget"/>
            <span>{valorDelContexto.cantidadTotal}</span>
        </NavLink>
    )
}