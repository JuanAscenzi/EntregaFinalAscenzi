import { Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer'
import { CarritoContainer } from "./components/Carrito"
import { Checkout } from './Checkout'


export function Main() {
   
  return (
    <main className='p-2 grow'> 
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/*" element={<h1>404 ERROR NOT FOUND</h1>}/>
          <Route path="/carrito" element={<CarritoContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>

    </main>
  )
 }
