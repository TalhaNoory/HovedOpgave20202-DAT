import React, { Component } from 'react';

export default class Alarm extends Component {
    constructor(props) {
        super(props);
        this.state = { id: '' };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);

        const query = `
        query Product($id: ID!) {
            Product(id:$id) {
              id 
              producer 
              title 
              type 
              image 
              category 
              organic
              cold
              unit
              unitSize
              bulkUnit
              bulkSize
              price
              quantity
              descriptions
            }
          }`;

        const url = "http://localhost:3000/graphql";
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables: { id: this.state.id } })
        };

        fetch(url, opts)
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <input type="text" value={this.state.value} name="id" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}