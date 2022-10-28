//class componet
//function component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfor = {
      name: "leac",
      age: 29,
    };
    return (
      <div>
        <UserInfor />
        <DisplayInfor name="Druis" age="26" />
        <DisplayInfor name="son" age="236" />
        <DisplayInfor myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;
