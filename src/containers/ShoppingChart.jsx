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
                <hr className='chart-hr-1'/>
                 <div className='shopping-total-chart'>
                 <span className='subtotal'>Subtotal</span> 
                 <span className='chart-price'>$433</span>
                 <br />
                 <span className='chart-send'>Envío</span>
                 <span className='send-price'>$123</span>
                 <hr className='chart-hr-2'/>
                </div>
                <div className='chart-total-div'>
                 <span className='chart-total'>Total</span>
                 <span className='chart-total-price'>$556</span>
                 </div>
                <Link to="/StartOrder">
                    <button type='submit' className='order-chart'>Ordenar pedido</button> 
                 </Link>
                </div>
            </div>
        </body>
    );
}

export default ShoppingChart;