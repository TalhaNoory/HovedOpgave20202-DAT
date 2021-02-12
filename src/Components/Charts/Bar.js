// import React, { Component } from 'react';
// import { Bar } from 'react-chartjs-2';

// export default class Bars extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: []
//         };
//     };

//     componentDidMount() {
//         const query = `
//         query {
//             allProducts {
//               id 
//               producerId
//               title
//               type
//               image
//               category
//               unit
//               unitSize
//               bulkUnit
//               bulkSize
//               price
//               labels
//               datasets
//             }
//           }`

//         const url = "http://localhost:3000/graphql";
//         const opts = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ query })
//         };
//         fetch(url, opts)
//             .then(res => res.json())
//             .then((result) => {
//                 this.setState({
//                     products: result.data.allProducts
//                 })
//             })
//             .catch(console.error);
//     };
//     render() {
//         return (
//             <div>
//                 {this.state.products !== undefined
//                     ? this.state.products.map((products) => (
//                         <div key={products.id}>
//                             <Bar
//                                 data={products}
//                                 options={{}}
//                             />
//                         </div>
//                     )) : null}
//             </div>
//         )
//     };
// };