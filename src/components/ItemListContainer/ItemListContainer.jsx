/* eslint-disable react/prop-types */
/* eslint-disable no-undef */


import { useState} from "react"
import ItemList from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.scss"
import { getProducts } from "../../utils/fetchData"

const ItemListContainer = ({ title }) => {
    const [products, setProducts] =useState([])

    useEffect(() => {
        console.log("se esta montando el componente")
        getProducts()
            .then((res) => {
            console.log("se ejecuto la promesa")
            setProducts(res)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("Finalizo la promesa")
    })
    },[])

    
return (
    <>
    <div className={styles.container}> 
    <div>{title}</div>
    <ItemList products={products}/>
    </div>
    <button>Set Cat - grass</button>
    <button>Set Cat - fire</button>

    </>
)
}

export default ItemListContainer