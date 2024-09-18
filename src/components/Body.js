import { useState } from "react";
import restaurants from "../../data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRes, setListOfRes] = useState(restaurants);

  const filterRes = () => {
    const filteredRes = restaurants.filter((e) =>
      e.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRes(filteredRes);
  };

  const onSearchInput = (val) => {
    setSearchText(val.target.value);
    filterRes();
  };

  return (
    <div className="body">
      <div className="searchBar">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(val) => onSearchInput(val)}
        />
        <button onClick={filterRes}>Search</button>
      </div>
      <div className="restaurant-container">
        {listOfRes.map((res) => (
          <RestaurantCard key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
