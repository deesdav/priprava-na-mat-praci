import { Link, useParams } from "react-router-dom";

export default function TaskDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your task {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
