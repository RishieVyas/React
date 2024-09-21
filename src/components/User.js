import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location, contact } = this.props;

    return (
      <div className="user-card">
        <h2>Name: {name} </h2>
        <p>Location: {location} </p>
        <p>Contact: {contact} </p>
      </div>
    );
  }
}

export default User;
