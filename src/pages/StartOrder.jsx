import React from 'react';
import OrderBackround from '../containers/OrderBackround';
import Chart from "../components/Chart";
import "../styles/StartOrder.scss";
import { Link } from 'react-router-dom';

const StartOrder = () => {
    return(
        <body>
            <div className='start-order-container'>
        <OrderBackround />
        <div className='chart-container1'>
         <div className='start-order'>
            <Chart />
        </div>   
        </div>   
            </div>
        
        </body>
    );
}

export default StartOrder;
