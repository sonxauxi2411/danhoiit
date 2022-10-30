import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShow: true,
  };
  handleShowHide = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    //destructuring array/object
    const { listUsers } = this.props;
    // console.log(listUsers);
    //const listUsers = this.props.listUsers
    //props => properties (tài sản) truyền dự liệu từ component cha sang con

    return (
      <div style={{ padding: 32 }}>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShow ? "hide" : "show"} list users
          </span>
        </div>
        {this.state.isShow && (
          <div>
            <div>
              {listUsers.map((user) => {
                return (
                  <div
                    key={user.id}
                    className={+user.age > 18 ? "green" : "red"}
                  >
                    <div>My name's {user.name}</div>
                    <div>My age's {user.age}</div>
                    <hr></hr>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
