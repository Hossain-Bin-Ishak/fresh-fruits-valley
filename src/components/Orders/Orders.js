import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const { orderId } = useParams();
   const [orderInfo, setOrderInfo] = useState([]);
      useEffect(() => {
        fetch(`http://localhost:5500/orders`)
            .then(res => res.json())
            .then(data => {
                setOrderInfo(data)
            })
    }, []);
    return (
        <div>
           {
               orderInfo.map(order =>(<li>{order.name}{order.shipment.name}</li>))
           }
        </div>
    );
};

export default Orders;