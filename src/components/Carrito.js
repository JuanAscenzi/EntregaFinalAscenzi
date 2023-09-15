import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'

export function CarritoContainer() {
  
  const { cart, deleteItem } = useContext(CartContext)

  return (
    <div>
      {cart.length === 0 && 
        <div>
          <p>Carrito vacio!</p>
          <Link to='/'>Volver a Home</Link>
        </div>
      }
      {(cart.length > 0) && cart.map(item => <CartItem key={item.id} product={item} deleteItem={deleteItem} /> )}
    </div>
    
  )
}