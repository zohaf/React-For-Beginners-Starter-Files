import { Component } from "react";
import AddFish from "./AddFish";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <p>inventory</p>
        <AddFish addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load sample fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
