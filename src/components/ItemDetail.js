import { useState, useContext } from "react";
import { ItemCount } from "./ItemCount"
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({name, category, stock, img, description, price, id}) => {
    const [quantityAdded, setQuantityAdded] = useState('')
    const producto = { name, price, id }
    const { addItem } = useContext(CartContext)
    const onAdd = (quantity) => {
        setQuantityAdded(quantity)
        addItem(producto, quantity)
    }
    
    return(
    
        <div className="d-flex flex-column align-items-center">
            <article className="CardItem">
                <header className="Header d-flex flex-column align-items-center">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <picture className="d-flex flex-column align-items-center">
                    <img src={img} alt={name} className="ItemImg"/>
                </picture>
                <section className="d-flex flex-column align-items-center">
                    <p className="Info">
                        Categoria: {category}
                    </p>
                    <p className="Info">
                        Descripcion: {description}
                    </p>
                    <p className="Info">
                        Stock actualizado: {stock}
                    </p>
                </section>
                <footer className="ItemFooter">
                    { quantityAdded === '' ? <ItemCount initial={1} stock={stock} onAdd={onAdd}/> :
                    <Link to='/carrito' className="btn btn-dark d-flex flex-column align-items-center">Ir al checkout</Link>}
                </footer>
            </article>
        </div>
    )
} 