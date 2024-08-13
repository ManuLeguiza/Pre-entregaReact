import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
  const {qtyitems} = useCartContext()

  return (
    <div>🛒 {qtyitems}</div>
  )
}


export default CartWidget