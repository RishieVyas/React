import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from "./data";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={require("./assets/seoulLogo.png")} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ res }) => {
  return (
    <div className="restaurant-card">
      <img src={res.img} />
      <div className="restaurant-card-footer">
        <h4>{res.name}</h4>
        <p>★ {res.rating}</p>
        <span>{res.cuisine}</span>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">Search</div>
      <div className="restaurant-container">
        {restaurants.map((res) => (
          <RestaurantCard res={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
