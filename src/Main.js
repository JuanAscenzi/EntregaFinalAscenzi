import React, { useState } from 'react'

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