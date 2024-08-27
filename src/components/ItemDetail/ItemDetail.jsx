/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from '../../context/CartContext';
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({product}) => {
  const {id, name, description, price, image, stock} = product;
  const {addToCart} = useCartContext();

  const handleOnBuy = (qty) => {
    console.log(`Se agregaron ${qty} productos al carrito`);
    const item = {id, name, description, price, image, stock};
    addToCart(item, qty);
  }

  return (
    <div className={styles.itemDetailContainer}>
      <Card className={`${styles.itemCard} text-center`}>
        <Card.Header> <h1 className={styles.titleH}>{name}</h1></Card.Header>
        <Card.Body className={styles.cardBody}>
          <Card.Img className={styles.cardImage} variant="top" src={image} />
          <Card.Title> <h1 className={styles.price}>${price}</h1></Card.Title>
          <Card.Text className={styles.text}>{description}</Card.Text>
          <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy} />
        </Card.Body>
        <Card.Footer className="text-muted">Solo quedan {stock}</Card.Footer>
      </Card>
    </div>
  );
}

export default ItemDetail;


// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import ItemCount from "../ItemCount/ItemCount"
// import { useCartContext } from '../../context/CartContext'
// import styles from "./ItemDetail.module.scss"


// const ItemDetail = ({product}) => {
//   const {id, name, description, price, image, stock} = product

//   const {addToCart} = useCartContext()

//   const handleOnBuy = (qty) => {
//     console.log("se agregaron ${qty} productos al carrito")
//     const item = {id, name, description, price, image, stock}
//     addToCart(item, qty)
//   }
//     return (
//         <Card className="text-center">
//         <Card.Header >{name}</Card.Header>
//         <Card.Body className={styles.cardBody}>
//         <Card.Img variant="top" src={image}/>
//           <Card.Title>${price}</Card.Title>
//           <Card.Text>
//             {description}
//           </Card.Text>
//           <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy} />
//         </Card.Body>
//         <Card.Footer className="text-muted">solo quedan {stock}</Card.Footer>
//       </Card>
//     )
// }
// export default ItemDetail