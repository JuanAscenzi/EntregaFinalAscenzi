import cart from "./assets/cart.png"
import { NavLink } from "react-router-dom"

export const CartWidget = () => {
    return (
        <NavLink to="/carrito">
            <img src={cart} width="20" height="20" alt="cart-widget"/>21
        </NavLink>
    )
}