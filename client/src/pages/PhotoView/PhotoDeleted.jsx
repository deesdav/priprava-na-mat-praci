import { Link, useParams } from "react-router-dom";

export default function PhotoDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your photo {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
