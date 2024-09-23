import React from "react";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.role + "Grand child constructor is called");
  }

  componentDidMount() {
    console.log(this.props.role + "Grand child component did mount is called");
  }

  render() {
    console.log(this.props.role + "Grand child render is called");
    return (
      <div>
        <h3>{this.props.role}</h3>
      </div>
    );
  }
}

export default UserDetails;
