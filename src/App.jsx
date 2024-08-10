import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Contact from "./components/Contact/Contact.jsx";
// import Navbar from "./components/Navbar/Navbar.jsx";

import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Layout from "./pages/Layout.jsx";
import Error404 from "./components/Error404/Error404.jsx";

function App() {
  const title = "HOTD DRAGONS";

  return (
    <>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer title={title} />}/>
          <Route path="/home" element={<ItemListContainer title={title} />}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
      {/* <Navbar categories={categories} title="HOTD DRAGONS" /> */}
    </>
    
  );
}

export default App;
