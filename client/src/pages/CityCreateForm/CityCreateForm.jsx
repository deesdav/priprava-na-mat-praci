import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCity } from "../../models/City";

export default function CityCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const city = await createCity(formData);
    if (city.status === 201) {
      redirectToSuccessPage(city.payload._id);
    } else {
      setInfo(city.msg);
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
    return navigate(`/createdcity/${id}`);
  };

  return (
    <>
      <h1>City create form</h1>

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
          name="country"
          placeholder="Enter country"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="population"
          placeholder="Enter population"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="established"
          placeholder="Enter established"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create city</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
