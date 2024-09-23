import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      srNumber: 1,
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };

    console.log("Child constructor called");
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/RishieVyas");
    const json = await res.json();

    this.setState({
      userInfo: json,
    });
    console.log("Child component did mount is called", json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { srNumber } = this.state;
    console.log("Child render is called");

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
        <img src={avatar_url} />
      </div>
    );
  }
}

export default User;
