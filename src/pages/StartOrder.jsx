import React from 'react';
import OrderBackround from '../containers/OrderBackround';
import ProgressBar from '../components/ProgressBar';
import Chart from "../components/Chart";
import "../styles/StartOrder.scss";
import { Link } from 'react-router-dom';

const StartOrder = () => {
    return(
        <body>
        <OrderBackround />
        <div className='bar-container'>
            <ProgressBar />
        </div>
        <div className='start-order'>
            <Chart />
        </div>
        </body>
    );
}

export default StartOrder;
