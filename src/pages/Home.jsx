import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.scss";

const Home = () => {
    return(
     <body>
         <div className='container'>
             <span>CUIDAR EL </span>  
             <span>MEDIOAMBIENTE</span>
             <span>NUNCA FUE TAN FÁCIL</span>     
             <button>
                 <Link to="/AboutUs">
                 <a href='/'>
                 ¿QUIENES SOMOS?
                 </a>
                 </Link>
             </button>   
             </div>
     </body>
     
    );
}

export default Home;