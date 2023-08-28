import React, { useState } from "react";

function ItemCount() {
    let [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1); 
        console.log(contador); 
    }

    const restar = () => {
        setContador(contador - 1); 
        console.log(contador); 
    }

    return (
        <>
            <button variant="primery" className="p-4" onClick={sumar}>+</button>
            <p> {contador} </p>
            <button variant="primery" className="p-4" onClick={restar}>-</button>
        </>
    )
}

export default ItemCount;