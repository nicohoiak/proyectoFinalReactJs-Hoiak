import { useState, useEffect } from 'react'
import {getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    const { itemId } = useState(null)

    useEffect(() => {
        getProductById (itemId)
            .then (response =>{
            setProduct(response)
            })
            .catch(error => {
            console.error(error)
            })
    },  [itemId])

    return (
        <div>
            <itemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer