import React from 'react'
import { Link } from 'react-router-dom'

export function Presentacional(props) {
    return(
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {props.data.length === 0 ? <p>"cargando..."</p> : props.data.map((item,i)=>{
            return (
                <article key={i} className='card shadow-md p-4 rounded-md'>
                    <h2 className='h-28'>{item.title} - ${item.price}</h2>
                    <img alt="something" width="100" height="100" src={item.image}/>
                     <Link to={`/item/${item.id}`}> Ver detalle</Link>
                </article>
            )
            })}
        </section>
      )
}