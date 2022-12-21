import { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "./../sample-fishes";

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    const fishes = { ...this.state.fish };
    fishes[`fish${new Date()}`] = fish;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  addOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fish of the day" />

          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => {
              return (
                <Fish
                  addOrder={this.addOrder}
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                />
              );
            })}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
