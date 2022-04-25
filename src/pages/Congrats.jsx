import React from 'react';
import { Link } from 'react-router-dom';
import OrderBackround from '../containers/OrderBackround';
import "../styles/Congrats.scss";

const Congrats = () => {
    return(
        <body>
            <OrderBackround />
            <div className='congrats-order'>
                <figure className='check-mark'>
                    <img src='https://i.imgur.com/N3oCbmr.png' alt="check-mark" />
                </figure>
                <header className='congrats-header'>
                    <h3 className='congrats-title'>Felicidades. Tu order fue aceptada</h3>
                    <p className='congrats-p'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, facere!
                        </p>
                </header>
                <Link to="/Pedidos">
                <button className='congrats-btn'>Seguir pedido</button>
                </Link>
            </div>
        </body>
    );
}

export default Congrats;