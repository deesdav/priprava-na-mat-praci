import { useParams, Link } from "react-router-dom";

export default function CreatedCity() {
  const { id } = useParams();

  return (
    <>
      <p>City was created: {id}</p>
      <Link to={`/city/${id}`}>
        <p>View city</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
