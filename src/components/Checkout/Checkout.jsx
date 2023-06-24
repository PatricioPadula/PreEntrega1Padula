import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, Navigate } from "react-router-dom";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config";


const Checkout = () => {
    const { cart, totalCantidad, emptyCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const [orderId, setOrderId] = useState(null)

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,

        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const { nombre, direccion, email } = values

        if(nombre.length < 3){
            alert("el nombre demasiado corto")
            return
        }
        if(direccion.length < 3){
            alert("dirección invalida")
            return
        }
        if(email.length < 3){
            alert("email invalido")
            return
        }
        
        const orden = {
            client: values,
            items: cart.map(item => ({id: item.id, nombre: item.nombre, cantidad: item.cantidad})),
            total: totalCantidad(),
            fyh: new Date()
        }

        orden.items.forEach((item) => {
            const itemRef = doc(db, "productos", item.id)

            getDoc(itemRef)
                .then((doc) => {
                    if(doc.data().stock >= item.cantidad){
                        updateDoc(itemRef,{
                            stock: doc.data().stock - item.cantidad,
                        })
                    }else{
                        alert("No hay stock de " + item.nombre)
                    }

                })
        });

        const ordersRef = collection(db,"orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })

    }

    if (orderId){
        return(
            <div className="text-center my-5">
                <h2>Tu compra se registo exitosamente!</h2>
                <hr />
                <p>Guarda tu número de orden: {orderId}</p>

                <Link to="/" >Volver</Link>
            </div>
        )
    }

    if(cart.length === 0){
        alert("no hay productos en el carrito")
        return <Navigate to="/" />
    }

    return(
        <div className="m-5">
            <h2 className="text-center">Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control my-2" placeholder="Nombre" value={values.nombre} name="nombre" onChange={handleInput}/>
                <input type="text" className="form-control my-2" placeholder="Dirección" value={values.direccion} name="direccion" onChange={handleInput}/>
                <input type="email" className="form-control my-2" placeholder="Email" value={values.email} name="email" onChange={handleInput}/>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>

        </div>
    )
}

export default Checkout