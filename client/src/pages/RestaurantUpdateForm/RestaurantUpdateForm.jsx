import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateRestaurant, getRestaurantById } from "../../models/Restaurant";

export default function RestaurantUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [restaurant, setRestaurant] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getRestaurantById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setRestaurant(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const restaurant = await updateRestaurant(id, formData);
    if (restaurant.status === 200) {
      redirectToSuccessPage(restaurant.payload._id);
    } else {
      setInfo(restaurant.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/restaurant/${id}`);
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
      <h1>Restaurant update form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={restaurant.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="owner"
          placeholder="Enter owner"
          defaultValue={restaurant.owner}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="cuisine"
          placeholder="Enter cuisine"
          defaultValue={restaurant.cuisine}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="ratings"
          placeholder="Enter ratings"
          defaultValue={restaurant.ratings}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update restaurant</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
