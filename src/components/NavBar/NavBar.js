import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar =() => {
    return(
        <nav>
            <Link to='/'>
            <h3>Compupartes</h3>
            </Link>
            <div>
                <NavLink to ={`/category/Computadoras`}>Computadoras</NavLink>
                <NavLink to ={`/category/Procesadores`}>Procesadores</NavLink>
                <NavLink to ={`/category/PlacasDeVideo`}>Placas de Video</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar