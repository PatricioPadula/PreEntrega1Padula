import { useEffect } from 'react'
import { useState } from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef       

        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return{
                        ...doc.data(),
                        id: doc.id
                    }
                })

                setProductos(docs)
            })
            .catch(e=> console.log(e))

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