/* eslint-disable react/prop-types */
import { useState } from "react"
import Button  from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"

const ItemCount = ({stock, initial, handleOnBuy}) => {
    const navigate = useNavigate()
    const [qty, setQty] = useState(initial)
    const [itemAdded, setItemAdded] = useState(false)
    
    const HandleClickMenos = () => {
        if (qty === 1){
            alert("No se puede seleccionar menos de un producto")
            return
        }
        setQty(qty - 1)
        console.log(qty)
    }
    const HandleClickMas = () => {
        if (qty === stock){
            alert("No hay mas stock")
            return
        }
        setQty(qty + 1)
        console.log(qty)
    }

    const handleAddToCart = () => {
        handleOnBuy(qty)
        setItemAdded(true)
    }
    const handleGoToCheckout = () => {
        navigate("/cart")
        setItemAdded(false)
    }
    return (
        <>
        {itemAdded ? (
            <Button variant="primary" onClick={handleGoToCheckout}>Checkout</Button>
        ) : (
            <>
            <div>
                  <button onClick={HandleClickMenos}>-</button>
                  <span>{qty}</span>
                  <button onClick={HandleClickMas}>+</button>
            </div>
            <Button variant="primary" onClick={handleAddToCart}>Add to cart</Button>
            </>
        )}
        </>
    )
}

export default ItemCount