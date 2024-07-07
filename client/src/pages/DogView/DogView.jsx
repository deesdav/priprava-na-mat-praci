import { Link, useParams, useNavigate } from "react-router-dom";
import { getDogById, deleteDog } from "../../models/Dog";
import { useEffect, useState } from "react";

export default function DogView() {
  const { id } = useParams();
  const [dog, setDog] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getDogById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDog(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === dog.name) {
      const result = await deleteDog(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong dog name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deleteddog/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Dog not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading dog...</p>
      </>
    )
  }

  return (
    <>
      <h1>Dog view</h1>
      <p className="dogP">Dog id: {id}</p>
      <p>Dog name: {dog.name}</p>
      <p>Dog breed: {dog.breed}</p>
      <p>Dog age: {dog.age}</p>
      <p>Dog weight: {dog.weight}</p>
      <form>
        <input type="text" placeholder={dog.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete dog</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatedog/${id}`}>
        <p>Update dog</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
