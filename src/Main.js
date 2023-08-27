import React, { useState } from 'react'
import { Form } from './components/Form'
import { Container } from './Container'

export function Main() {

    const [show,setShow] = useState(false)

    const toogleMenu = () => {
      setShow(!show)
    }
  if (show) {
    return (
      <main className='p-2 grow'> 
        <button onClick={toogleMenu} className='border p-1 roudned'>Toogle menu</button>
      </main>

    )
  } else {
  return (
    <main className='p-2 grow'> 
        <button onClick={toogleMenu} className='border p-1 roudned'>Toogle menu</button>
        <hr />
        <Form/>
        <Container/>
        <hr />
        <p>Estado: {`${show}`}</p>
        <ul>
            <li>Home</li>
            <li>Productos</li>
            <li>Contacto</li> 
        </ul> 
    </main>
  )
 }
}  