import React, { useState } from "react";
import SubCard from "./SubCard";

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

export default Card;
