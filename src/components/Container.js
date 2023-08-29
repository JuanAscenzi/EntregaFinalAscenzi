import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Presentacional } from "./Presentacional"


export function Container() {
  
  const [ data, setData ] = useState([])
  const resultado = useParams()
  
  
  useEffect(() => {
    
    getProductos()
    if(resultado.id){
      console.log("Estoy en la ruta categorias" + resultado.id)
    }else{
      console.log("Estoy en Home")
    }
    
  },[resultado.id])
  

  return(
    <Presentacional data={data}/>
  )
}
