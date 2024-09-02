import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createRestaurant } from "../../models/Restaurant";

export default function RestaurantCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const restaurant = await createRestaurant(formData);
    if (restaurant.status === 201) {
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
    return navigate(`/createdrestaurant/${id}`);
  };

  return (
    <>
      <h1>Restaurant create form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="owner"
          placeholder="Enter owner"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="cuisine"
          placeholder="Enter cuisine"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="ratings"
          placeholder="Enter ratings"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create restaurant</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
