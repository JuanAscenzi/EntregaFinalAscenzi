import { useState } from 'react'
import { CarritoHijo } from './CarritoHijo'

export function Carrito() {
  
  const [selectedCant, setselectedCant] = useState(0)
  const onAdd = (cantidad) => {
    console.log("Mi callback onAdd")
  }

  return (
    <div>
      <p>Cantidad seleccionada desde Carrito: {selectedCant}

      <CarritoHijo 
        onAdd={onAdd}
      /> 
      </p>Lista carrito actual 
    </div>
    
  )
}