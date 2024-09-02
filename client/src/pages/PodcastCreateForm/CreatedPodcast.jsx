import { useParams, Link } from "react-router-dom";

export default function CreatedPodcast() {
  const { id } = useParams();

  return (
    <>
      <p>Podcast was created: {id}</p>
      <Link to={`/podcast/${id}`}>
        <p>View podcast</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
