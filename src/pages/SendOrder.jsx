import React from 'react';
import ProgressBar from "../components/ProgressBar";
import OrderBackround from '../containers/OrderBackround';
import "../styles/SendOrder.scss";

const SendOrder = () => {
    return(
        <body>
            <OrderBackround />
            <div className='formulario-envio'>
            <form action='/'>
                <label for="name">Nombre</label>
                <input type="name" />
                <label for="surname">Apellido</label>
                <input type="surname" />
                <label for="phone">Celular/Telefono</label>
                <input type="tel" />
                <label for="email">Email</label>
                <input type="email" />
                <label for="provincia">Provincia</label>
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
                <label for="City">Ciudad</label>
                 <select name='Ciudades' form='ciudades'>
                     aca va la API
                 </select>
                <label for="Direccion">Dirección</label>
                <input type="text" className='direccion-input' />
                <label for="postal">Código postal</label>
                <input type="number" className='postal-input' />
            </form>
            </div>
        </body>
    );
}

export default SendOrder;