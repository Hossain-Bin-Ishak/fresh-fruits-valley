import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import './Checkout.css';
import { UserContext } from '../../App';

const Checkout = () => {
    const { productId } = useParams();
   const [productInfo, setProductInfo] = useState({});
   const {name, wight, price} = productInfo;
    useEffect(() => {
        fetch(`http://localhost:5500/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProductInfo(data)
            })
    }, []);


    const { handleSubmit } = useForm();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/orders" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        console.log('form submitted', data)
        const orderDetails = {...loggedInUser, shipment: productInfo, orderTime: new Date() };
        console.log(orderDetails);
        fetch('http://localhost:5500/addOrder', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data){
            alert('Your order placed successfully');
            history.replace(from);
          }
        })

    };
    const history = useHistory();
    const handlePlaceOrder = (orderId) => {
        const url = `/order/${orderId}`;
        history.push(url);
        
     }

    return (
        <div className="container text-center">
            <div className="checkout-form-area">
            <form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Fruits Name</th>
                    <th>Wight</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>{name}</td>
                    <td>{wight} gm</td>
                    <td>{price} tk</td>
                    </tr>
                </tbody>
                </Table>
              <input type="submit" value='Place Order' className="btn btn-success float-right"/>
                </form>
            </div>
        </div>
    );
};

export default Checkout;