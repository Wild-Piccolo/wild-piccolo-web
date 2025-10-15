import React from "react";
import { useParams, Link } from "react-router-dom";
import { orders } from "./data";

export default function OrderDetail() {
  const { id } = useParams();
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className="content">
        <h1>Order Not Found</h1>
        <Link to="/orders">Back to Orders</Link>
      </div>
    );
  }

  return (
    <div className="content">
      <h1>Order {order.orderNumber}</h1>
      <p><strong>Customer:</strong> {order.customerName}</p>
      <p><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><Link to="/orders">Back to Orders</Link></p>
    </div>
  );
}
