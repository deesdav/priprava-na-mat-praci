import { Link, useParams, useNavigate } from "react-router-dom";
import { getVideogameById, deleteVideogame } from "../../models/Videogame";
import { useEffect, useState } from "react";

export default function VideogameView() {
  const { id } = useParams();
  const [videogame, setVideogame] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getVideogameById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setVideogame(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === videogame.title) {
      const result = await deleteVideogame(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong videogame title");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedvideogame/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Videogame not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading videogame...</p>
      </>
    );
  }

  return (
    <>
      <h1>Videogame view</h1>
      <p className="videogameP">Videogame id: {id}</p>
      <p>Videogame title: {videogame.title}</p>
      <p>Videogame developer: {videogame.developer}</p>
      <p>Videogame releaseDate: {videogame.releaseDate}</p>
      <p>Videogame genres: {videogame.genres}</p>
      <p>Videogame platforms: {videogame.platforms}</p>
      <p>Videogame rating: {videogame.rating}</p>
      <p>Videogame descriptiont: {videogame.description}</p>
      <form>
        <input type="text" placeholder={videogame.title} onChange={handleChange} />
        <button onClick={handleDelete}>Delete videogame</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatevideogame/${id}`}>
        <p>Update videogame</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
