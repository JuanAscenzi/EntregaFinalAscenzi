import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Presentacional } from "./Presentacional"


export function Container() {
  
  const [ data, setData ] = useState([])
  const resultado = useParams()
  return(
    <Presentacional data={data}/>
  )
}
