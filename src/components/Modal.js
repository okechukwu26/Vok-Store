import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center"
                    >
                      <h5>item added to cart</h5>
                      <img
                        src={img}
                        alt="store"
                        className="img-fluid mt-2 font-weight-bold"
                      />
                      <h3 className=" mt-2 font-weight-bold">{title}</h3>
                      <p className="lead mt-2 text-muted">
                        {" "}
                        price : <span>#</span>
                        {price}
                      </p>
                      <div className="mb-4">
                        <Link to="/">
                          <Button className="mr-2" onClick={() => closeModal()}>
                            Continue Shopping
                          </Button>
                        </Link>
                        <Link to="/cart">
                          <Button cart onClick={() => closeModal()}>
                            {" "}
                            go to cart
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
