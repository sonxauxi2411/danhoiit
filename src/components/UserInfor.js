import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Druis",
    address: "Local",
    age: "26",
  };

  handleChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your Name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleChangeInput(event)}
          />
          <label>Your Age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
