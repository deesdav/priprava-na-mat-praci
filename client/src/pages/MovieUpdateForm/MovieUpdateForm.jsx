import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateMovie, getMovieById } from "../../models/Movie";

export default function MovieUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [movie, setMovie] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getMovieById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setMovie(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const movie = await updateMovie(id, formData);
    if (movie.status === 200) {
      redirectToSuccessPage(movie.payload._id);
    } else {
      setInfo(movie.msg);
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
    return navigate(`/movie/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Movie not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading movie...</p>
      </>
    );
  }

  return (
    <>
      <h1>Movie update form</h1>

      <form>
        <input
          type="text"
          required
          name="title"
          placeholder="Enter title"
          defaultValue={movie.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="director"
          placeholder="Enter director"
          defaultValue={movie.director}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="releaseYear"
          placeholder="Enter release year"
          defaultValue={movie.releaseYear}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="genre"
          placeholder="Enter genre"
          defaultValue={movie.genre}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="duration"
          placeholder="Enter duration"
          defaultValue={movie.duration}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="rating"
          placeholder="Enter is rating (0 - 10)"
          defaultValue={movie.rating}
          onChange={(e) => handleChange(e)}
        />
      
        <button onClick={handlePost}>Update movie</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
