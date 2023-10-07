import React from 'react'
import { useContext } from 'react'
import { CartContext} from '../../context/CartContext'

const CartItem = ({item}) =>{
    const {removeItem} = useContext(CartContext)
return (
    <div>
        <img src= {item.img} alt= {item.name}></img>
        <p>{item.name}</p>
        <p>Cantidad :{item.quantity}</p>
        <p>SubTotal : ${item.quantity * item.price}</p>
        <button onClick={()=>removeItem}>Vaciar Carrito</button>
    </div>
    
)
}

export default CartItem