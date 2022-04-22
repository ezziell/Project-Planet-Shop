import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/SignIn.scss";

const SignIn = () => {
    return(
            <div className='registro'>
             <h1>Registrate</h1>
             <form action='/'>
                 <input type="email" id='email' placeholder='Escribe aquí tu email' />
                 <input type="name" id='name' placeholder='Nombre' />
                 <input type="password" id='password' placeholder='Contraseña' />
                 <input type="password" id='repeatpassword' placeholder='Escribe de nuevo tu contraseña' />

                 <Link to="/MyAccount">
                     <input type="submit" value="Registrate" className="button" />
                 </Link>
             </form>
             <span>¿Ya tienes cuenta?</span>
             <span> .</span>
            <Link to="/SignUp"><span className='sesionin'>Inicia Sesión</span></Link>                 
          </div>
    );
}
export default SignIn;