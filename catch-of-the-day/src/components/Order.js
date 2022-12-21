import { Component } from "react";
import { formatPrice } from "./../helpers";

class Order extends Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (!isAvailable) {
      return (
        <li key={key}>sorry {fish ? fish.name : "fish"} is not available!</li>
      );
    }
    return (
      <li key={key}>
        {count} lbs x {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      //we need fish that they are adding
      const fish = this.props.fishes[key];
      // we need the number of htat fish they are adding
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + fish.price * count;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>

        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
// we want to show the name of each of the items
