/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ categories, title}) => {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
</nav>
<CartWidget/> 

        {/* <div>
            <h1>{title}</h1>
        </div>
        <div>
        <a href="#"> {categories[0]}</a>
        <a href="#"> {categories[1]}</a>
        <a href="#"> {categories[2]}</a>
        <a href="#"> {categories[3]}</a>
        <a href="#"> {categories[4]}</a>
        </div>
        <CartWidget/> */}
        </>
    )
}

export default Navbar;