/* eslint-disable react/prop-types */
import styles from "./Item.module.scss"

const Item = ({product}) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{product.name}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.price}>{product.price}</div>
      <img src={product.image} alt="" />
    </div>
  )
}

export default Item