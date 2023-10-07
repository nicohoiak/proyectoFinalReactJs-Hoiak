import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget =() => {
    
    const {totalQuantity } = useContext(CartContext)
    
    return (
        <div>
            <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}></Link>
            <img scr={cart} alt="cart-widget"/>
            { totalQuantity}
        </div>
    )
}

export default CartWidget