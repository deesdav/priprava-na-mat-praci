import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateCity, getCityById } from "../../models/City";

export default function CityUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [city, setCity] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCityById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCity(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const city = await updateCity(id, formData);
    if (city.status === 200) {
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
    return navigate(`/city/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>City not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading city...</p>
      </>
    );
  }

  return (
    <>
      <h1>City update form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={city.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="country"
          placeholder="Enter country"
          defaultValue={city.country}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="population"
          placeholder="Enter population"
          defaultValue={city.population}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="established"
          placeholder="Enter established"
          defaultValue={city.established}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update city</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
