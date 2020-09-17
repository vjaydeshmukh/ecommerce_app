import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class Productlist extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-4">
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return product.title
                      .toLowerCase()
                      .includes(this.props.match.params.str.toLowerCase()) ? (
                      <Product key={product.title} product={product} />
                    ) : (
                      <i />
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
