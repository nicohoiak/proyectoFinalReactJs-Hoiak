import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState (initial)

    const aumentar = () => {
        if(cantidad < stock) {
            setCantidad (cantidad + 1)
        }
    }
    const disminuir = () => {
        if (cantidad > 1) {
            setCantidad (cantidad - 1)
        }
    }
}

return(
    <div>
        <div>
            <button onClick={disminuir}>-</button>
            <h4>{cantidad}</h4>
            <button onClick={aumentar}>+</button>
        </div>
        <div>
            <button onClick={()=> onAdd(cantidad)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    </div>
)

export default ItemCount