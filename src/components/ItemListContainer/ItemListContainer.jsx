import { useEffect } from 'react'
import { useState } from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        // 1.- Armar una referencia (sync)
        const productosRef = collection(db, "productos")
        // 2.- Consumir esa referencia (async)
        getDocs(productosRef)
            .then((res) => {
                console.log(res.docs);
                /* const docs = res.docs.map((doc) => doc.id) */
                /* setProductos(docs) */
            })
            /* .catch(e=> console.log(e)) */

    }, [categoryId])




    return(
        <div className="list__container">
            <h2>El Conde Computación</h2>
            <hr />

            <div className='container my-5'>
                <ItemList items={productos} />
            </div>

        </div>
    )
}