import { Link, useParams, useNavigate } from "react-router-dom";
import { getCarById, deleteCar } from "../../models/Car";
import { useEffect, useState } from "react";

export default function CarView() {
  const { id } = useParams();
  const [car, setCar] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCarById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCar(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === car.brand) {
      const result = await deleteCar(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong car brand");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedcar/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Car not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading car...</p>
      </>
    )
  }

  return (
    <>
      <h1>Car view</h1>
      <p className="carP">Car id: {id}</p>
      <p>Car brand: {car.brand}</p>
      <p>Car model: {car.model}</p>
      <p>Car year: {car.year}</p>
      <p>Car color: {car.color}</p>
      <p>Car price: {car.price}</p>
      <form>
        <input type="text" placeholder={car.brand} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete car</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatecar/${id}`}>
        <p>Update car</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
