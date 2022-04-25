import React from 'react';
import "../styles/MiniOrder.scss";

const MiniOrder = () => {
    return(
        <body>
            <div className='mini-contaier'>
                <div className='mini-item-container'>
                <div className='mini-item-image'>
                    <figure>
                        <img src='https://images.pexels.com/photos/21614/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='/' />
                    </figure>
                </div>
                <div className='mini-item-info'>
                    <p>Velas eco-friendly</p>
                    <span className='talle-mini'>Talle s, </span>
                    <span className='color-mini'>color rojo</span>
                </div>
            </div>
            </div>
        </body>
    );
}

export default MiniOrder;