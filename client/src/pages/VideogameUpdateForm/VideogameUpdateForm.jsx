import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateVideogame, getVideogameById } from "../../models/Videogame";

export default function VideogameUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [videogame, setVideogame] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getVideogameById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setVideogame(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const videogame = await updateVideogame(id, formData);
    if (videogame.status === 200) {
      redirectToSuccessPage(videogame.payload._id);
    } else {
      setInfo(videogame.msg);
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
    return navigate(`/videogame/${id}`);
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
      <h1>Videogame update form</h1>

      <form>
        <input
          type="text"
          required
          name="title"
          placeholder="Enter title"
          defaultValue={videogame.title}
          onChange={(e) => handleChange(e)}
        />
         <input
          type="text"
          required
          name="developer"
          placeholder="Enter developer"
          defaultValue={videogame.developer}
          onChange={(e) => handleChange(e)}
        />
         <input
          type="text"
          required
          name="genres"
          placeholder="Enter genres"
          defaultValue={videogame.genres}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="platforms"
          placeholder="Enter platforms"
          defaultValue={videogame.platforms}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="rating"
          placeholder="Enter rating"
          defaultValue={videogame.rating}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="description"
          placeholder="Enter description"
          defaultValue={videogame.description}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update videogame</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
