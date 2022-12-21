import { Component } from "react";
import { formatPrice } from "./../helpers";

class Fish extends Component {
  render() {
    const { name, price, desc, status, image } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name} <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          onClick={() => this.props.addOrder(this.props.index)}
          disabled={!isAvailable}
        >
          {isAvailable ? "Add to Cart" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;
