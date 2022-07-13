import React from 'react';
import "../styles/OrderItem.scss";

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json)) 

const OrderItem = ({product}) => {

    return(
        <body>
            <div className='item-container'>
                <div className='item-image'>
                    <figure>
                        <img src='https://images.pexels.com/photos/21614/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='/' />
                    </figure>
                </div>
                <div className='item-info'>
                    <p>{product.title}</p>
                    <span className='talle-order-p'>Talle s, </span>
                    <span className='color-order-p'>color rojo</span>
                </div>
            </div>
        </body>
    );
}

export default OrderItem;