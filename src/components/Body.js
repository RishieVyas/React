import { useState } from "react";
import restaurants from "../../data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body">
      <div className="searchBar">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(val) => {
            setSearchText(val.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log("Search clicked");
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
