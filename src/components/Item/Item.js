import { Link } from "react-router-dom"

/* const Item = ({id, name, img, price, stock}) => {
    return(
        //CARDS
        <article>
            <header>
                <h2> {name} </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p> Precio ${price}</p>
                <p> Stock: {stock}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver detalles</Link>
            </footer>
        </article>
    )
} */

const Item = ({ nombre, id, img, precio, stock }) => {
    return (
        <div>
            <article>
                <header>
                    <h2>{nombre}</h2>
                </header>
                <picture>
                    <img src={img} alt={nombre}/>
                </picture>
                <section>
                    <p>Precio: ${precio}</p>
                    <p>Stock Disponible: {stock}</p>
                </section>
                <footer>
                    <Link to={`/item/${id}`}>
                        Ver Mas{" "}
                    </Link>
                </footer>
            </article>
        </div>
    );
};
export default Item;