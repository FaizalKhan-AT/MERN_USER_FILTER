import React, { useState } from "react";

function Card({ user }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <div className="col-md-6 my-2">
        <div
          className={`card card-no bg-dark text-white ${
            showDetails && "border-success"
          } px-3 p-2 d-flex flex-row align-items-center justify-content-between`}
        >
          <h5 className="mb-0">{user.firstName + " " + user.lastName}</h5>
          <div className="d-flex gap-3 align-items-center">
            <button
              className="btn btn-outline-success"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Less" : "More"}
            </button>
          </div>
        </div>
        {showDetails && (
          <div className="card card-exp border-success bg-dark text-white">
            <div className="card-body">
              <div className="card-title">Customer id : {user.customerId}</div>
              <div className="card-text">
                <h5>Orders ({user.orders.length})</h5>
                {user.orders.map((order, idx) => {
                  return <SubCard key={user._id + idx} order={order} />;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
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

export default Card;
