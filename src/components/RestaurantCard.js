const RestaurantCard = ({ res }) => {
  return (
    <div key={res.resId} className="restaurant-card">
      <img src={res.img} />
      <div className="restaurant-card-footer">
        <h4>{res.name}</h4>
        <p>{res.rating}</p>
        <span>{res.cuisine}</span>
      </div>
    </div>
  );
};

export const PromotedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-gray-100 text-red-700 rounded-lg w-24 text-center border border-black">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
