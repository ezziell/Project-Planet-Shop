import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import ProductDetail from '../pages/ProductDetail';
import "../styles/ProductList.scss";

const api = "https://fakestoreapi.com/products";
const ProductList = () => {
    const products = useGetProducts(api);

    fetch(api)
    .then(res=>res.json())
    .then(data=> {
             console.log(data)
    })
  
    return(
            <div className='all-container'>
                <div className='space'>
                    <header>
                        <h1>Nuestros productos</h1>
                        <p>Con tu compra ayudás al medioambiente</p>
                    </header>
                    <ul>
                        <li>PLANTAS</li>
                        <li>MANUALIDADES</li>
                        <li>HIERBAS</li>
                        <li>VELAS</li>
                    </ul>
                </div>

                <div className='product-click'>
                    <Link to="/ProductDetail" style={{textDecoration: 'none'}}>
                <div className='ProductList'>
                    {products.map(product => (
                       <ProductItem   product={product} key={product.id} /> 
                    ))}
                </div>
                </Link>
                </div>
            </div>
    );
}

export default ProductList;