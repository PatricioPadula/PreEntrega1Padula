import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    const { itemId } = useParams()
    console.log(itemId);
    console.log(item);

    useEffect(() => {
     
        pedirDatos()
            .then((data) => setItem( data.find((el) => el.id === Number(itemId)) ))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className="container my-5">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer