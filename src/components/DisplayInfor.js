import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    //destructuring array/object
    const { age, name } = this.props;
    //props => properties (tài sản) truyền dự liệu từ component cha sang con
    return (
      <div>
        <div>My name's {name}</div>
        <div>My Age's {age}</div>
      </div>
    );
  }
}
export default DisplayInfor;
