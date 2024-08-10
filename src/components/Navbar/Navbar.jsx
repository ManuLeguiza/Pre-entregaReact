/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.scss";
import NavbarLink from "./NavbarLink";
import logo from "../../assets/logotargaryan.jpeg"
import { categories } from "../../mock/mockData.js";

const Navbar = ({ title}) => {
    return(
        <nav>
        <div className="Logoprincipal">
          <img src={logo} alt="logo targaryan" />
          <h1>{title}</h1>
        </div>
        <div className="navItems">
          {categories.map((element, index) => {
            console.log ("recorriendo la posicion ${index} del array")
            return <NavbarLink key={index} category={element} />
          })}

        </div>
        <CartWidget/> 


        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"> {categories[0]}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{categories[1]}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{categories[2]}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{categories[3]}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> {categories[4]}</a>
        </li>
      </ul>
    </div>
  </div>
  
</nav> */}

        </nav>
    )
}

export default Navbar;