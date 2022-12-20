import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <header className="top">
          <h1>
            Catch{" "}
            <span className="ofThe">
              <span className="of">of</span>
              <span className="the">the</span>
            </span>{" "}
            day
          </h1>
          <h3 className="tagline">
            <span>fresh daily</span>
          </h3>
        </header>
      </>
    );
  }
}

export default Header;
