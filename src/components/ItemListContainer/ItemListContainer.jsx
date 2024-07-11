/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ title }) => {
return (
    <>
    <div>{title}</div>
    <ItemList/>
    <ItemCount/>
    </>
)
}

export default ItemListContainer