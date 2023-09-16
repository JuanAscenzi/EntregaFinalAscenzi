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
          <br /><br /><br />
          <h4 className='d-flex flex-column align-items-center'>El carrito esta vacio</h4>
          <Link className='d-flex flex-column align-items-center' to='/'>Volver a Home</Link>
        </div>
      }
      {(cart.length > 0) && cart.map(item => <CartItem key={item.id} product={item} deleteItem={deleteItem}/>)}
    </div>
    
  )
}