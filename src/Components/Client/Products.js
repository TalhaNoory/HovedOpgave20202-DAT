import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductWrapper } from '../Style/Button';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        };
    };

    componentDidMount() {
        const query = `
        query {
            allProducts {
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
          }`

        const url = "http://localhost:3000/graphql";
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };
        fetch(url, opts)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    product: result.data.allProducts
                })
            })
            .catch(console.error);
    };

    render() {
        return (
            <div>
                {this.state.product !== undefined
                    ? this.state.product.map((product) => (
                        <div key={product.id}>
                            <ProductWrapper
                                className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                                <div className="card">
                                    <div className="img-container p-5">
                                        <Link to={`/details/${product}/${product.id}`}>
                                            <img src={product.image} alt="Product" className="card-img-top" />
                                        </Link>
                                    </div>
                                    {/* footer for the cart! */}
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">{product.title}</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <div className="mr-1">
                                                kr,- {" "}
                                                {product.price.toFixed(2).toString().replace(".", ",")}
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                            </ProductWrapper>
                        </div>
                    )) : null}
            </div>
        )
    }
};

// getItem = (id) => {
//     const product = this.state.products.find(item => item.id === id);
//     return product;
// };

// handleDetail = (id) => {
//     const product = this.getItem(id);
//     this.setState(() => {
//         return { products: product };
//     });
// };