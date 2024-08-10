import { Link, useParams } from "react-router-dom";

export default function CityDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your city {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
