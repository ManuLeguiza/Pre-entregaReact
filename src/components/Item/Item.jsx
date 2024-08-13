/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  product.isStar = true
  return (
      <Card style={{width: "300px", height: "500px"}} className="m-2">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link to={`/product/${product.id}`}>
          <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">${product.price}</small>
        </Card.Footer>
      </Card>
  )
}

export default Item