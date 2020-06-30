import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";

export default class ProductList extends Component {
  state = {
    products: storeProducts,
  };
  render() {
    return (
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products" />
          <div className="row">
            <ProductConsumer>
              {(value) => {
                const { products } = value;
                return products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
              {/* {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }} */}
            </ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}
