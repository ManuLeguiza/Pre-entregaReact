/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Item from "../Item/Item"
import styles from "./ItemList.module.scss"

const ItemList = ({products}) => {
  return (
    <>
    <div className={`${styles.container} d-flex`}>
    {products.map((product) => {
      return <Item key={product.id} product={product}></Item>
})}
    </div>
    </>

  )
}



export default ItemList