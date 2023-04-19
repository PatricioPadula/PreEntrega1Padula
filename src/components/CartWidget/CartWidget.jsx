import './CartWidget.scss'
import logo from '../../assets/carrito.png'

const CartWidget = () =>{

    return(
        <div className='container'>
            <img src={logo} alt='carrito' className='carrito'/>
            <span className='span-numero'>0</span>
        </div>
    )
}

export default CartWidget