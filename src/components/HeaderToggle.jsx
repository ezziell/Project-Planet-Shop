import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/HeaderToggle.scss";

const HeaderToggle = () => {
    return(
        <div className='toggle-container'>
                <div className='picture'>
                 <figure>
                    <img src='https://images.pexels.com/photos/7656456/pexels-photo-7656456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                     alt='profile picture' />
                     <hr />
                </figure>                   
                </div>
                <div className='header'>
                <Link to="/MyAccount" style={{textDecoration: 'none'}}>
                    <p>Lorem Ipsum</p>
                </Link>
                    <p>Example street 0202</p>
                    <p>loremipsum@email.com</p>
                </div>
                <div className='information'>
                      <h3>Configuración</h3>    
                <Link to="/MyAccount" style={{textDecoration: 'none'}}>  
                    <p>Cuenta</p>
                </Link>
                <Link to="/Pedidos" style={{textDecoration: 'none'}}>
                    <p>Pedidos</p>
                </Link>
                <Link to="/ShoppingChart" style={{textDecoration: 'none'}}>
                     <p>Mi carrito</p>
                </Link>                 
                </div>
                <footer>
                    Cerrar sesión
                </footer>
        </div>
    );
}

export default HeaderToggle;