import React from "react";

class DisplayInfor extends React.Component {
  render() {
    //destructuring array/object
    const { listUsers } = this.props;

    //const listUsers = this.props.listUsers
    //props => properties (tài sản) truyền dự liệu từ component cha sang con
    return (
      <div style={{ padding: 32 }}>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name}</div>
              <div>My age's {user.age}</div>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}
export default DisplayInfor;
