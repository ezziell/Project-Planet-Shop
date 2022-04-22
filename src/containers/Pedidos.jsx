import React from 'react';
import NavConfig from '../components/NavConfig';
import useGetProducts from '../hooks/useGetProducts';
import OrderItem from '../components/OrderItem';
import "../styles/Pedidos.scss";

const api = "https://fakestoreapi.com/products";
const Pedidos = () => {
    const products = useGetProducts(api);

    fetch(api)
    .then(res=>res.json())
    .then(data=> {
             console.log(data)
    })
    return(
        <body>
            <div className='shopping-container'>
                <div className='navbar-config'>
                    <NavConfig />
                </div>
                <div className='shopping-order'>
                    <h3>Pedidos</h3>
                    <span className='orden-date'>Orden hecha:</span>
                    <span className='date-day'>1/1/1</span>
                    <span className='arrive'>Llegada estimada:</span>
                    <span className='arrive-day'>12 de agosto /22</span>
                    <hr className='pre-container'/>
                    <div className='products-container'>
                        <div className='order-products'>
                        {products.map(product => (
                       <OrderItem  product={product} key={product.id} /> 
                    ))}
                     </div>
                    </div>
                <hr className='final'/>
                 <div className='shopping-total'>
                 <div className='pay-method'>
                     <p>Metodos de pago</p>
                 </div>
                 <div className='shipping'>
                     <p>Envío</p>
                     <p>Dirección</p>
                     <p>calle example</p>
                     <p>edificio "Example"</p>
                     <p>202</p>
                 </div>
                </div>
               
                </div>
            </div>
        </body>
    );
}

export default Pedidos;