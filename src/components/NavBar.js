import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from './CartWidget/CartWidget'


export function NavBar() {
  return (
    <nav className='NavBar'>
      <Link to ='/'>
        <h3>Todos los productos</h3>
      </Link>
    
      <div className='Categories'>
        <NavLink to={`/category/:rubia`} className={({ isActive }) => isActive ? 'ActiveOption' : Option}>Cervezas Rubias</NavLink>
        <NavLink to={`/category/:negra`} className={({ isActive }) => isActive ? 'ActiveOption' : Option}>Cervezas Negra</NavLink>
        <NavLink to={`/category/:roja`} className={({ isActive }) => isActive ? 'ActiveOption' : Option}>Cervezas Rojas</NavLink>
        <CartWidget/> 
      </div>
    </nav>

  )
}