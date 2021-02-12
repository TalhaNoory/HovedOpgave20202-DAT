import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }

  componentDidMount() {
    const query = `
        query Product($id: ID!) {
            Product(id:$id) {
              id 
              producerId
              title 
              type 
              image 
              category 
              unit
              unitSize
              bulkUnit
              bulkSize
              price
            }
          }`;

    const url = "http://localhost:3000/graphql";
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id: this.props.match.params.id } }),
    };
    fetch(url, opts)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        this.setState({
          products: [result.data.Product]
        });
      })
      .catch(console.error);
  }

  render() {
    console.log()
    return (
      <div>
        {this.state.product !== undefined
          ? this.state.product.map((product) => (
            <div key={product.id}>
              <div className="container py-5">
                {/* Title */}
                <div className="row">
                  <div
                    className="col-10 mx-auto text-center
                                text-slanted text-blue my-5"
                  >
                    <h1>{product.title}</h1>
                  </div>
                </div>
                {/* End Title */}
                {/* Product Info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-3 my-3">
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  {/* Product text */}
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>{product.type}</h2>
                    <h5>{product.category}</h5>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      produceret af :{" "}
                      <span className="text-uppercase">
                      <Link to={`/userinfo/}`}>
                        {product.producer}
                      </Link>
                      {/* {this.state.user.map((user) =>
                      <Link to={`/userinfo/:${user.id}`}>
                        {products.producer}
                      </Link>)} */}
                      </span>
                    </h4>
                    <h3 className="text-blue">
                      <strong>
                        pris pr. {product.unit}
                        {": "}
                        <span> kr,- </span>
                        {product.price
                          .toFixed(2)
                          .toString()
                          .replace(".", ",")}
                      </strong>
                    </h3>
                    <h5 className="text-blue">
                      <strong>
                        {product.bulkUnit}
                        {": kr,-"}
                      </strong>
                    </h5>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Om produktet :
                      </p>
                    {/* End Product text */}
                    {/* Button */}
                    <div>
                      <Link to="/products">
                        <ButtonContainer>Tilbage til varer</ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          : null}
      </div>
    );
  }
}
