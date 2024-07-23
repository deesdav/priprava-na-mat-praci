import { useParams, Link } from "react-router-dom";

export default function CreatedBook() {
  const { id } = useParams();

  return (
    <>
      <p>Book was created: {id}</p>
      <Link to={`/book/${id}`}>
        <p>View book</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
