import { useParams, Link } from "react-router-dom";

export default function CreatedMovie() {
  const { id } = useParams();

  return (
    <>
      <p>Movie was created: {id}</p>
      <Link to={`/movie/${id}`}>
        <p>View movie</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
