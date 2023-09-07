import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer'

export function Main() {
 
    const [show,setShow] = useState(false)

    const toogleMenu = () => {
      setShow(!show)
    }
  if (show) {
    return (
      <main className='p-2 grow'> 
        <button onClick={toogleMenu} className='border p-1 roudned'>Abrir catálogo</button>

      </main>

    )
  } else {
  return (
    <main className='p-2 grow'> 
        <button onClick={toogleMenu} className='border p-1 roudned'>Toogle menu</button>

        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/*" element={<h1>404 ERROR NOT FOUND</h1>}/>
          <Route path="/carrito" element={<p>Carrito</p>} />
        </Routes>

    </main>
  )
 }
}  