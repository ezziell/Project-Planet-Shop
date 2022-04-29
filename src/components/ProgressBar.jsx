import React from 'react';
import SendOrder from '../pages/SendOrder';
import StartOrder from '../pages/StartOrder';
import PayOrder from "../pages/PayOrder";
import OrderConfirm from "../pages/OrderConfirm";
import "../styles/ProgressBar.scss";

const ProgressBar = () => {
    
    return(
        <body>
        <form action='#' className='form'>
        <div className='height-of-progress'>

           <div className='progress-back'>
                <div className='progressbar'></div>
                <div className='progress' id='progress'></div>
                 </div>
           <div 
                className='progress-step progress-step-active' 
                data-title='intro'>
                </div>
                <div className='progress-step' data-title='delivery'></div>
                <div className='progress-step' data-title='payment'></div>
                <div className='progress-step' data-title='confirmation'></div>
            </div>
            <div className='progressbar-information'>
                <p className='form-p form-p-active'>Editar pedido</p>
                <p className='form-p'>Envío</p>
                <p className='form-p'>Método de pago</p>
                <p className='form-p'>Confirmación</p>
            </div>

            <div className='progress-pictures'>
                <img src='https://i.imgur.com/tL9U90L.png' />
                <img src='https://i.imgur.com/8DPXmXz.png' />
                <img src='https://i.imgur.com/pPQAk05.png' />
                <img src='https://i.imgur.com/Vt7hW83.png' />
            </div>


            <div class="form-step form-step-active">
                <div className='edit-order-div'>
                     <StartOrder /> 
                </div>
                    <div className='btns-group1'>
                    <a href="#" className="btn btn-prev">Volver</a>
                    <a href="#" className="btn btn-next">Siguiente</a>
                </div>


                <div class="form-step">
                <div className='edit-envio-div'>
                  <SendOrder />
                </div>
                <div className='btns-group2'>
                    <a href="#" className="btn btn-prev">Volver</a>
                    <a href="#" className="btn btn-next">Siguiente</a>
                </div>
                </div>

                <div class="form-step">
                <div className='edit-payment-div'>
                   <PayOrder />
                </div>
                <div className='btns-group3'>
                    <a href="#" className="btn btn-prev">Volver</a>
                    <a href="#" className="btn btn-next">Siguiente</a>
                </div>
                </div>

                <div class="form-step">
                <div className='confirmation-div'>
                   <OrderConfirm />
                </div>
                <div className='btns-group4'>
                    <a href="#" className="btn btn-prev">Volver</a>
                    <a href="#" className="btn-1 btn-next">Siguiente</a>
                </div>
            </div>
            </div>
        </form>
        </body>
    );
}

export default ProgressBar