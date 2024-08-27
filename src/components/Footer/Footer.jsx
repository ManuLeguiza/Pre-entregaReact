import { items } from "../../mock/mockData"
import { db } from "../../firebase/dbConnection"
import { collection, addDoc } from "firebase/firestore"
import Button from 'react-bootstrap/Button'


const Footer = () => {
    const addProducts = () =>{
        const productsCollection = collection(db, "productos")

        items.forEach((item) => {
            addDoc(productsCollection, item)
            .then(doc =>{
                console.log("Producto agregado con ID: ", doc.id)
            })
            .catch(error => {
                console.log("Error al agregar el producto: ", error)})
        })
    }
    return (
    <footer>
        <Button variant="warning" onClick={addProducts}>agregar productos de datos</Button>
    </footer>
    )
}

export default Footer