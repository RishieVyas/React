import User from "./User";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>This is about us page</p>
      <User
        name={"Rishi Vyas"}
        location={"College Park"}
        contact={"abcret@gmail.com"}
      />
    </div>
  );
};

export default About;
