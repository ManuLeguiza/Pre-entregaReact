/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from '../../context/CartContext'


const ItemDetail = ({product}) => {
  const {id, name, description, price, image, stock} = product

  const {addToCart} = useCartContext()

  const handleOnBuy = (qty) => {
    console.log("se agregaron ${qty} productos al carrito")
    const item = {id, name, description, price, image, stock}
    addToCart(item, qty)
  }
    return (
        <Card className="text-center">
        <Card.Header >{name}</Card.Header>
        <Card.Img variant="top" src={image} width={"100px"} />
        <Card.Body>
          <Card.Title>${price}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy} />
        </Card.Body>
        <Card.Footer className="text-muted">solo quedan {stock}</Card.Footer>
      </Card>
    )
}
export default ItemDetail