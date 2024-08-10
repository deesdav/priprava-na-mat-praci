import { Link, useParams, useNavigate } from "react-router-dom";
import { getCityById, deleteCity } from "../../models/City";
import { useEffect, useState } from "react";

export default function CityView() {
  const { id } = useParams();
  const [city, setCity] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCityById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCity(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === city.name) {
      const result = await deleteCity(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong city name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedcity/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>City not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading city...</p>
      </>
    )
  }

  return (
    <>
      <h1>City view</h1>
      <p className="cityP">Spor tteam id: {id}</p>
      <p>City name: {city.name}</p>
      <p>City country: {city.country}</p>
      <p>City population: {city.population}</p>
      <p>City established: {city.established}</p>
      <form>
        <input type="text" placeholder={city.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete city</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatecity/${id}`}>
        <p>Update city</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
