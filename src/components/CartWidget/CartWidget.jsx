import './CartWidget.scss'
import logo from '../../assets/carrito.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () =>{
    const { totalCantidad } = useContext(CartContext)

    return(
        <Link to={"/cart"} className='container link'>
            <img src={logo} alt='carrito' className='carrito'/>
            <span className='span-numero'>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget