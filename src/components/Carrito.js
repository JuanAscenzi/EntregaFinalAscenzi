import React from 'react'
import CarritoHijo from './CarritoHijo'

function Carrito() {
  
  const miCallback = () => {
    console.log("Mi CallBack");
  }

  return (
    <div>
      
      <CarritoHijo miCallback={miCallback}/> 
    </div>
    
  )
}

export default Carrito