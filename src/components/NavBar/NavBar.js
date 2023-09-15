import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar =() => {
    return(
        <nav>
            <Link to='/'>
            <h3>Compupartes</h3>
            </Link>
            <div>
                <NavLink to ={`/category/Computadoras`}>computadoras</NavLink>
                <NavLink to ={`/category/Procesadores`}>procesadores</NavLink>
                <NavLink to ={`/category/PlacasDeVideo`}>placasdevideo</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar