import { useParams, Link } from "react-router-dom";

export default function CreatedEmployee() {
  const { id } = useParams();

  return (
    <>
      <p>Employee was created: {id}</p>
      <Link to={`/employee/${id}`}>
        <p>View employee</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
