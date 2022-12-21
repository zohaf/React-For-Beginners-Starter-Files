import { Component, createRef } from "react";

class AddFish extends Component {
  newFishNameRef = createRef();
  newFishPriceRef = createRef();
  newFishStatusRef = createRef();
  newFishDescRef = createRef();
  newFishImageRef = createRef();

  createFish = (e) => {
    e.preventDefault();

    //how can we get the value of the inputs out?
    const fish = {
      name: this.newFishNameRef.current.value,
      price: parseFloat(this.newFishPriceRef.current.value),
      status: this.newFishStatusRef.current.value,
      desc: this.newFishDescRef.current.value,
      image: this.newFishImageRef.current.value,
    };
    this.props.addFish(fish);
    //reset the fish form
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          nam="name"
          type="text"
          placeholder="name"
          ref={this.newFishNameRef}
        />
        <input
          name="price"
          type="text"
          placeholder="price"
          ref={this.newFishPriceRef}
        />
        <select name="status" type="select" ref={this.newFishStatusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          placeholder="description"
          ref={this.newFishDescRef}
        ></textarea>
        <input
          name="image"
          type="text"
          placeholder="image"
          ref={this.newFishImageRef}
        />
        <button type="submit"> + Add Fish</button>
      </form>
    );
  }
}

export default AddFish;
