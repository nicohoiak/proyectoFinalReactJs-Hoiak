import { useState } from 'react'

/* const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity (quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity (quantity-1)
        }
    }
    return(
        <div>
            <div>
            <button onClick={decrement}>-</button>
            <h4>{quantity}</h4>
            <button onClick={increment}>+</button>
            </div>
            <div>
            <button onClick={()=> onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
            </div>
        </div>
)
}
 */

const ItemCount = ({ inicial, stock, adicion }) => {
    const [cantidad, setCantidad] = useState(inicial);

    const suma = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const resta = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div>
            <div>
                <button onClick={resta}>
                    -
                </button>
                <h3>{cantidad}</h3>
                <button onClick={suma}>
                    +
                </button>
            </div>
            <div>
                <button
                    onClick={() => adicion(cantidad)}
                    disable={cantidad === 0}
                >
                    {" "}
                    Comprar
                </button>
            </div>
        </div>
    );
};


export default ItemCount