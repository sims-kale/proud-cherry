import React from "react";
import { withRouter } from "react-router-dom";
class Users extends React.Component {
  handleButtonClick() {
    this.props.history.push("/userDetails");
  }
  render() {
    return (
      <div>
        <p>Users</p>
        <button onClick={() => this.handleButtonClick()}>
          Go to user details
        </button>
      </div>
    );
  }
}

export default withRouter(Users);
