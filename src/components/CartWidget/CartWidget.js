import cart from "./assets/cart.png";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Badge } from "react-bootstrap";

export function CartWidget() {
    const { cantidadTotal } = useContext(CartContext);
    return (
        <NavLink to='/carrito'>
            <Badge>{cantidadTotal()}</Badge>
            <img src={cart} width='20' height='20' alt='cart-widget' />
        </NavLink>
    );
}