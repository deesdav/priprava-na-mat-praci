import { Link, useParams } from "react-router-dom";

export default function ReviewDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your review {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
