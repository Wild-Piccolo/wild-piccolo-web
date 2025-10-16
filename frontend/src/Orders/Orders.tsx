import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

export default function Orders() {
  return (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Orders</h3>
      </div>

      <div className="order-list">
        <table className="table">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Delivered</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td>{order.user.name}</td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? `Yes (${order.paidAt})` : 'No'}</td>
                <td>{order.isDelivered ? `Yes (${order.deliveredDate})` : 'No'}</td>
                <td><Link to={`/orders/${order._id}`}>Details</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

