import React from "react";
import "../../../src/App.css";
export default function CartColums() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase"> Item </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase "> Name</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase ">Price of Product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase"> Quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Remove Product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Sub Total</p>
        </div>
      </div>
    </div>
  );
}
