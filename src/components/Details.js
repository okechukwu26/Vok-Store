import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            img,
            price,
            info,
            inCart,
            company,
          } = value.detailProduct;
          return (
            <div className="container py-3">
              {/*title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue text-slanted my-5">
                  <h5>{value.detailProduct.title}</h5>
                </div>
              </div>
              {/* end title */}
              {/*product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-2">
                  <img src={img} alt="store" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-2 text-capitalize">
                  <h3>model: {title}</h3>
                  <h4 className="text-title text-uppercase font-weight-bolder text-muted mt-2 mb-3">
                    Made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span> $</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-2 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{info}</p>

                  {/*Button */}
                  <div>
                    <Link to="/">
                      <Button className="mr-2">back to products</Button>
                    </Link>

                    <Button
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "incart" : "add to cart"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
