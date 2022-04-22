import React from 'react';
import { Link } from 'react-router-dom';
import NavConfig from '../components/NavConfig';
import "../styles/MyAccount.scss";

const MyAccount = () => {
    return(
             <div className='config-container'>
                <div className='nav'>
                  <NavConfig />       
                </div>
                <div className='bar-right'>
                <header>
                    <p>Cuenta</p>
                    <figure>
                      <img src='https://images.pexels.com/photos/7656456/pexels-photo-7656456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />  
                    </figure>
                    <button>Cambiar</button>
                    <button>Eliminar</button>
                    <p className='border'></p>
                </header>
                <form action='/' className='form'>
                    <label for="email">Email</label>
                    <input type="email" placeholder='loremipsum@mail.com' readOnly/>
                    <label for="phone">Télefono</label>
                    <input type="number" placeholder='########' readOnly/>
                    <label for="nombre">Nombre</label>
                    <input type="text" placeholder='Lorem Ipsum' readOnly/>
                    <label for="direction">Dirección</label>
                    <input type="text" placeholder='Lorem Ipsum 0202' readOnly/>
                    <Link to="/EditAccount">
                    <button type="submit" className='edit'>Editar</button>    
                    </Link>
                </form>
                </div>
            </div>
    );
}

export default MyAccount;