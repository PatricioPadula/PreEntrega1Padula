import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'

export const Navbar = () =>{

    return(
        <header className="header">
            <div className="header__container">
                <img src='./src/assets/logo.png' className="logo"/>
                
                <nav className="navbar">
                    <p className="navbar__link">Reparaciones</p>
                    <p className="navbar__link">Productos</p>
                    <p className="navbar__link">Servicio</p>
                    <p className="navbar__link">Contacto</p>
                </nav>

                <CartWidget/>
            </div>
        </header>
    )
}