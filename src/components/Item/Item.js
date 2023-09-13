const Item = ({id, name, img, price, stock}) => {
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
                <Link to={`/item/${id}`}>Ver detalles</link>
            </footer>
        </article>
    )
}

export default Item