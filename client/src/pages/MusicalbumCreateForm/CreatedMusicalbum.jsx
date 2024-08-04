import { useParams, Link } from "react-router-dom";

export default function CreatedMusicalbum() {
  const { id } = useParams();

  return (
    <>
      <p>Music album was created: {id}</p>
      <Link to={`/musicalbum/${id}`}>
        <p>View music album</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
