import { useState } from "react"

const ItemCount = () => {
    const [qty, setQty] = useState(1)
   
    
    const HandleClickMenos = () => {
        setQty(qty - 1)
        console.log(qty)
    }
    const HandleClickMas = () => {
        setQty(qty + 1)
        console.log(qty)
    }
    return (
        <div>
            <button onClick={HandleClickMenos}>-</button>
            <span>{qty}</span>
            <button onClick={HandleClickMas}>+</button>
            <h1>Item Count</h1>
        </div>
    )
}

export default ItemCount