import React from "react";
import UserDetails from "./UserDetails";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      srNumber: 1,
    };

    console.log(this.props.name + "Child constructor called");
  }

  componentDidMount() {
    console.log(this.props.name + "Child component did mount is called");
  }

  render() {
    const { name, location, contact, role } = this.props;
    const { srNumber } = this.state;

    console.log(this.props.name + "Child render is called");

    return (
      <div className="user-card">
        <h2>
          {srNumber}: {name}
        </h2>
        <button
          onClick={() => {
            this.setState({
              srNumber: this.state.srNumber + 1,
            });
          }}
        >
          Increase the number
        </button>
        <p> Location: {location} </p>
        <p> Contact: {contact} </p>
        <UserDetails role={role} />
      </div>
    );
  }
}

export default User;
