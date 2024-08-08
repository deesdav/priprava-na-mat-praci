import { Link, useParams } from "react-router-dom";

export default function PlaylistDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your playlist {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
