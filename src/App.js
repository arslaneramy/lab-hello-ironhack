import React, { Component } from "react";
import Article from "./Article";

const icon1 = "/images/icon1.png";
const icon2 = "/images/icon2.png";
const icon3 = "/images/icon3.png";
const icon4 = "/images/icon4.png";

class App extends Component {
  render() {
    return (
      <div className="main-div">
        <div className="intro">
          <h1> Say Hello to </h1>
          <h1> ReactJS </h1>

          <h4>You will learn to use</h4>
          <h4>the most popular front end library</h4>
          <h4>and become a supernija developer</h4>

          <button>Awesome!</button>
        </div>

        <div id="features">
          <Article
            img={icon1}
            title="Declarative"
            description="React makes it painless to create interactive UIs"
          />
          <Article
            img={icon2}
            title="Components"
            description="Build encapsulated componenents that manages their state"
          />
          <Article
            img={icon3}
            title="Single-Way"
            description="A set of immaculate values are passed to the component's"
          />
          <Article
            img={icon4}
            title="JSX"
            description="Stastically-type designed to run on modern browsers"
          />
        </div>
      </div>
    );
  }
}

export default App;
