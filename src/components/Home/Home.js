import React, { useEffect, useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5500/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
       <div className="container">
            <div className="row">
            {
                products.map(product => <ProductDetail product={product}></ProductDetail>)
            }
        </div>
       </div>
    );
};

export default Home;