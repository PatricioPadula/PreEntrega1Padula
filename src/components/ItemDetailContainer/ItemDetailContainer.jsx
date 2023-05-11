import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading,setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
     
        pedirDatos()
            .then((data) => {
                setItem( data.find((el) => el.id === Number(itemId)) )
                setLoading(false)
            })
            .catch(err => console.log(err))

            

    }, [itemId])

    return (
        <div className="container my-5">
            {loading ? <h1>Loading...</h1> 
            : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer