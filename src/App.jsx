import "./App.css";
// import Navbar from "./components/Navbar/Navbar.jsx";

import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Layout from "./pages/Layout.jsx";

function App() {
  const title = "HOTD DRAGONS";

  return (
    <>
      <Layout>
        <ItemListContainer title={title} />
      </Layout>
      {/* <Navbar categories={categories} title="HOTD DRAGONS" /> */}
    </>
    
  );
}

export default App;
