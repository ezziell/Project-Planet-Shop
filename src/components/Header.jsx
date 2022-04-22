import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderToggle from './HeaderToggle';
import "../styles/Header.scss";


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return(
    <body>
        <nav>
                <div className='navbar-left'>
            <ul>
                <li>
                    <Link to="/"><a href='/'>Inicio</a></Link> 
                </li>
                <li>
                    <Link to="/AboutUs"><a href='/'>Nosotros</a></Link>
                </li>
                <li>
                    <Link to="/ProductList"><a href='/'>Shop</a></Link>
                </li>
                <li>
                   <Link to="/Contact"><a href='/'>Contacto</a></Link>
                </li>
            </ul>
        </div>
        <div className='navbar-right'>
                <ul>
                    <li>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                    </li>
                    <li className="flecha" onClick={handleToggle}>
                        My account
                    </li>
                </ul>
            </div>
            <div className='edit-toggle'>
              {toggle && <HeaderToggle />}  
            </div>
        </nav>
    </body>
    );
}

export default Header;