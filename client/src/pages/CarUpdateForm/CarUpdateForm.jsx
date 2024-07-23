import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateCar, getCarById } from "../../models/Car";

export default function CarUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [car, setCar] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCarById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCar(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const car = await updateCar(id, formData);
    if (car.status === 200) {
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
    return navigate(`/car/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Car not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading car...</p>
      </>
    );
  }

  return (
    <>
      <h1>Car update form</h1>

      <form>
        <input
          type="text"
          required
          name="brand"
          placeholder="Enter brand"
          defaultValue={car.brand}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="model"
          placeholder="Enter model"
          defaultValue={car.model}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="year"
          placeholder="Enter year"
          defaultValue={car.year}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="color"
          placeholder="Enter color"
          defaultValue={car.color}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="price"
          placeholder="Enter price"
          defaultValue={car.price}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="radio"
          value="true"
          required
          name="isElectric"
          placeholder="Enter is electric"
          defaultValue={car.isElectric}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="radio"
          value="false"
          required
          name="isElectric"
          placeholder="Enter is electric"
          defaultValue={car.isElectric}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update car</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
