import React from 'react'
import { useContext } from 'react'
import { CartContext} from '../../context/CartContext'

/* const CartItem = ({item}) =>{
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
} */
const CartItem = ({ item }) => {
  const { deleteItem } = useContext(CartContext);
  return (
    <div>
      <img src={item.img} alt="Imagen producto"/>
      <p>{item.nombre}</p>
      <p>Precio: ${item.precio}</p>
      <p>Cantidad : {item.cantidad}</p>
      <p>Subtotal : $ {item.cantidad * item.precio}</p>
      <button onClick={() => deleteItem(item.id)}>
        {" "}
        X{" "}
      </button>
    </div>
  );
};
export default CartItem;