import { Component } from "react";

class StorePicker extends Component {
  render() {
    return (
      <>
        <p>fish</p>
        <form className="store-selector">
          <h2>please enter a store</h2>
          <input type="text" required placeholder="Store Name" />
          <button>visit the store -></button>
        </form>
      </>
    );
  }
}

export default StorePicker;
