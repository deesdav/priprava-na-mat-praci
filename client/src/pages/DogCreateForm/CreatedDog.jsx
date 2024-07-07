import { useParams, Link } from "react-router-dom";

export default function CreatedDog() {
  const { id } = useParams();

  return (
    <>
      <p>Dog was created: {id}</p>
      <Link to={`/dog/${id}`}>
        <p>View dog</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
