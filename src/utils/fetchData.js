import { items } from "../mock/mockData"

export const getProducts = (category) => {
    let filteredItems = [...items]
    if (category){
        filteredItems = items.filter((item) =>
        item.category.includes(category)
    )
    }  

    return new Promise ((resolve, reject) => {
        if (items.length > 0) {
            setTimeout(() => {
                resolve(filteredItems)

            }, 2000 )
            
        } else {
            reject("No hay mas productos")
        }
    })
}
    
