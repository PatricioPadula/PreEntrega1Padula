import { useEffect } from 'react'
import { useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()
    console.log(categoryId);

    useEffect(() => {

        pedirDatos()
            .then((data) => {
                if(!categoryId) {
                    setProductos(data)
                }else {
                    setProductos(data.filter((el) => el.category === categoryId))
                }
            })
            .catch((err) => console.log(err))
        
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