import { Link, useParams } from "react-router-dom";

export default function EventDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your event {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
