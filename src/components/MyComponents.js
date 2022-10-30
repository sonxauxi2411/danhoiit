//class componet
//function component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Druis", age: "30" },
      { id: 2, name: "Druis 1", age: "32" },
      { id: 3, name: "Druis 2", age: "33" },
    ],
  };
  //JSX
  render() {
    return (
      <div>
        <UserInfor />

        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
