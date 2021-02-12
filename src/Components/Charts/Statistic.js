import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class Statistic extends Component {
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
              labels
              datasets
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
                            <Bar
                                data={products}
                                options={{
                                    responsive:false
                                }}
                                width={800}

                            />
                            <Line
                                data={products}
                                options={{
                                    responsive:false
                                }}
                                width={800}
                            />
                            <Pie
                                data={products}
                                options={{
                                    responsive:false
                                }}
                                width={800}
                            />
                        </div>
                    )) : null}
            </div>
        )
    };
};