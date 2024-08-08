import { useParams, Link } from "react-router-dom";

export default function CreatedPlaylist() {
  const { id } = useParams();

  return (
    <>
      <p>Playlist was created: {id}</p>
      <Link to={`/playlist/${id}`}>
        <p>View playlist</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
