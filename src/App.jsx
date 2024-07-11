import "./App.css"
import Navbar from "./components/Navbar/Navbar.jsx"
import { categories } from "./mock/mockData.js"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {
  const title = "HOTD DRAGONS"

  return (
    <>
    <Navbar categories={categories} title= "LOGO"/>
  <ItemListContainer title={title}/>
    </>
  );
}

export default App
