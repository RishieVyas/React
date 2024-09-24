import { useEffect, useState } from "react";
import restaurants from "../../data";
import RestaurantCard, { PromotedRestaurant } from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRes, setListOfRes] = useState(restaurants);

  const RestaurantCardPromoted = PromotedRestaurant(RestaurantCard);

  const filterRes = () => {
    const filteredRes = restaurants.filter((e) =>
      e.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRes(filteredRes);
  };

  const onSearchInput = (val) => {
    setSearchText(val.target.value);
  };

  useEffect(() => {
    filterRes();
  }, [searchText]);

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
          <Link key={res.resId} to={"/restaurants/" + res.resId}>
            {res.promoted ? (
              <RestaurantCardPromoted res={res} />
            ) : (
              <RestaurantCard res={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
