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

export default RestaurantCard;
