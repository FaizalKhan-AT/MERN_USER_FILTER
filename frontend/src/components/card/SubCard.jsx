import React from "react";

function SubCard({ order }) {
  return (
    <>
      <div className="card my-2 bg-dark border-danger p-2">
        <span className="text-success">Order id: {order.orderId}</span>
        <span className="text-success">Amount: Rs {order.amount}</span>
        <span className="text-success">date: {order.date.split("T")[0]}</span>
      </div>
    </>
  );
}

export default SubCard;
