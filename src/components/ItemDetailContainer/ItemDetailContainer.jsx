import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading,setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
     
        const docRef = doc(db, "productos", itemId) 

        getDoc(docRef)
            .then((doc) => {
                const _item = {
                    id: doc.id,
                    ...doc.data()
                }
                setItem(_item)
            })
            .catch(e => console.log(e))

    }, [itemId])

    return (
        <div className="container my-5">
            {loading ? <h1>Loading...</h1> 
            : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer