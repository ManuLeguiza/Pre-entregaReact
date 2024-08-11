/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import {NavLink} from "react-router-dom"

const NavbarLink = ({ category }) => {
    return (
        <NavLink to={`/categorias/${category}`} className="navItem">
            {category}
        </NavLink>
    )
}

export default NavbarLink