/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { useCartContext } from "../../context/CartContext"
import { useState, useEffect} from "react"
import { db } from "../../firebase/dbConnection"
import { collection, getDocs, query, where} from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.scss"
import { useParams } from "react-router-dom"
import { Spinner } from "../Spinner/Spinner"



const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams ()
    const [loading, setLoading] = useState(true)
    const {titulo} = useCartContext()
    

    useEffect(() => {
        setLoading(true)
        let productsCollection = collection(db, "productos")

        if(categoryId){
            productsCollection= query(productsCollection, where("category", "array-contains", categoryId))}

            getDocs(productsCollection)
            .then(({docs}) => {
             const prodFromDocs = docs.map((doc)=>({
                  id: doc.id,
               ...doc.data()
            }))
            setProducts(prodFromDocs)
            setLoading(false)
            })
            .catch((error) => {
                console.error("Error getting documents:", error)
            })               
    },[categoryId])

    
return (
    <main>
        {console.log("renderizo el componente")}
        <div className={styles.container}> 
            <div>
                {titulo}
                <h1>Bienvenidos a HOTD DRAGONS la mejor tienda online para comprar dragones reales</h1>
            </div>
             { loading
                ? <Spinner/>
                : <ItemList products={products}/> }    
        </div> 
    </main>
)
}

export default ItemListContainer