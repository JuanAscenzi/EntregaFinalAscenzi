import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer'
import { Carrito } from "./components/Carrito"
import { Checkout } from './Checkout'

export function Main() {
 
    const [show,setShow] = useState(false)

    const toogleMenu = () => {
      setShow(!show)
    }
  if (show) {
    return (
      <main className='p-2 grow items-centers'> 
        <button onClick={toogleMenu} className='border p-1 roudned'>Abrir catálogo</button>

      </main>

    )
  } else {
  return (
    <main className='p-2 grow'> 
        <button onClick={toogleMenu} className='border p-1 roudned'>Cerrar catálogo</button>

        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/*" element={<h1>404 ERROR NOT FOUND</h1>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>

    </main>
  )
 }
}  