import React from 'react'
import { useRef } from 'react'

export function Form() {

const nombreRef = useRef(null)
const apellidoRef = useRef(null)

const handleClick = () => {
    console.log(nombreRef.current.value)
    console.log(apellidoRef.current.value)
}

  return (
    <div>
        <input ref={nombreRef} type="text" placeholder="Ej: Horacio" id="nombre"/>
        <input ref={apellidoRef} type="text" placeholder="Ej: Gutierrez" id="apellido"/>
        <button onClick={handleClick}>Ver valor en consola</button>
    </div>
  )
}

