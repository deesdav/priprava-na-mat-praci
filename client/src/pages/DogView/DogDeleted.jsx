import { Link, useParams } from "react-router-dom";

export default function DogDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your dog {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
