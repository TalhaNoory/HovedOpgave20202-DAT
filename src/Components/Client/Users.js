import React, { Component } from 'react';
import { ProductWrapper } from '../Style/Button';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    };

    componentDidMount() {
        const query = `
        query {
          allUsers {
            id
            name
            role
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
                    user: result.data.allUsers
                })
            })
            .catch(console.error);
    };
    render() {
        return (
            <div>
                {this.state.user !== undefined
                    ? this.state.user.map((user) => (
                        <div key={user.id}>
                            <ProductWrapper
                                className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                                <div className="card">
                                    {/* footer for the cart! */}
                                    <div className="card-footer d-flex justify-content-between">
                                        {user.name}
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        {user.role}
                                    </div>
                                </div>
                            </ProductWrapper>
                        </div>
                    )) : null}
            </div>
        )
    }
};
