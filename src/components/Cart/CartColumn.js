import React from "react";

export default function CartColumn() {
  return (
    <div className="container-fluid  d-none d-lg-block  text-center  ">
      <div className="row ">
        <div className=" col-10 mx-auto  col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        <div className=" col-10 mx-auto  col-lg-2">
          <p className="text-capitalize">name of product</p>
        </div>
        <div className=" col-10 mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        <div className=" col-10 mx-auto col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className=" col-10 mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        <div className=" col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
      </div>
    </div>
  );
}
