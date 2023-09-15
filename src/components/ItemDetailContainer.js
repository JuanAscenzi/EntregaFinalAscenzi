import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../asyncMock'
import { ItemDetail } from './ItemDetail'
// import { db } from '../db/firebase'
// import { collection, getDoc, doc } from 'firebase/firestore'


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams() 
    

    useEffect(() => {
        // const productosCollection = collection(db, "productos")
        // const referenciaDelDocumento = doc(productosCollection, params.id)
        // const consulta = getDOc(referenciaDelDocumento)
        getProductById(itemId)
            .then(response =>{
                setProduct(response)
            })
            .catch(error =>{ 
                console.error(error);
            })
    },[itemId])
      
    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}
