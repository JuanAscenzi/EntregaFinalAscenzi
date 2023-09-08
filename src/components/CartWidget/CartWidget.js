import cart from "./assets/cart.png"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "../MiContexto"

export const CartWidget = () => {
    const valorDelContexto = useContext(contexto)
    return (
        <NavLink to="/carrito">
            <img src={cart} width="20" height="20" alt="cart-widget"/>
            <span>{valorDelContexto.cantidadTotal}</span>
        </NavLink>
    )
}