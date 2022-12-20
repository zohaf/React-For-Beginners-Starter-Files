import { Component, createRef } from "react";
import { getFunName } from "./../helpers";

class StorePicker extends Component {
  myInput = createRef();
  goToStore = (e) => {
    e.preventDefault();

    this.props.history.push(`store/${this.myInput.current.value}`);
  };
  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">visit the store</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
