import { Link } from "react-router-dom";
import RestaurantLink from "./RestaurantLink";
import { useState, useEffect } from "react";
import { getAllRestaurants } from "../../models/Restaurant";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllRestaurants();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setRestaurants(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Restaurants not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Restaurants are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Restaurant list</h1>
      {restaurants.map((restaurant, index) => (
        <RestaurantLink
          key={index}
          name={restaurant.name}
          id={restaurant._id}
        />
      ))}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
