import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { ShoppingCart } from "@material-ui/icons";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col col-md-6 col-lg-2 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-4"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <div className="d">
                  {title}
                  <br />
                  MMK : {price}
                </div>
                <br />

                <button
                  className="btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize" disabled>
                      {" "}
                      in cart
                    </p>
                  ) : (
                    <p>
                      Add To Cart{" "}
                      <ShoppingCart
                        style={{ color: "black", alignItems: "center" }}
                      />
                    </p>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    height: 238px;
    width: 150px;
    border-color: #f5f2ea;
    border-radius: 10px;
    /* flex-wrap: wrap; */
  }

  &:hover {
    .card {
      border: 0.02rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
    }
  }

  .btn {
    position: absolute;
    align-items: center;
    bottom: 6px;
    right: 0;
    /* padding-top: 3px; */
    border: none;
    cursor: pointer;
    width: 100%;
    height: 13%;
    border-radius: 5px;
    background-color: #3159b8;
  }

  .btn:hover {
    /* color: var(--mainBlue); */
    cursor: pointer;
  }
  .card-img-top {
    width: 100%;
    height: auto;
  }
`;
