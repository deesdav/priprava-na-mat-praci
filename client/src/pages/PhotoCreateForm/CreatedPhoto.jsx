import { useParams, Link } from "react-router-dom";

export default function CreatedPhoto() {
  const { id } = useParams();

  return (
    <>
      <p>Photo was created: {id}</p>
      <Link to={`/photo/${id}`}>
        <p>View photo</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
