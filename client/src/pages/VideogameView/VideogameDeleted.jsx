import { Link, useParams } from "react-router-dom";

export default function VideogameDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your videogame {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
