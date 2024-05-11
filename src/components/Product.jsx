import React, { Component } from "react";

class Product extends Component {
  state = {
    count: this.props.product.count,
  };

  getClasses = () => {
    return this.state.count === 0 ? "text-danger m-2" : "text-warning m-2";
  };

  clickHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  incrementClick = (num) => {
    this.setState({
      count: this.state.count + num,
    });
  };

  render() {
    const { name, count } = this.props.product;
    return (
      <div>
        <span className={this.getClasses()}>{name}: </span>
        <span>{count}</span>
        <button className="btn btn-primary" onClick={() => this.props.onIncrement(this.props.product)}>+</button>
        <button className="btn btn-primary" onClick={() => this.props.onDelete(this.props.product)}>-</button>
      </div>
    );
  }
}

export default Product;
