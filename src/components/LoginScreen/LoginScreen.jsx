import { useContext, useState } from "react"
import "./LoginScreen.scss"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import google from '../../assets/google.png'

const LoginScreen = () =>{
    const { login, loginWithGoogle } = useContext(AuthContext)

    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values);
    }

    return(
        <div className="login">
            <div className="login-container">
                <h2>Iniciar Sesion</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email}
                        type="email" 
                        className="form-control my-2" 
                        placeholder="Email" 
                        name="email"
                        onChange={handleInput}
                    />

                    <input 
                        value={values.password}
                        type="password" 
                        className="form-control my-2" 
                        placeholder="Contraseña" 
                        name="password"
                        onChange={handleInput}
                    />
                    <div className="botones">
                        <button className="btn btn-primary boton" type="submit">Iniciar</button>
                        <Link to="/register">¿No tienes una cuenta? Registrate</Link>
                        <button className="btn btn-primary boton" onClick={loginWithGoogle}><img src={google} alt="google" className="google"/>Iniciar con google</button>
                    </div>                   
                </form>
            </div>
        </div>
    )
        
}

export default LoginScreen