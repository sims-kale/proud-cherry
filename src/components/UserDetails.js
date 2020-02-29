import React from "react";
import { withRouter } from "react-router-dom";
class UserDetails extends React.Component {
  goToUsers() {
    this.props.history.push("/user");
  }
  render() {
    return (
      <div>
        Users Details
        <li> address: Mumbai</li>
        <div>
          <button onClick={() => this.goToUsers()}>Go to Users</button>
        </div>
      </div>
    );
  }
}
export default withRouter(UserDetails);
