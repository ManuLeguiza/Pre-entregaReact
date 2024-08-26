/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.scss"
import NavbarLink from "./NavbarLink"
import logo from "../../assets/logotargaryan.jpeg"
import { categories } from "../../mock/mockData.js"
import { Link } from "react-router-dom"

const Navbar = ({ title }) => {
    return(
        <nav className="Navbar">
            <div className="Logoprincipal">
              <Link to="/">
                <img src={logo} alt="logo targaryan" />
              </Link>
              <h1>{title}HOTD DRAGONS</h1>
            </div>
            <div className="navItems">
              {categories.map((element, index) => {
                console.log ("recorriendo la posicion ${index} del array")
                  return <NavbarLink key={index} category={element} />
              })}
              <CartWidget/> 
            </div>
            
        </nav>
    )
}

export default Navbar