import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      srNumber: 1,
    };
  }

  render() {
    const { name, location, contact } = this.props;
    const { srNumber } = this.state;

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
      </div>
    );
  }
}

export default User;
