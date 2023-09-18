import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar =() => {
    return(
        <nav>
            <Link to='/'>
            <h3>Compupartes</h3>
            </Link>
            <div>
                <NavLink to ={`/category/computadoras`}>computadoras</NavLink>
                <NavLink to ={`/category/procesadores`}>procesadores</NavLink>
                <NavLink to ={`/category/placasdevideo`}>placasdevideo</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar