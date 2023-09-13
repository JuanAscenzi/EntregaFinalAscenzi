import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import data from "./seedData.json"

const productosCollection = collection(db, "productos")

data.forEach((producto) =>{
    addDoc(productosCollection, producto)
   
})