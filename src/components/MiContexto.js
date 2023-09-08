import { createContext } from "react"

export const contexto = createContext()
const Provider = contexto.Provider


export function MiCustomProvider(props) {
  const valorDelContexto = {
    carrito : [],
    montoFinal : 0,
    cantidadTotal : 21,
  }
  return (
    <Provider value={valorDelContexto}>
        {props.children}
    </Provider>
  )
}

