import React from 'react';
import OrderBackround from '../containers/OrderBackround';
import "../styles/PayOrder.scss";

const PayOrder = () => {
    return(
        <body>
            <OrderBackround />
            <div className='pay-order-container'>
                <div className='card-images'>
                    <button className='visa'>
                        <img src='https://i.imgur.com/wNajg8H.jpg' alt='visa card'/>
                    </button>
                    <button className='cabal'>
                        <img src='https://i.imgur.com/YYmQYUm.jpg' alt='cabal card'/>
                    </button>
                    <button className='paypal'>
                        <img src='https://i.imgur.com/mRdTEdr.jpg' alt='paypalcard'/>
                    </button>
                </div>
                <div className='payment-info'>
                    <form action='/'>
                        <label className='titual-label'>Nombre del titular</label>
                        <input type="name" className="titular-input" />
                        <label className='number-label'>Número de tarjeta</label>
                        <input type="number" className="number-input" />
                        <label className='fecha-label'>Fecha de caducidad</label>
                        <input type="month" className='mes-input' />
                        <label type="number" className="cvv-label">CVV</label>
                        <input type="number" className='cvv-input' />
                    </form>
                </div>
            </div>
        </body>
    );
}

export default PayOrder;