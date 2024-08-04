import { Link, useParams } from "react-router-dom";

export default function ProductDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your product {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
