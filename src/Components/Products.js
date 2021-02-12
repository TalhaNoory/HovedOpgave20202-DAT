import React, { Component } from 'react';
import { ProductWrapper } from '../Button';
import { Link } from 'react-router-dom';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
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
        console.log(opts.body)
        fetch(url, opts)
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                this.setState({
                    products: result.data.allProducts
                })
            })
            .catch(console.error);
    };

    render() {

        return (
            <div>
                {this.state.products !== undefined
                    ? this.state.products.map((products) => (
                        <div key={products.id}>
                            <ProductWrapper
                                className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                                <div className="card">
                                    <div className="img-container p-5">
                                        <Link to={`/details/${products}/${products.id}`}>
                                            <img src={products.image} alt="Product" className="card-img-top" />
                                        </Link>
                                        {products.organic && <div style={{ backgroundColor: "green" }}>Ø</div>}
                                        {products.cold && <div style={{ backgroundColor: "lightblue" }}>F</div>}
                                    </div>
                                    {/* footer for the cart! */}
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">{products.title}</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <div className="mr-1">
                                                kr,- {" "}
                                                {products.price.toFixed(2).toString().replace(".", ",")}
                                            </div>
                                        </h5>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1"> qty:</span>{products.quantity}
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