import React from 'react'
import { Link } from 'react-router-dom'


export function Presentacional(props) {
    return(
        <section className='card shadow-md p-4 rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {props.data.length === 0 ? <p>"cargando..."</p> : props.data.map((item,i)=>{
            return (
                <article key={i} className='card shadow-md p-4 rounded-md duration-300 transition hover:scale-110'>
                    <h2 className='overflow-hidden text-ellipsis truncate'>{item.title} - ${item.price}</h2>
                    <img alt={item.title} className="h-[200px]" width="100" height="100" src={item.image}/>
                     <Link to={`/item/${item.id}`}> Ver detalle</Link>
                </article>
            )
            })}
        </section>
      )
}