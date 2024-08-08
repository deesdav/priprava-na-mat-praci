import { Link, useParams } from "react-router-dom";

export default function SportteamDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your sport team {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
