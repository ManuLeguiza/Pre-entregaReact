import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider from "./context/CartContext.jsx"
import "./App.css"
import AboutUs from "./components/AboutUs/AboutUs.jsx"
import Contact from "./components/Contact/Contact.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Layout from "./pages/Layout.jsx"
import Error404 from "./components/Error404/Error404.jsx"
import Cart from "./components/Cart/Cart.jsx"

function App() {
  const title = "HOTD DRAGONS"

  return (
    <CartContextProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer title={title} />}/>
          <Route path="/categorias/:categoryId" element={<ItemListContainer title={title} />}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
    </CartContextProvider>
    
  )
}

export default App
