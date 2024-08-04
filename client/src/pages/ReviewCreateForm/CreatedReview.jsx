import { useParams, Link } from "react-router-dom";

export default function CreatedReview() {
  const { id } = useParams();

  return (
    <>
      <p>Review was created: {id}</p>
      <Link to={`/review/${id}`}>
        <p>View review</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
