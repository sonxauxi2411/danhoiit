//class componet
//function component
import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Druis",
    address: "Local",
    age: "26",
  };
  handleClick = (event) => {
    // console.log("click ME");
    // console.log(this.state.name);
    this.setState({
      name: "Son",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMoverOver(event) {
    console.log(event);
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.age}
        <button onMouseOver={this.handleOnMoverOver}>onMouseOver!!</button>
        <button onClick={this.handleClick}>Click ME!!</button>
      </div>
    );
  }
}

export default MyComponent;
