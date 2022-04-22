import React from 'react';
import practica from "../styles/practica.scss";


const Practica = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> {
                let element = document.getElementById("imprimir")
                element.innerHTML = data[0].title;  
            })



    return(
        <body>
            <div id='imprimir'>hola</div>
        </body>
    );
}

export default Practica