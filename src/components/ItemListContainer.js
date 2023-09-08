import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../asyncMock"
import { ItemList } from "./ItemList"

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)             
            })
            .finally(()=> setLoading(false))
    },[categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            { loading ? <h2>Cargando</h2> : <ItemList products={products}/> }
            
        </div>
    )
}