import React from 'react';
import NavConfig from '../components/NavConfig';
import "../styles/EditAccount.scss";

const EditAccount = () => {
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
                    <input type="email" defaultValue={'loremipsum@email.com'} />
                    <label for="phone">Télefono</label>
                    <input type="number" defaultValue={'2222222'}/>
                    <label for="nombre">Nombre</label>
                    <input type="text" defaultValue={'Lorem Ipsum'} />
                    <label for="direction">Dirección</label>
                    <input type="text" defaultValue={'Lorem Ipsum 0202'}/>
                    <button type="submit" className='save'>Guardar</button>
                </form>
                </div>
            </div>
    );
}

export default EditAccount;