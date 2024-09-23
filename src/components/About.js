import User from "./User";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }

  render() {
    console.log("Parent render");

    return (
      <div className="about-container">
        <h2>About Us</h2>
        <p>This is about us page</p>
        <User
          name={"First Vyas"}
          location={"College Park"}
          contact={"abcret@gmail.com"}
          role={"Front End Developer"}
        />
        <User
          name={"Second Vyas"}
          location={"College Park"}
          contact={"abcret@gmail.com"}
          role={"Back End Developer"}
        />
        <User
          name={"Third Vyas"}
          location={"College Park"}
          contact={"abcret@gmail.com"}
          role={"Devops Engineer"}
        />
      </div>
    );
  }
}

export default About;
