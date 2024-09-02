import { Link, useParams } from "react-router-dom";

export default function PodcastDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your podcast {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
