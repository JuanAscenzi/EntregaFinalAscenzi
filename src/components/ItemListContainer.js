import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../asyncMock"
import { ItemList } from "./ItemList"
import { db } from "../db/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import { toast } from "sonner"
import { CartContext } from "../context/CartContext"

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const { cart } = useContext(CartContext)

    useEffect(() => {

        const productosCollection = collection(db, "productos")
        const filtroConsulta = query(productosCollection, where("category","==","rubia"))
        const laConsulta = getDocs(filtroConsulta)
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        toast.promise(laConsulta, {
            loading: "Cargando...",
            success: (resultado) => {

                const aux = resultado.docs.map((doc) => {
                    const producto = doc.data()
                    producto.id = doc.id
                    return producto
                })

                setData(aux)

                return "Se cargaron los productos"
            },
            error: (error) => {
                console.log(error)
                alert("Hubo un error al cargar los productos")
            }
        })

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)             
            })
            .finally(()=> setLoading(false))
    },[categoryId])

    console.log(cart)
    
    return (
        <div className="d-flex flex-column align-items-center">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
            
        </div>
    )
}