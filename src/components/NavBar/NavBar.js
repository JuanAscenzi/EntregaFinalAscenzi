import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

export function NavBar() {
  return (
    <nav>
        <h3>Ecommerce</h3>
          <nav>
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
          </nav>
          <CartWidget/>
    </nav>
    
  )
}
