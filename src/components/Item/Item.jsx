/* eslint-disable react/prop-types */
// import styles from "./Item.module.scss"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const Item = ({product}) => {
  return (
    <CardGroup>
      <Card style={{width: "19rem"}} className="m-2">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">${product.price}</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    // <div className={styles.container}>
    //   <div className={styles.name}>{product.name}</div>
    //   <div className={styles.description}>{product.description}</div>
    //   <div className={styles.price}>{product.price}</div>
    //   <img src={product.image} alt="" />
    // </div>
  )
}

export default Item