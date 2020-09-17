import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Slider from "./Fragment/slider";
export default class Productlist extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider />
        <div className="py-4">
          <div className="container">
            <Title name="Sleep " title=" Aids " />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return product.id > 52 && product.id <= 56 ? (
                      <Product key={product.id} product={product} />
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
