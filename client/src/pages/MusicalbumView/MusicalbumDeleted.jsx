import { Link, useParams } from "react-router-dom";

export default function MusicalbumDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your music album {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
