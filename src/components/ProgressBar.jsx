import React from 'react';
import StartOrder from '../pages/StartOrder';
import "../styles/ProgressBar.scss";

const ProgressBar = () => {
    return(
        <body>
        <form action='#' className='form'>
            <div className='form-step form-step-active'>
                <div className='edit-order-div'>
                <StartOrder />
                </div>
                <div className='btns-group'>
                    <a href="#" className="btn btn-back">Volver</a>
                    <a href="#" className="btn btn-next">Siguiente</a>
                </div>
            </div>
            <div className='form-step form-step-active'>
                <div className='edit-envio-div'>

                </div>
                <div className='btns-group'>
                    <a href="#" className="btn btn-back">Volver</a>
                    <a href="#" className="btn btn-next">Siguiente</a>
                </div>
            </div>
            <div className='form-step form-step-active'>
                <div className='edit-payment-div'>

                </div>
                <div className='btns-group'>
                    <a href="#" className="btn btn-back">Volver</a>
                    <a href="#" className="btn btn-next">Siguiente</a>
                </div>
            </div>
            <div className='form-step form-step-active'>
                <div className='confirmation-div'>

                </div>
                <div className='btns-group'>
                    <a href="#" className="btn btn-back">Volver</a>
                    <a href="#" className="btn btn-next">Siguiente</a>
                </div>
            </div>
            
        </form>
        </body>
    );
}

export default ProgressBar