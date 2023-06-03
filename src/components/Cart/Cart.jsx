import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"


const Cart = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)

    return(
        <div className="m-5">
            <h2>Tu compra</h2>
            <hr />

            {
                cart.map ((item) => (
                    <div key={item.id}>
                        <h5>{item.nombre}</h5>
                        <img className="item" src={item.img} alt={item.nombre} />
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Subtotal: ${item.cantidad * item.precio}</p>
                        <button onClick={() => removeItem(item.id)} className="btn btn-secondary"><FaTrashAlt/></button>
                        <hr />
                    </div>
                ))
            }

            <div>
                <h4>Total: ${totalCompra()}</h4>
                <button onClick={emptyCart} className="btn btn-danger">Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart