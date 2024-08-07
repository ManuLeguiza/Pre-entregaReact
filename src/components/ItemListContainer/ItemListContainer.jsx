/* eslint-disable react/prop-types */
/* eslint-disable no-undef */


import { useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.scss"
import { getProducts } from "../../utils/fetchData"

const ItemListContainer = ({ title }) => {
    const [products, setProducts] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [cat, setCat] = useState ("Grandes")
    

    useEffect(() => {
        console.log("se esta montando el componente")
        getProducts(cat)
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
    })
    },[cat])

    
return (
    <>
    <div className={styles.container}> 
    <div>{title}</div>
    <ItemList products={products}/>
    </div>
    <button onClick={()=> setCat("Gigantes")}>Set Cat - Gigantes</button>
    <button onClick={()=> setCat("Medianos")}>Set Cat - Medianos</button>
    <button onClick={()=> setCat("Jovenes")}>Set Cat - Jovenes</button>
    <button onClick={()=> setCat("Grandes")}>Set Cat - Grandes</button>

    </>
)
}

export default ItemListContainer