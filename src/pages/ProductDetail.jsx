import React from 'react';
import "../styles/ProductDetail.scss";

const ProductDetail = () => {
    return(
        <body>
            <div className='product-detail-container'>
                <div className='detail-header'>
                <h3 className='detail-category'>Categoria</h3>
                <p className='detail-title'>Título del producto</p>
                <p className='detail-price'>$00,00</p>
                <p className='detail-description'>Descrpición del producto</p>
                </div>
                <div className='detail-picture'>
                    <figure>
                        <img src='https://images.pexels.com/photos/21614/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='/' />
                    </figure>
                </div>
                <div className='button-detail'>
                <button type='submit' className='detail-button'>Añadir al carrito</button>
                </div>
            </div>
        </body>
    );
}

export default ProductDetail;