import React, { useEffect, useState } from 'react';
import './Orders.css';
import { Table } from 'react-bootstrap';

const Orders = () => {
    const [orderInfo, setOrderInfo] = useState([]);
    useEffect(() => {
        fetch(`https://fresh-fruits-valley.herokuapp.com/orders`)
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
                    orderInfo.map(order => (

                        <form className='checkout-form'>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Order Time & Date</th>
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
                {
                    orderInfo.length === 0 && <img style={{ margin: '0 auto' }} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/afb8cb36197347.5713616457ee5.gif" alt="spinner" />
                }
            </div>
        </div>
    );
};

export default Orders;