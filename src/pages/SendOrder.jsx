import React from 'react';
import OrderBackround from '../containers/OrderBackround';
import "../styles/SendOrder.scss";

const SendOrder = () => {
    return(
        <body>
            <OrderBackround />
            <div className='formulario-envio'>
            <form action='/'>
                <label for="name" className='name-label'>Nombre</label>
                <input type="name" />
                <label for="surname" className='surname-label'>Apellido</label>
                <input type="surname" />
                <label for="phone" className='phone-label'>Celular/Telefono</label>
                <input type="number" />
                <label for="email" className='email-label'>Email</label>
                <input type="email" />
                <label for="provincia" className='provincia-label'>Provincia</label>
                <select name="Provincia" form="provincias">
                <option>Buenos Aires</option>
                <option>Catamarca</option>
                <option>Chaco</option>
                <option>Chubut</option>
                <option>Córdoba</option>
                <option>Corrientes</option>
                <option>Entre Ríos</option>
                <option>Formosa</option>
                <option>Jujuy</option>
                <option>La Pampa</option>
                <option>La Rioja</option>
                <option>Mendoza</option>
                <option>Misiones</option>
                <option>Neuquén</option>
                <option>Río Negro</option>
                <option>Salta</option>
                <option>San Juan</option>
                <option>San Luis</option>
                <option>Santa Cruz</option>
                <option>Santa Fé</option>
                <option>Santiago del Estero</option>
                <option>Tierra del fuego</option>
                <option>Tucumán</option>
                </select>
                <label for="City" className='ciudad-label'>Ciudad</label>
                 <select name='ciudades' className='form-control'>
                     <option>Buenos Aires</option>
                     <option>Junín</option>
                     <option>Rosario</option>
                     <option>Córdoba</option>
                     <option>Pergamino</option>
                 </select>
                <label for="Direccion" className='direccion-label'>Dirección</label>
                <input type="text" className='direccion-input' />
                <label for="postal" className='postal-label'>Código postal</label>
                <input type="number" className='postal-input' />
            </form>
            </div>
        </body>
    );
}

export default SendOrder;