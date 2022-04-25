import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../components/Chart';
import NavConfig from '../components/NavConfig';
import OrderItem from '../components/OrderItem';
import useGetProducts from '../hooks/useGetProducts';
import "../styles/ShoppingChart.scss";

const api = "https://fakestoreapi.com/products";
const ShoppingChart = () => {
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
                <div className='shopping-chart1'>
                    <h3>Mi carrito</h3>
                    <div className='imported-chart'>
                        <Chart />
                    </div>
                <hr />
                 <div className='shopping-total-chart'>
                 <span>Subtotal</span> 
                 <span>$433</span>
                 <br />
                 <span>Envío</span>
                 <span>$123</span>
                 <hr />
                 <span>Total</span>
                 <span>$556</span>
                 <Link to="/StartOrder">
                    <button type='submit' className='order'>Ordenar pedido</button> 
                 </Link>
                </div>
               
                </div>
            </div>
        </body>
    );
}

export default ShoppingChart;