import React  from 'react';
import "../styles/ProductItem.scss";


const ProductItem = ({product}) => {
    return(
        
            <div className='ProductItem'>
                <section>
                    <figure id='picture'>
                        <img 
                        src={product.image} 
                        alt={product.title} />
                        <hr />
                    </figure>
                    <p className='category' id='category'>{product.category}</p>
                    <h3 className='title' id='titulo'>{product.title}</h3>
                    <p className='price'id='price'>${product.price}</p>                
                </section>
                <figure className='carro'>
                <img 
                    src='https://i.imgur.com/lpegO6s.jpg'
                    alt='añadir al carrito' />
                </figure>
            </div>
        
    );
}

export default ProductItem;