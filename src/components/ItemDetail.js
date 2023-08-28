export const ItemDetail = ({name, category, img, description}) => {
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
            </section>
            <footer className="ItemFooter">
                {/* <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada");}/> */}
            </footer>
        </article>
    )
}