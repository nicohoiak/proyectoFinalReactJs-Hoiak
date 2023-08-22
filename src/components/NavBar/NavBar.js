import CartWidget from "../CartWidget/CartWidget"

const NavBar =() => {
    return(
        <nav>
            <h3>Compupartes</h3>
            <div>
                <button>Computadoras</button>
                <button>Procesadores</button>
                <button>Placas de video</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar