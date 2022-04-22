import React from 'react';
import "../styles/Contact.scss";

const Contact = () => {
    return(
            <div className='contenedor'>
            <div className='imagen'>
             <figure>
                 <img 
                 src='https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' 
                 alt='oficina' />
             </figure>
            </div>
            <div className='info'>
                <header>
                <h1>Contactenos</h1>
                <p>
                    Comuniquese con nosotros para donar, ayudar o para formar parte del equipo
                </p>
                <h2>Información</h2>
                </header>
                <form action='/' className='contacto'>
                    <label for="name">Nombre</label>
                    <p>Lorem Ipsum</p>
                    <label for="email">Email</label>
                    <p>emailexample@email.com</p>
                </form>
                <form action='/' className='message'>
                    <label for="text">Mensaje</label>
                    <input type="text" className='escribe' placeholder='Escribenos un mensaje' />
                    <input type="submit" className='enviar' placeholder='Enviar mensaje' />
                </form>
            </div>
            </div>
    );
}

export default Contact