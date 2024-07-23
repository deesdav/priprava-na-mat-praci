import { Link, useParams, useNavigate } from "react-router-dom";
import { getMovieById, deleteMovie } from "../../models/Movie";
import { useEffect, useState } from "react";

export default function MovieView() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getMovieById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setMovie(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === movie.title) {
      const result = await deleteMovie(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong movie title");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedmovie/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Movie not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading movie...</p>
      </>
    )
  }

  return (
    <>
      <h1>Movie view</h1>
      <p className="movieP">Movie id: {id}</p>
      <p>Movie title: {movie.title}</p>
      <p>Movie director: {movie.director}</p>
      <p>Movie release year: {movie.releaseYear}</p>
      <p>Movie genre: {movie.genre}</p>
      <p>Movie duration: {movie.duration}</p>
      <p>Movie rating: {movie.rating}</p>
      <form>
        <input type="text" placeholder={movie.title} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete movie</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatemovie/${id}`}>
        <p>Update movie</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
