/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import styles from "./Item.module.scss"


const Item = ({product}) => {
  product.isStar = true
  return (
   
    <div className={styles.container}>
      <Card style={{width: "300px",}} className="m-2">
        <Card.Img variant="top" src={product.image} className={styles.img}/>
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.title}>{product.name}</Card.Title>
          <Card.Text className={styles.text}>{product.description}</Card.Text>
          <Link to={`/product/${product.id}`}>
          <Button variant="warning">Details</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">${product.price}</small>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Item