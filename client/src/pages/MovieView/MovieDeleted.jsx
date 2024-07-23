import { Link, useParams } from "react-router-dom";

export default function MovieDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your movie {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
