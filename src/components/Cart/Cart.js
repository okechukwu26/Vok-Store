import React, { Component } from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { ProductConsumer } from "../../Context";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title name="your" title="cart"></Title>
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </>
              );
            } else {
              return (
                <>
                  <EmptyCart></EmptyCart>
                </>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
