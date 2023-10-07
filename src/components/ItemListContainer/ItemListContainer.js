import { useState, useEffect } from 'react';
import { getProducts, getProductByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../Services/firebase'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const { categoryId } = useParams()

    /*  useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        setLoading(true)
        setError("")
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
                setError(error)
            })
            .finally(()=>setLoading(false))
    }, [categoryId]) */

    useEffect (() => {
        setLoading(true)

        const collectionRef =categoryId
        ? query(collection(db, 'products'), where ('category', '==', categoryId))
        : collection(db, 'products')
        
        getDocs (collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()
                return {id: products.id , ...data}
            })
            setProducts(productsAdapted)
        })
        .catch (error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    
}, [categoryId])
        

    if(loading)return<h1>Loading...</h1>
    if(error)return<h1>Se ha producido un error: {error}</h1>
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer