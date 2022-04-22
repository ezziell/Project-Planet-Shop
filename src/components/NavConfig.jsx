import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavConfig.scss";

const NavConfig = () => {
    return(
        
            <div className='config-container'>
            <div className='bar-left'>
                    <h3>Configuración</h3>
                <ul>
                        <Link to="/MyAccount" style={{textDecoration: 'none'}}>
                       <li>Cuenta</li>     
                        </Link>
                        <Link to="/Pedidos" style={{textDecoration: 'none'}}>
                     <li>Pedidos</li>       
                        </Link>
                    <Link to="/ShoppingChart" style={{textDecoration: 'none'}}>
                      <li>Mi carrito</li>   
                    </Link>
                </ul>
                </div>
                </div>
        
    );
}

export default NavConfig;