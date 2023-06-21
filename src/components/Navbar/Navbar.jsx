import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export const Navbar = () =>{

    const { user, logout } = useContext(AuthContext)

    return(
        <header className="header">
            <div className="header__container">
                <Link to='/'><img src={logo} alt='LOGO' className="logo"/></Link>
                
                <nav className="navegacion">
                    <Link to='/' className="navegacion__link">Inicio</Link>
                    <Link to='/productos/perifericos' className="navegacion__link">Periféricos</Link>
                    <Link to='/productos/celulares' className="navegacion__link">Celulares</Link>
                    <Link to='/productos/cables' className="navegacion__link">Cables</Link>
                    <Link to='/productos/computacion' className="navegacion__link">Computación</Link>
                </nav>

                <CartWidget/>
            </div>
            <div className='container'>
                <p className='welcome'>BIENVENIDO {user.email}</p>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
        </header>
    )
}