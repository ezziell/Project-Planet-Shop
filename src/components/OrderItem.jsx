import React from 'react';
import "../styles/OrderItem.scss";

const OrderItem = () => {
    return(
        <body>
            <div className='item-container'>
                <div className='item-image'>
                    <figure>
                        <img src='https://images.pexels.com/photos/21614/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='/' />
                    </figure>
                </div>
                <div className='item-info'>
                    <p>Velas eco-friendly</p>
                    <span className='talle-order-p'>Talle s, </span>
                    <span className='color-order-p'>color rojo</span>
                </div>
            </div>
        </body>
    );
}

export default OrderItem;