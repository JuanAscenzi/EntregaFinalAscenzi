import { Link } from "react-router-dom"

export const Item = ({id,name,img,price,stock}) => {

    return(
        <article className="CardItem d-flex flex-column align-items-center">
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
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option"> Ver detalles </Link>
            </footer>
        </article>
    )
}