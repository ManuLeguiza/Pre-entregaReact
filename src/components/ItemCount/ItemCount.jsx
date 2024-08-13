/* eslint-disable react/prop-types */
import { useState } from "react"
import Button  from "react-bootstrap/Button"

const ItemCount = ({stock, initial, handleOnBuy}) => {
    const [qty, setQty] = useState(initial)
   
    
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
    }
    return (
        <>
        <div>
            <button onClick={HandleClickMenos}>-</button>
            <span>{qty}</span>
            <button onClick={HandleClickMas}>+</button>
            <h1>Item Count</h1>
        </div>
        <Button variant="primary" onClick={handleAddToCart}>Add to cart</Button>
        </>
    )
}

export default ItemCount