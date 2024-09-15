import restaurants from "../../data";
import RestaurantCard from "./RestaurantCard";

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

export default Body;
