import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, getDoc, doc } from 'firebase/firestore'
import { db } from '../../Services/firebase'


/* const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState (true)

    const { itemId } = useParams(null)

    useEffect (() =>{
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc (docRef)
        .then (response =>{
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct (productAdapted)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(() => {
        setLoading(false)
        })
}, [itemId])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
} */

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const { itemId } = useParams();

    useEffect(() => {
        const collectionProduct = collection(db, "productos");
        const referenciaDoc = doc(collectionProduct, itemId);
        getDoc(referenciaDoc)
            .then((res) => setProduct({ id: res.id, ...res.data() }))
            .catch((error) => console.log(error));
    }, []);
    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
};
export default ItemDetailContainer;