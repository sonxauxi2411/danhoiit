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
  handleChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
