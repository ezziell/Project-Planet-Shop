import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import MiniOrder from "./MiniOrder";
import "../styles/ChartOrder.scss";

const api = "https://fakestoreapi.com/products";

const ChartOrder = () => {
    const products = useGetProducts(api);

    fetch(api)
    .then(res=>res.json())
    .then(data=> {
             console.log(data)
    })
    return(
        <body>
        <div className='chart-mini-order'>
        <div className='mini-container-chart'>
                        <div className='mini-products'>
                        {products.map(product => (
                       <MiniOrder  product={product} key={product.id} /> 
                    ))}
                     </div>
                     </div>
        </div>
        </body>
    );
}

export default ChartOrder;