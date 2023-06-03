import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react"


const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        };

        agregarAlCarrito(newItem)
    }

    return(

            <div className='col-3 mt-5'>
                <h3>{item.nombre}</h3>
                <img className="item" src={item.img} alt={item.nombre} />
                <p>{item.descripcion}</p>
                <p>Precio: ${item.precio}</p>
                <p>Stock: {item.stock}</p>
                <p>Categoria: {item.category}</p>
                <p>Subtotal: {item.precio * cantidad}</p>

                <br />

                {
                    isInCart(item.id)
                        ? <Link className="btn btn-success" to={"/cart"}>Terminar mi compra</Link>
                        : <ItemCount
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            stock={item.stock} 
                            agregar={handleAgregar}
                        />
                }

            </div>

    )

}

export default ItemDetail