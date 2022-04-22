import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/SignUp.scss";

const SignUp = () => {
    return(
        <div className='sesion'>
         <h1>Inicia sesión</h1>
         <form action='/'>
             <input type="email" id='email' placeholder='Escribe aquí tu email' />
             <input type="name" id='name' placeholder='Nombre' />
             <input type="password" id='password' placeholder='Contraseña' />
             <Link to="/MyAccount">
              <input type="submit" value="Inicia sesión" className="button" />   
             </Link>
         </form>
         <span>¿Aún no tienes cuenta?</span>
         <span> .</span>
        <Link to="/SignIn"><span className='registrate'>Registrate</span></Link>                   
      </div>
    );
}

export default SignUp;