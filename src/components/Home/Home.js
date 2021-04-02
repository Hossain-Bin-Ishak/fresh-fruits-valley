import React, { useEffect, useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fresh-fruits-valley.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
            <div className="content-area">
                <div className="row">

                    {
                        products.length === 0 && <img style={{ margin: '0 auto' }} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/afb8cb36197347.5713616457ee5.gif" alt="spinner" />
                    }

                    {
                        products.map(product => <ProductDetail product={product}></ProductDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;