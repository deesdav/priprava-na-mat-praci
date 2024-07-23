import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCar } from "../../models/Car";

export default function CarCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const car = await createCar(formData);
    if (car.status === 201) {
      redirectToSuccessPage(car.payload._id);
    } else {
      setInfo(car.msg);
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
    return navigate(`/createdcar/${id}`);
  };

  return (
    <>
      <h1>Car create form</h1>

      <form>
      <input
          type="text"
          required
          name="brand"
          placeholder="Enter brand"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="model"
          placeholder="Enter model"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="year"
          placeholder="Enter year"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="color"
          placeholder="Enter color"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="price"
          placeholder="Enter price"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="radio"
          value="true"
          required
          name="isElectric"
          placeholder="Enter is electric"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="radio"
          value="false"
          required
          name="isElectric"
          placeholder="Enter is electric"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create car</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
