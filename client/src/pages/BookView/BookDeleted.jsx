import { Link, useParams } from "react-router-dom";

export default function BookDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your book {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
