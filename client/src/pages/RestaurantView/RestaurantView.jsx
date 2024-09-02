import { Link, useParams, useNavigate } from "react-router-dom";
import { getRestaurantById, deleteRestaurant } from "../../models/Restaurant";
import { useEffect, useState } from "react";

export default function RestaurantView() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getRestaurantById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setRestaurant(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === restaurant.name) {
      const result = await deleteRestaurant(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong restaurant name");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedrestaurant/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Restaurant not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading restaurant...</p>
      </>
    );
  }

  return (
    <>
      <h1>Restaurant view</h1>
      <p className="restaurantP">Restaurant id: {id}</p>
      <p>Restaurant name: {restaurant.name}</p>
      <p>Restaurant owner: {restaurant.owner}</p>
      <p>Restaurant cuisine: {restaurant.cuisine}</p>
      <p>Restaurant ratings: {restaurant.ratings}</p>
      <form>
        <input type="text" placeholder={restaurant.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete restaurant</button>
        <p>{info}</p>
      </form>
      <Link to={`/updaterestaurant/${id}`}>
        <p>Update restaurant</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
