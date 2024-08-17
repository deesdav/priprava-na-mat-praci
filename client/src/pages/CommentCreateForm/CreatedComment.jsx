import { useParams, Link } from "react-router-dom";

export default function CreatedComment() {
  const { id } = useParams();

  return (
    <>
      <p>Comment was created: {id}</p>
      <Link to={`/comment/${id}`}>
        <p>View comment</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
