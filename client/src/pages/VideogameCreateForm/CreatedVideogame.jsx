import { useParams, Link } from "react-router-dom";

export default function CreatedVideogame() {
  const { id } = useParams();

  return (
    <>
      <p>Videogame was created: {id}</p>
      <Link to={`/videogame/${id}`}>
        <p>View videogame</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
