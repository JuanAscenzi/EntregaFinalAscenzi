import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from './CartWidget/CartWidget'


export function NavBar() {
  return (
    <nav className='NavBar'>
      <CartWidget/>
      <Link to ='/'>
        <h3>Todos los productos</h3>
      </Link>
      <NavDropdown className='Categories'>
        <NavDropdown.Item as='span'><Link to={`/category/rubia`} className={({ isActive }) => isActive ? 'ActiveOption' : Option}>Cervezas Rubias</Link></NavDropdown.Item>
        <hr />
        <NavDropdown.Item as='span'><NavLink to={`/category/negra`} className={({ isActive }) => isActive ? 'ActiveOption' : Option}>Cervezas Negra</NavLink></NavDropdown.Item>
        <hr />
        <NavDropdown.Item as='span'><Link to={`/category/roja`} className={({ isActive }) => isActive ? 'ActiveOption' : Option}>Cervezas Rojas</Link></NavDropdown.Item> 
      </NavDropdown>
      
    </nav>

  )
}