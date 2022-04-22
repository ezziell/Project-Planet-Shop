import React from 'react';
import OrderItem from './OrderItem';
import useGetProducts from '../hooks/useGetProducts';
import "../styles/Chart.scss";

const api = "https://fakestoreapi.com/products";

const Chart = () => {
    const products = useGetProducts(api);

    fetch(api)
    .then(res=>res.json())
    .then(data=> {
             console.log(data)
    })
    return(
        <body>
                                <div className='products-container-chart'>
                        <div className='order-products'>
                        {products.map(product => (
                       <OrderItem  product={product} key={product.id} /> 
                    ))}
                     </div>
                     </div>
        </body>
    );
}

export default Chart;