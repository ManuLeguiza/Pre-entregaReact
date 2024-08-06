import { items } from "../mock/mockData"

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        if (items.length > 0) {
            setTimeout(() => {
                resolve(items)

            }, 2000 )
            
        } else {
            reject("No hay mas productos")
        }
    })
}