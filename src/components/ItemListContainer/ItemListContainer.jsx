/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { useCartContext } from "../../context/CartContext"
import { useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.scss"
import { getProducts } from "../../utils/fetchData"
import { useParams } from "react-router-dom"
import { Spinner } from "../Spinner/Spinner"


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams ()
    const [loading, setLoading] = useState(true)
    const {titulo} = useCartContext()
    

    useEffect(() => {
        console.log("se esta montando el componente")
        setLoading(true)
        getProducts(categoryId)
            .then((res) => {
            console.log("se ejecuto la promesa")
            setProducts(res)
            console.log("se actualizaron los productos")
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("Finalizo la promesa")
        setLoading(false)
    })
    return () => {
        console.log("se desmonto el componente")
    }
    },[categoryId])

    
return (
    <main>
        {console.log("renderizo el componente")}
        <div className={styles.container}> 
            <div>{titulo}</div>
             { loading
                ? <Spinner/>
                : <ItemList products={products}/> }    
        </div> 
    </main>
)
}

export default ItemListContainer