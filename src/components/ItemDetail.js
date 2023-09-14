import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

export const ItemDetail = ({name, category, quantity, stock, img, description}) => {
    // const [quantityAdded, setQuantityAdded] = useState(0)
    // const { addItem } = useContext(CartContext)

    // const handelOnAdd = (quantity) =>{
    //     setQuantityAdded(quantity)

    //     const item = {
    //         name, price
    //     }
    //     addItem(item, quantity)
    // }

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada")}/>
            </footer>
        </article>
    ) 
}