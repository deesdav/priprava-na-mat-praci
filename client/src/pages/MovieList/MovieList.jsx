import { Link } from "react-router-dom";
import MovieLink from "./MovieLink";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../models/Movie";

export default function MovieList() {
  const [movies, setMovies] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllMovies();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setMovies(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Movies not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Movies are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Movie list</h1>
      {
        movies.map((movie, index) => (
            <MovieLink key={index} name={movie.title} id={movie._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
