import React, { useState, useContext} from "react";
import { contexto } from "./MiContexto";
function ItemCount() {
    let [contador, setContador] = useState(0)
    useContext(contexto )

    const sumar = () => setContador(contador + 1)

    const restar = () => setContador(contador - 1) 

    const resetear = () => setContador(0)
 return (
     <main className="p-2 grow">
            <p>En el carrito: {contador} </p>
            <button className="border p-1 rounded" variant="primery"  onClick={sumar}>+</button>
            <button className="border p-1 rounded" variant="primery"  onClick={restar}>-</button>
            <button className="border p-1 rounded" variant="primery"  onClick={resetear}>Reseteo</button>
        </main>
    )
}

export default ItemCount;