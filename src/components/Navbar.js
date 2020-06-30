import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Styled from "styled-components";
import { Button } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark  px-sm-5">
          <Link to="/">
            <img src={logo} alt="store" className="navbar-brand"></img>
          </Link>

          <ul className="navbar-nav align-items-center ">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <Button>
              <span className="mr-2">
                <i className="fa fa-cart-plus"></i>
              </span>
              my cart
            </Button>
          </Link>
        </NavWrapper>
      </React.Fragment>
    );
  }
}
const NavWrapper = Styled.nav`
background: var(--mainBlue);
font-size:1.4rem;
text-transform:capitalize;
.nav-link{
  color:var(--mainWhite) !important;
}

`;
