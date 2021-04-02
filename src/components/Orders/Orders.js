import React, { useEffect, useState } from 'react';
import './Orders.css';
import { Table } from 'react-bootstrap';

const Orders = () => {
   const [orderInfo, setOrderInfo] = useState([]);
      useEffect(() => {
        fetch(`http://localhost:5500/orders`)
            .then(res => res.json())
            .then(data => {
                setOrderInfo(data)
            })
    }, []);
    return (
        <div className="container">
            
           <div className="order-page text-center">
           <h4>Yah...! Your order has been placed successfully.</h4>
           {
               orderInfo.map(order =>(

                <form className='checkout-form'>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Order Time</th>
                    <th>Customer Name</th>
                    <th>Product Name</th>
                    <th>Wight</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>{order.orderTime}</td>
                    <td>{order.name}</td>
                    <td>{order.shipment.name}</td>
                    <td>{order.shipment.wight} gm</td>
                    <td>{order.shipment.price} tk</td>
                    </tr>
                </tbody>
                </Table>
                </form>

               ))
           }
           </div>
        </div>
    );
};

export default Orders;