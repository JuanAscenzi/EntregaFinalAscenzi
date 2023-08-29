import React from 'react'

export function Presentacional(props) {
    return(
        <section>
          {props.data.length === 0 ? <p>"cargando..."</p> : props.data.map((item,i)=>{
            return (
                <article key={i} className='card shadow-md p-4 rounded-md'>
                    <h2 className='h-28'>{item.title} - ${item.price}</h2>
                    <img alt="something" width="100" height="100" src={item.image}/>
                </article>
            )
            })}
        </section>
      )
}