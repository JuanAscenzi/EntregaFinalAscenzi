import { useState } from 'react'

export function Contador() {

    let [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const resetear = () => {
        setContador(0)
    

  return (
    <main className='p-2 grow'>
        <p>Contador: {contador}</p>
        <button className='border p-1 rounded' onClick={sumar}>Sumar</button>
        <button className='border p-1 rounded' onClick={restar}>Restar</button>
        <button className='border p-1 rounded' onClick={resetear}>Resetear</button>
    </main>
  )
}}