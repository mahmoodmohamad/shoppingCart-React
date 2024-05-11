import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, name: "Product 1", count: 1 },
      { id: 2, name: "Product 2", count: 8 },
      { id: 3, name: "Product 3", count: 5 },
    ],
  };
  handleDelete=product=>{
    const newProducts= this.state.products.filter((p)=> p.id != product.id);
    this.setState({products: newProducts});
  };
  IncrementHandler = (product) => {
    const products = [...this.state.products]; // Create a copy of the state array
    const index = products.findIndex((p) => p.id === product.id); // Find the index of the product to be updated
    products[index] = { ...products[index] }; // Create a copy of the product object at that index
    products[index].count++; // Increment the count of the product
    this.setState({ products }); // Update the state with the new array
  };
  
  render() {
    return (
      <div> 
        <h1>Shopping Cart</h1>
        {this.state.products.map(product=>(
            <Product 
            key={product.id}
            product={product} 
            onDelete={this.handleDelete}
            onIncrement={this.IncrementHandler}/>
        ))}
      
      </div>
    );
  }
}

export default ShoppingCart;
