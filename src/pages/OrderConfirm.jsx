import React from 'react';
import OrderBackround from '../containers/OrderBackround';
import "../styles/OrderConfirm.scss";

const OrderConfirm = () => {
    return(
        <body>
             <OrderBackround />   
            <div className='order-confirm-container'>
                <div className='delivery-div'>
                    <h3 className='envio-h3'>Envío</h3>
                    <div className='elegir-botones'>
                    <button className='delivery-button free'>Envío gratis</button>
                    <button className='delivery-button express'>Envío express</button>
                    </div>
                    <p className='confirm-direc-p'>
                       Calle example
                       Edificio "Example"
                       202
                      </p>
                </div>
                <div className='carrito-confirm'>
                    <h3 className='chart-h3'>Carrito</h3>
                </div>
                <div className='payment-confirm'>
                    <h3 className='payment-h3'>Método de pago</h3>
                    <p className='card-p'>VISA XXXX XXXX XXXX 2193</p>
                </div>
                <div className='total-price-confirm'>
                    <span className='total-confirm'>Precio total</span>
                    <span className='payment-p-confirm'>$1032</span>
                </div>
            </div>
        </body>
    );
}

export default OrderConfirm;