import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/error.scss";

const Error404 = () => {
    return(
        <body>
            <div className='errorcontainer'>
               <h1>404</h1>
               <p className='perror'>Parece que ocurrió un error. La página que usted busca no existe</p>
              <Link to="/">
               <button type='button' className='botonerror'>
                   VOLVER AL INICIO
                   </button>
                   </Link>
            </div>
        </body>
    );
}

export default Error404;