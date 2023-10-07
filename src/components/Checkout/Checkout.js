import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from "react";
import { db } from '../../Services/firebase'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value

        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name && !user.phone) {
            alert('datos obligatorios')
        } else {
            let order = {
                user,
                item: cart,
                total: total,
                date: serverTimestamp()
            }
            const ventas = collection(db, 'orders')
            addDoc(ventas, order)
                .then((res) => {
                    setOrderId(res.id)
                    clearCart()
                })
                .catch((error) => console.log(error))
        }
    }
    return (
        <div>
            {orderId !== ''
                ? <div>
                    <h2>Gracias por tu compra</h2>
                    <h5>Su id de registro es: {orderId}</h5>
                </div>
                :
                <div>
                    <h2>Terminar compra</h2>
                    <h5>Por favor completar datos</h5>
                    <form onSubmit={finalizarCompra}>
                        <div>
                            <label>Nombre Completo</label>
                            <input onChange={datosComprador} type='text' placeholder="Nombre y Apellido" name='name' />
                        </div>
                        <div>
                            <label>Numero de telefono</label>
                            <input onChange={datosComprador} type='number' placeholder="+5195151516" name='phone' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input onChange={datosComprador} type='email' placeholder="email@email.com" name='mail' />
                        </div>
                        <div>
                            <label>Repita Email</label>
                            <input type='email' placeholder="email@email.com" name='mail' onChange={((e) => setValidateEmail(e.target.value))} />
                        </div>
                        <button type='submit' disabled={validateEmail !== user.mail}>Generar compra</button>
                    </form>
                </div>}
        </div>
    )
}

export default Checkout