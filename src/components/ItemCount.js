// import React, { useState, useContext} from "react";
// import { contexto } from "./MiContexto";
import React, { useState } from "react";
import { Button } from 'react-bootstrap'

export const ItemCount = ({stock, onAdd, initial}) => {
    let [contador, setContador] = useState(initial)
    
    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }

    const resetear = () => setContador(0)

 return (
    <div className="d-flex flex-column align-items-center justify-content-between">
        <div>
            <Button variant='dark' onClick={restar}>-</Button>
            <span className="btn">{contador}</span>
            <Button variant='dark' onClick={sumar}>+</Button>
            <Button variant='dark' onClick={resetear}>Reseteo</Button>
        </div>
        <Button variant='dark' disabled={contador === 0} onClick={()=>onAdd(contador)}>Comprar</Button>
    </div>
 )}